import MainContainer from '../styledComponents/mainContainer/MainContainer';
import PageHeading from '../styledComponents/headings/PageHeading';
import UserListCardContainer from '../components/cards/UserListCardContainer';
import UsersTable from '../components/tables/UsersTable';
import { TextField, Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import { useAppSelector } from '../store/rtkHooks';
import { useNavigate } from 'react-router-dom';

const AdminDashboardPage = (): JSX.Element => {
  const allUsersDataRedux = useAppSelector((state) => state.allUsers.value);
  const navigate = useNavigate();
  return (
    <MainContainer>
      <PageHeading>Today's Availability</PageHeading>

      <UserListCardContainer />

      <PageHeading>Overall Stats</PageHeading>

      <div className="admin-options">
        <TextField
          id="filled-search"
          label="Search"
          type="search"
          className="search-field"
          placeholder="Search by name"
        />

        <Button
          className="apply-btn"
          variant="contained"
          startIcon={<PeopleIcon />}
          onClick={() => navigate('/admin-dashboard/users')}
        >
          manage users
        </Button>
      </div>

      <UsersTable statsTable={true} usersData={allUsersDataRedux} />
    </MainContainer>
  );
};

export default AdminDashboardPage;
