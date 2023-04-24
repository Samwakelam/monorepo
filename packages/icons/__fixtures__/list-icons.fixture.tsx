import { FillType, Icon } from '../src';
import { listMap, ListType } from '../src/maps';

export const Component = ({ fill }: { fill: FillType }): JSX.Element => {
  const keys = Object.keys(listMap);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        margin: '16px',
        justifyContent: 'center',
      }}
    >
      {keys.map((key) => {
        return (
          <div
            key={key}
            style={{
              display: 'flex',
              flexFlow: 'column',
              flexWrap: 'wrap',
              gap: '8px',
              margin: '16px',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Icon icon={key as ListType} fill={fill} ariaLabel={key} />
            <p style={{ whiteSpace: 'nowrap' }}>{key}</p>
          </div>
        );
      })}
    </div>
  );
};

export default {
  ['Outline']: () => <Component fill={FillType.OUTLINE} />,
  ['Solid']: () => <Component fill={FillType.SOLID} />,
};
