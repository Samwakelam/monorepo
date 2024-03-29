import { Colours, colours } from '../src';

const ColourSwatch = ({
  swatch,
}: {
  swatch: { key?: string; value: string };
}) => {
  const { key, value } = swatch;

  return (
    <div>
      <div
        className="swatch"
        style={{
          backgroundColor: value,
          height: '2rem',
          width: '2.5rem',
          borderRadius: '0.125rem',
        }}
      />
      {key && <p>{key}</p>}
    </div>
  );
};

const ColoursFixture = () => {
  const colourNames = Object.keys(colours);

  return (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
      {colourNames.map((name: keyof Colours) => {
        const colourKeys = Object.keys(colours[name]);

        return (
          <div key={name}>
            <h5 style={{ marginBottom: '0.5rem' }}>{name}</h5>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {typeof colours[name] === 'string' ? (
                <ColourSwatch
                  swatch={{ value: colours[name] }}
                  key={`${name}`}
                />
              ) : (
                colourKeys.map((key) => {
                  return (
                    <ColourSwatch
                      swatch={{ key, value: colours[name][key] }}
                      key={`${name}-${key}`}
                    />
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColoursFixture;
