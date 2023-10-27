import {
  ConfirmModal,
  InputGroup,
  ModalProps,
  Validators,
  useInputGroup,
} from '@sam/library';

export interface WithGroupModalProps extends Omit<ModalProps, 'children'> {
  onSubmit: (value: string) => void;
}

export const WithGroupModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
}: WithGroupModalProps) => {
  const inputGroup = useInputGroup('', [
    [(value) => value.length > 0, 'This field Is required to have an input'],
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  return (
    <ConfirmModal
      title="Friends?"
      description="Did you go with anyone else?"
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      accept={{
        onClick: () => {
          onSubmit(inputGroup.state.value);
          onRequestClose();
        },
        children: 'Submit',
      }}
      decline={{
        onClick: () => onRequestClose(),
        children: 'Cancel',
      }}
    >
      <InputGroup
        label={{
          text: 'who are you',
          showLabel: false,
        }}
        placeholder="Please enter group names such as Sam and Dave"
        name="who is viewing"
        clearField
        {...inputGroup}
      />
    </ConfirmModal>
  );
};
