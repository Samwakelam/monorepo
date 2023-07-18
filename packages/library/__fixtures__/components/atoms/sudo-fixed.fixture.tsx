import { useRef } from 'react';

import { UnitType } from '@sam/types';

import { SudoFixed } from '../../../src';

const sectionStyle = (even: boolean) => ({
  height: 'calc(100vh / 3)',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',

  backgroundColor: even ? 'papayawhip' : 'pink',
});

const boundary = {
  top: { unit: UnitType.RELATIVE, value: 2.5 },
  left: { unit: UnitType.RELATIVE, value: 1 },
};

const SudoFixedFixture = ({ fixtureType }: { fixtureType: 'div' | 'text' }) => {
  const sections = useRef<HTMLDivElement[]>([]);
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => {
        const element =
          sections.current.length > 0
            ? sections.current[index].clientHeight
            : 0;

        const ref = (section: HTMLDivElement) => {
          if (section) {
            sections.current.push(section);
          }
        };

        return (
          <section
            key={`section-${index}`}
            // @ts-ignore
            style={sectionStyle(index % 2 === 0)}
            ref={ref}
          >
            <SudoFixed
              stop={{
                value: element * index,
                unit: UnitType.FIXED,
              }}
              boundary={boundary}
            >
              {fixtureType === 'div' ? (
                <div
                  style={{
                    backgroundColor: index % 2 !== 0 ? 'papayawhip' : 'pink',
                  }}
                >
                  <h2>I'm fixed ... honest</h2>
                </div>
              ) : (
                <h2
                  style={{
                    color: index % 2 !== 0 ? 'papayawhip' : 'pink',
                    fontWeight: 'bold',
                    fontSize: '5rem',
                  }}
                >
                  I'm fixed ... honest
                </h2>
              )}
            </SudoFixed>
          </section>
        );
      })}
    </>
  );
};

export default {
  ['Div']: () => <SudoFixedFixture fixtureType="div" />,
  ['Text']: () => <SudoFixedFixture fixtureType="text" />,
};
