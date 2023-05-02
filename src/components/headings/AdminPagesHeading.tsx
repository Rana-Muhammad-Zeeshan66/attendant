import StyledAdminPagesHeading from '../../styledComponents/headings/StyledAdminPagesHeading';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';

interface AdminPagesHeadingProps {
  isUserRoute: boolean;
  isUserProfileRoute: boolean;
  isSettingRoute: boolean;
  username?: string;
}

const AdminPagesHeading = (props: AdminPagesHeadingProps): JSX.Element => {
  const { isUserRoute, isUserProfileRoute, username, isSettingRoute } = props;

  return (
    <StyledAdminPagesHeading>
      <div className="adminpage-header">
        <Link to={'/admin-dashboard'}>
          <Button startIcon={<HomeIcon />}>Dashboard</Button>
        </Link>
        {(isUserRoute || isUserProfileRoute) && (
          <>
            <KeyboardArrowRightIcon />
            <Link to={'/admin-dashboard/users'}>
              <Button startIcon={<PeopleAltIcon />}>users</Button>
            </Link>
          </>
        )}

        {isUserProfileRoute && (
          <>
            <Link to={'/admin-dashboard/users'}>
              <Button startIcon={<PeopleAltIcon />}>{username}</Button>
            </Link>
          </>
        )}

        {isSettingRoute && (
          <>
            <KeyboardArrowRightIcon />
            <Link to={'/admin-dashboard/settings'}>
              <Button startIcon={<SettingsIcon />}>Settings</Button>
            </Link>
          </>
        )}
      </div>
    </StyledAdminPagesHeading>
  );
};

export default AdminPagesHeading;
