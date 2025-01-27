import {
  Modal,
  ModalHeader,
  Heading,
  ModalContent,
  Text,
  ModalFooter,
  Button,
} from "@adaptavant/eds-core";

interface DeleteModalProps {
  openModal: boolean;
  onModalClose: () => void;
  selectedUser: { firstName: string; lastName: string };
}
const deleteNotesFromLocalStorage = (selectedUser) => {
  localStorage.removeItem(`userNotes-${selectedUser?.firstName}`);
};
const DeleteModal: React.FC<DeleteModalProps> = ({
  openModal,
  onModalClose,
  selectedUser,
}) => {
  return (
    <Modal
      classNames={{
        modalWrapper: "z-10",
      }}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      descriptionId="modal-description"
      onClose={onModalClose}
      open={openModal}
      role="alertdialog"
      titleId="modal-title"
    >
      <ModalHeader>
        <Heading
          as="h3"
          className="text-heading-16 font-stronger"
          id="modal-title"
        >
          Delete notes for good?
        </Heading>
      </ModalHeader>

      <ModalFooter>
        <Button onClick={onModalClose} variant="neutralTertiary">
          Keep
        </Button>

        <Button
          onClick={() => {
            onModalClose();
            deleteNotesFromLocalStorage(selectedUser);
          }}
        >
          Yes , delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export { DeleteModal };
