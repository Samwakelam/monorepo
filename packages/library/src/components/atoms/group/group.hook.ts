import { Hook } from '@sam/types';

import {
  BasisProps,
  GroupHookProps,
  GroupState,
  GroupHandlers,
} from './group.definition';

export const useGroup = ({
  columns,
  collapseLayout = 'stack',
  children,
  group,
}: GroupHookProps): Hook<GroupState, GroupHandlers> => {
  /**
   * @function getColumnAdjustment
   * @description - sets the columns count to no greater that the number of children
   * @returns {number}
   */
  const getColumnAdjustment = (): number => {
    if (Array.isArray(children) && children.length < columns) {
      return children.length;
    }

    if (!Array.isArray(children)) {
      return 1;
    }

    return columns;
  };

  /**
   * @function getBasis
   * @description - sets the flex basis for the slide based on the number of slides in view.
   * @returns {BasisProps}
   */
  const getBasis = (): BasisProps => {
    const _columns = getColumnAdjustment();
    if (group.current) {
      const mob = group.current.clientWidth;

      const md =
        collapseLayout === 'stack'
          ? 100
          : (group.current.clientWidth -
              16 * ((_columns === 1 ? 2 : _columns) - 2)) /
            ((_columns === 1 ? 2 : _columns) - 1);

      const lg =
        (group.current.clientWidth -
          (_columns === 1 ? 0 : 16) * (_columns - 1)) /
        _columns;

      return { mob, md, lg };
    }
    return { mob: 100, md: 100, lg: 100 };
  };

  return {
    state: {},
    handlers: {
      getBasis,
      getColumnAdjustment,
    },
  };
};
