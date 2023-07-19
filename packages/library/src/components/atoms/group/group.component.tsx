import { Children, ReactElement, useMemo, useRef } from 'react';

import { apply, tw } from '@sam/theme/twind';

import { GroupProps } from './group.definition';
import { useGroup } from './group.hook';

import * as S from './group.styles';

export const Group = ({
  columns,
  layoutMode = 'flex',
  direction = 'forward',
  collapseLayout = 'stack',
  spacing = 'sm',
  children,
}: GroupProps): ReactElement<GroupProps> => {
  const group = useRef<HTMLDivElement>(null);

  const {
    handlers: { getBasis, resolveSpacing },
  } = useGroup({
    columns,
    collapseLayout,
    children,
    group,
  });

  const basis = useMemo(() => getBasis(), [columns, children]);

  return (
    <section
      className={tw(
        apply(
          S.GroupCss(resolveSpacing(spacing)),
          collapseLayout === 'stack'
            ? S.StackCss(direction === 'reverse')
            : S.ScrollCss(direction === 'reverse'),
        ),
      )}
      ref={group}
    >
      {Children.toArray(children).map((child, index) => {
        return (
          <div
            className={tw(
              S.GroupSlideCss(basis),
              layoutMode === 'fixed' && S.FixedLayoutCss,
            )}
            id={`group_slide_${index}`}
            key={`group_slide_${index}`}
          >
            {child}
          </div>
        );
      })}
    </section>
  );
};
