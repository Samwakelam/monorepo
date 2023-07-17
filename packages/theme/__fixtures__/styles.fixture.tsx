import { useSelect } from 'react-cosmos/fixture';

import { colours, spacing } from '../src';
import { getHex } from '../src/helpers/get-hex.helper';

type ShapeProps = {
  config: {
    backgroundColor: string;
    height: string;
    width: string;
  };
};

const Shape = ({ config }: ShapeProps) => {
  return <div style={config}></div>;
};

const colourOptions = {
  options: Object.keys(colours),
  defaultValue: 'slate',
};

const colourIndexOptions = {
  options: Object.keys(colours['slate']),
  defaultValue: '100',
};

const spacingOptions = (allowNull: boolean, defaultValue: string = '0') => {
  const obj = {
    options: Object.keys(spacing),
    defaultValue: defaultValue,
  };

  if (allowNull) {
    obj.options.unshift('unset');
  }

  return obj;
};

const StylesFixture = () => {
  const [shapeHeight] = useSelect('Shape Height', spacingOptions(false, '208'));
  const [shapeWidth] = useSelect('Shape Width', spacingOptions(false, '208'));

  const [backgroundColour] = useSelect('Background Colour', colourOptions);
  const [backgroundColourIndex] = useSelect(
    'Background Colour Index',
    colourIndexOptions
  );

  const [borderRadius] = useSelect('Border Radius', spacingOptions(false));
  const [borderColour] = useSelect('Border Colour', colourOptions);
  const [borderColourIndex] = useSelect(
    'Border Colour Index',
    colourIndexOptions
  );
  const [borderWidth] = useSelect('Border Width', spacingOptions(true));

  const config = {
    height: spacing[parseInt(shapeHeight)],
    width: spacing[parseInt(shapeWidth)],
    backgroundColor: colours[backgroundColour][backgroundColourIndex],
    borderRadius: spacing[parseInt(borderRadius)],
    borderColor: colours[borderColour][borderColourIndex],
    borderWidth: spacing[parseInt(borderWidth)],
    borderStyle: 'solid',
  };

  const hex = getHex('rgba(255,0,0,0.1)');
  console.log('getHex: ', hex);
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Shape config={config} />
      <Shape
        config={{
          height: '100px',
          width: '100px',
          backgroundColor: hex,
        }}
      />
    </div>
  );
};

export default StylesFixture;
