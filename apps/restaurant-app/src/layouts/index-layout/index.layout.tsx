import { tw } from '@sam/theme/twind';

import { TitleBar, RestaurantCard } from '../../../lib/components';
import { restaurants } from '../../../lib/__synthetics__';

import * as S from './index.styles';

export const IndexLayout = () => {
  return (
    <div className={tw(S.IndexLayoutCss)} data-layout="index">
      <TitleBar />
      <section className={tw(S.ContainerCss)}>
        <RestaurantCard {...restaurants[0]} />
      </section>
    </div>
  );
};
