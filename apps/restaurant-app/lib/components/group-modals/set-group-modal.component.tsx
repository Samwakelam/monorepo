import {
  ConfirmModal,
  InputGroup,
  ModalProps,
  Validators,
  useInputGroup,
} from '@sam/library';

export interface SetGroupModalProps extends Omit<ModalProps, 'children'> {
  onSubmit: (value: string) => void;
}

export const SetGroupModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
}: SetGroupModalProps) => {
  const inputGroup = useInputGroup('', [
    [(value) => value.length > 0, 'This field Is required to have an input'],
    [
      Validators['generic string'],
      'There is an error with your input, please try again.',
    ],
  ]);

  return (
    <ConfirmModal
      title="Who's reviewing?"
      description="Please tell us who you are to leave an impression"
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
