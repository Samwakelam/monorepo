import { useState } from 'react';

import { tw } from '@sam/theme/twind';

import {
  TitleBar,
  RestaurantCard,
  SetGroupModal,
  WithGroupModal,
} from '../../../lib/components';
import { restaurants } from '../../../lib/__synthetics__';

import * as S from './index.styles';

export const IndexLayout = () => {
  const [group, setGroup] = useState<string>('');

  const [openModal, setOpenModal] = useState<'set' | 'with' | null>(null);

  return (
    <div className={tw(S.IndexLayoutCss)} data-layout="index">
      <TitleBar groupNames={(group) => setGroup(group)} updateValue={group} />
      <section className={tw(S.ContainerCss)}>
        {Array.from({ length: 3 }, (_, index) => (
          <RestaurantCard
            key={`modal-${index}`}
            restaurant={restaurants[0]}
            group={group}
            openModal={(modal: 'set' | 'with') => setOpenModal(modal)}
          />
        ))}
      </section>

      <SetGroupModal
        isOpen={openModal === 'set'}
        onRequestClose={() => setOpenModal(null)}
        onSubmit={(value) => setGroup(value)}
      />
      <WithGroupModal
        isOpen={openModal === 'with'}
        onRequestClose={() => setOpenModal(null)}
        onSubmit={(value) => console.log('value =', value)}
      />
    </div>
  );
};
