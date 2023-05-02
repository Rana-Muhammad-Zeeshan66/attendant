import { useEffect, useState } from 'react';
import MainContainer from '../styledComponents/mainContainer/MainContainer';
import AdminPagesHeading from '../components/headings/AdminPagesHeading';
import CarduserInfo from '../components/cards/CarduserInfo';
import StyledAdminUserProfile from '../styledComponents/styledAdminUserProfile/StyledAdminUserProfile';
import SharedPageHeader from '../components/shared/SharedPageHeader';

import AttendanceTable from '../components/tables/AttendanceTable';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/rtkHooks';

interface setUserDataType {
  userId: string;
  userName: string;
  position: string;
  email: string;
  totalHours: string;
  dailyAverageHours: string;
  pastAttendance: {
    Date: string;
    status: string;
  }[];
}

const AdminuserProfilePage = (): JSX.Element => {
  const allUsersDataRedux = useAppSelector((state) => state.allUsers.value);
  const [userData, setUserData] = useState<setUserDataType | null>(null);

  const params = useParams();

  useEffect(() => {
    const result = allUsersDataRedux.find((user) => user.userId === params.id);
    if (result) {
      setUserData(result);
    }
  }, [params.id]);

  return (
    <MainContainer>
      {userData ? (
        <StyledAdminUserProfile>
          <AdminPagesHeading
            isUserProfileRoute={true}
            isUserRoute={true}
            username={userData.userName}
            isSettingRoute={false}
          />
          <div className="adminuser-profile"></div>
          <CarduserInfo
            userImage=""
            userPosition={userData.position}
            username={userData.userName}
          />

          <SharedPageHeader dropDownLabel="Position" />

          <AttendanceTable userAttendance={userData.pastAttendance} />
        </StyledAdminUserProfile>
      ) : (
        <h2>Loading..</h2>
      )}
    </MainContainer>
  );
};

export default AdminuserProfilePage;
