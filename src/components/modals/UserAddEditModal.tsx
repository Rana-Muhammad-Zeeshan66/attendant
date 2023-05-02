import { Button, Modal, TextField, Typography } from '@mui/material';
import StyledUserAddEditModal from '../../styledComponents/modals/StyledUserAddEditModal';
import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../store/rtkHooks';
import { addUser, ediUser } from '../../store/slices/allUsersSlice';

interface UserAddEditModalProps {
  openModal: boolean;
  handleCloseModal: (openModal: boolean) => void;
  modalTitle: 'Add user' | 'Edit user';
  editUserData: {
    userId: string;
    firstName: string;
    lastName: string;
    position: string;
    email: string;
  } | null;
}

const UserAddEditModal = (props: UserAddEditModalProps): JSX.Element => {
  const { openModal, handleCloseModal, modalTitle, editUserData } = props;
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    userId: editUserData ? editUserData.userId : '010',
    firstName: editUserData ? editUserData.firstName : '',
    lastName: editUserData ? editUserData.lastName : '',
    position: editUserData ? editUserData.position : '',
    email: editUserData ? editUserData.email : '',
  });

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleCloseModal(false);
  };

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(ediUser(formData));
  };

  const handleAdduser = (event: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(addUser(formData));
  };

  return (
    <StyledUserAddEditModal
      id="addedit-modal-container"
      ref={modalContainerRef}
    >
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        container={() => modalContainerRef.current}
      >
        <div className="user-addedit-modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>

          <div className="modal-fields-container">
            <TextField
              id="first-name"
              label="First Name"
              variant="standard"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({
                  userId: formData.userId,
                  firstName: e.target.value,
                  lastName: formData.lastName,
                  position: formData.position,
                  email: formData.email,
                })
              }
            />
            <TextField
              id="last-name"
              label="Last Name"
              variant="standard"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({
                  userId: formData.userId,
                  firstName: formData.firstName,
                  lastName: e.target.value,
                  position: formData.position,
                  email: formData.email,
                })
              }
            />
          </div>
          <TextField
            id="designation"
            label="Designation"
            variant="standard"
            style={{ width: '100%' }}
            value={formData.position}
            onChange={(e) =>
              setFormData({
                userId: formData.userId,
                firstName: formData.firstName,
                lastName: formData.lastName,
                position: e.target.value,
                email: formData.email,
              })
            }
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            style={{ width: '100%' }}
            value={formData.email}
            onChange={(e) =>
              setFormData({
                userId: formData.userId,
                firstName: formData.firstName,
                lastName: formData.lastName,
                position: formData.position,
                email: e.target.value,
              })
            }
          />

          <div className="btns-container">
            <div className="btn-flex">
              {modalTitle === 'Add user' ? (
                <>
                  <Button color="primary" onClick={handleClose}>
                    Nevermind
                  </Button>
                  <Button color="primary" onClick={handleAdduser}>
                    Add user
                  </Button>
                </>
              ) : (
                <>
                  <Button color="primary" onClick={handleClose}>
                    Discard Changes
                  </Button>
                  <Button color="primary" onClick={handleEdit}>
                    Save
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </StyledUserAddEditModal>
  );
};

export default UserAddEditModal;
