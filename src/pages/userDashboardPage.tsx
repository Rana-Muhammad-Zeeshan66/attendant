import { Button } from '@mui/material';
import MainContainer from '../styledComponents/mainContainer/MainContainer';

import AttendanceTable from '../components/tables/AttendanceTable';
import FloatingActionButton from '../styledComponents/floatingButtons/FloatingActionButton';
import AddIcon from '@mui/icons-material/Add';
import SharedPageHeader from '../components/shared/SharedPageHeader';
import { useAppDispatch, useAppSelector } from '../store/rtkHooks';
import { applyForLeave } from '../store/slices/allUsersSlice';

const UserDashboardPage = (): JSX.Element => {
  const userRedux = useAppSelector((state) => state.allUsers.value[0]);
  const dispatch = useAppDispatch();

  return (
    <MainContainer>
      <SharedPageHeader
        pageHeading="Past Attendance"
        dropDownLabel="Attribute"
        alertHeading={`Welcome back, ${userRedux.userName}!`}
        alertDescription=" Are you ready to punch in your attendance?"
      />

      <AttendanceTable userAttendance={userRedux.pastAttendance} />

      <FloatingActionButton>
        <Button
          className="apply-btn"
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => dispatch(applyForLeave('hi'))}
        >
          apply for leave
        </Button>
      </FloatingActionButton>
    </MainContainer>
  );
};

export default UserDashboardPage;
