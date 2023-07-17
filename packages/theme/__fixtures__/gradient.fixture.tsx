import { gradient, Gradient } from '../src';

const GradientSwatch = ({
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
          backgroundImage: value,
          height: '10rem',
          width: '15rem',
          borderRadius: '0.125rem',
        }}
      />
      {key && <p>{key}</p>}
    </div>
  );
};

const GradientFixture = () => {
  const colourNames = Object.keys(gradient);

  return (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
      {colourNames.map((name: keyof Gradient) => {
        const colourKeys = Object.keys(gradient[name]);

        return (
          <div key={name}>
            <h5 style={{ marginBottom: '0.5rem' }}>{name}</h5>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {colourKeys.map((key) => {
                return (
                  <GradientSwatch
                    swatch={{ key, value: gradient[name][key] }}
                    key={`${name}-${key}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GradientFixture;
