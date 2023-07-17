/* eslint-disable import/no-anonymous-default-export */

import { useState } from 'react';
import { Button, ButtonProps, ButtonType, ConfirmModal } from '../../../src';

const acceptButton: ButtonProps = {
  children: 'accept',
  buttonType: ButtonType.SUCCESS,
  onClick: () => alert('Accept Button Clicked'),
  icon: {
    format: 'start',
    icon: 'tick',
    ariaLabel: 'accept',
  },
};

const declineButton: ButtonProps = {
  children: 'decline',
  onClick: () => alert('Decline Button Clicked'),
};

export default {
  ['Open Modal']: () => {
    return (
      <ConfirmModal
        title="title"
        description="description"
        accept={acceptButton}
        decline={{ ...declineButton }}
        isOpen={true}
        onRequestClose={() => {}}
      />
    );
  },
  ['Closed Modal']: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <ConfirmModal
          title="title"
          description="description"
          accept={acceptButton}
          decline={{ ...declineButton, onClick: () => setIsOpen(false) }}
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        />
      </>
    );
  },
};
