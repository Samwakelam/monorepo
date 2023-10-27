import { useValue } from 'react-cosmos/fixture';
import { ButtonType, CardProps } from '../../../src';
import { Card } from '../../../src/components/atoms/card/card.component';

const CardFixture = ({
  children,
  cta,
  header,
  icon,
  image,
  imageAsBackground,
  showCta,
}: CardProps) => {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <Card
        cta={cta}
        header={header}
        icon={icon}
        image={image}
        imageAsBackground={imageAsBackground}
        showCta={showCta}
      >
        {children}
      </Card>
    </div>
  );
};

export default {
  ['Basic']: () => {
    return (
      <CardFixture>
        <h1>I am a card</h1>
      </CardFixture>
    );
  },
  ['Image Card']: () => {
    const [imageAsBackground] = useValue<boolean>('Image As Background', {
      defaultValue: false,
    });

    return (
      <CardFixture
        image={{ src: './image.jpg', alt: 'alternative text' }}
        imageAsBackground={imageAsBackground}
      >
        <h1>I am a card</h1>
      </CardFixture>
    );
  },
  ['Image Only']: () => {
    return (
      <CardFixture image={{ src: './image.jpg', alt: 'alternative text' }} />
    );
  },
  ['With CTA']: () => {
    const [showCta] = useValue<boolean>('Show CTA', {
      defaultValue: true,
    });
    const [imageAsBackground] = useValue<boolean>('Image As Background', {
      defaultValue: false,
    });

    return (
      <CardFixture
        image={{ src: './image.jpg', alt: 'alternative text' }}
        imageAsBackground={imageAsBackground}
        showCta={showCta}
        cta={{
          children: 'Cta Button',
          onClick: () => alert('Cta clicked'),
          buttonType: ButtonType.GRADIENT,
        }}
      >
        <h1>I am a card</h1>
      </CardFixture>
    );
  },
  ['Icon Header']: () => {
    return (
      <CardFixture icon={{ icon: 'camera', ariaLabel: 'icon' }}>
        <h1>I am a card</h1>
      </CardFixture>
    );
  },
  ['Icon Header With Detail']: () => {
    return (
      <CardFixture
        icon={{
          icon: 'camera',
          ariaLabel: 'icon',
          detail: {
            title: 'detail title',
            description: 'detail description',
          },
        }}
      >
        <h1>I am a card with detail</h1>
      </CardFixture>
    );
  },
  ['Card with Header']: () => {
    return (
      <CardFixture header={<h2>I am a header</h2>}>
        <h1>I am a card</h1>
      </CardFixture>
    );
  },
  ['Image and Header']: () => {
    return (
      <CardFixture
        header={<h2>I am a header</h2>}
        image={{ src: './image.jpg', alt: 'alternative text' }}
        icon={{
          icon: 'camera',
          ariaLabel: 'icon',
          detail: {
            title: 'detail title',
            description: 'detail description',
          },
        }}
        cta={{
          children: 'Cta Button',
          onClick: () => alert('Cta clicked'),
          buttonType: ButtonType.GRADIENT,
        }}
      >
        <h1>I am a card</h1>
      </CardFixture>
    );
  },
};
