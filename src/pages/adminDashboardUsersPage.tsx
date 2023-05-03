import AdminPagesHeading from '../components/headings/AdminPagesHeading';
import SharedPageHeader from '../components/shared/SharedPageHeader';
import MainContainer from '../styledComponents/mainContainer/MainContainer';
import UsersTable from '../components/tables/UsersTable';
import PageHeading from '../styledComponents/headings/PageHeading';
import FloatingActionButton from '../styledComponents/floatingButtons/FloatingActionButton';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import UserAddEditModal from '../components/modals/UserAddEditModal';
import { useState } from 'react';

import { useAppSelector } from '../store/rtkHooks';

const AdminDashboardUsersPage = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);

  const allUsersDataRedux = useAppSelector((state) => state.allUsers.value);

  return (
    <MainContainer>
      <AdminPagesHeading
        isUserProfileRoute={false}
        isUserRoute={true}
        isSettingRoute={false}
      />

      <PageHeading>Users</PageHeading>

      <SharedPageHeader dropDownLabel="Position" />

      <UsersTable statsTable={false} usersData={allUsersDataRedux} />

      <FloatingActionButton>
        <Button
          className="adduser-btn"
          variant="contained"
          endIcon={<AddIcon />}
          style={{ borderRadius: '20px' }}
          onClick={() => setOpenModal(true)}
        >
          Add user
        </Button>
      </FloatingActionButton>

      {openModal && (
        <UserAddEditModal
          openModal={openModal}
          handleCloseModal={setOpenModal}
          modalTitle="Add user"
          editUserData={null}
        />
      )}
    </MainContainer>
  );
};

export default AdminDashboardUsersPage;
