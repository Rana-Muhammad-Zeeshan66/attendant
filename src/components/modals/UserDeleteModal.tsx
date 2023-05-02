import { useRef } from 'react';

import StyledUserDeleteModal from '../../styledComponents/modals/StyledUserDeleteModal';
import { Button, Typography, Modal } from '@mui/material';
import { useAppDispatch } from '../../store/rtkHooks';
import { deleteUser } from '../../store/slices/allUsersSlice';

interface UserDeleteModalProps {
  openModalDelete: boolean;
  handleCloseModalDelete: (openModalDelete: boolean) => void;
  username: string;
  userId: string;
}

const UserDeleteModal = (props: UserDeleteModalProps): JSX.Element => {
  const { openModalDelete, handleCloseModalDelete, username, userId } = props;
  const dispatch = useAppDispatch();
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleCloseModalDelete(false);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(deleteUser(userId));
    handleCloseModalDelete(false);
  };

  return (
    <StyledUserDeleteModal ref={modalContainerRef}>
      <Modal
        open={openModalDelete}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        container={() => modalContainerRef.current}
      >
        <div className="userdelete-modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete User
          </Typography>

          <Typography
            id="modal-modal-description"
            variant="subtitle2"
            component="p"
          >
            Are you sure you want to delete the user{' '}
            <strong>{username}?</strong> This action is irreversible.
          </Typography>

          <div className="btns-container">
            <div className="btn-flex">
              <Button color="primary" onClick={handleClose}>
                Nevermind
              </Button>
              <Button color="error" onClick={handleDelete}>
                Delete user
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </StyledUserDeleteModal>
  );
};

export default UserDeleteModal;
