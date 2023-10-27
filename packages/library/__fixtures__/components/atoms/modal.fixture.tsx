import { useState } from 'react';

import { Button, Modal } from '../../../src';

export default {
  ['Open Modal']: () => {
    return (
      <Modal isOpen={true} onRequestClose={() => {}} modalTitle="Modal Title">
        <h3>Im a basic modal</h3>
      </Modal>
    );
  },
  ['Open Modal with Banner']: () => {
    return (
      <Modal
        isOpen={true}
        onRequestClose={() => {}}
        modalTitle="Modal Title"
        modalBanner={{ src: '/image.jpg', alt: 'image' }}
      >
        <h3>Im a basic modal</h3>
      </Modal>
    );
  },
  ['Closed Modal']: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          modalTitle="Modal Title"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <h3>Im a basic modal</h3>
        </Modal>
      </>
    );
  },
};
