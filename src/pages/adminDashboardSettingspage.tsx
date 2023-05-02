import React from 'react';
import MainContainer from '../styledComponents/mainContainer/MainContainer';
import AdminPagesHeading from '../components/headings/AdminPagesHeading';
import PageHeading from '../styledComponents/headings/PageHeading';
import StyledSettingsPage from '../styledComponents/settingsPage/StyledSettingsPage';
import { TextField, Button } from '@mui/material';
import FloatingActionButton from '../styledComponents/floatingButtons/FloatingActionButton';
import DoneIcon from '@mui/icons-material/Done';

const AdminDashboardSettingspage = (): JSX.Element => {
  return (
    <MainContainer>
      <StyledSettingsPage>
        <AdminPagesHeading
          isUserProfileRoute={false}
          isUserRoute={false}
          isSettingRoute={true}
        />

        <PageHeading>Settings</PageHeading>

        <div className="settings-page">
          <h6>Office Hours</h6>

          <TextField
            id="start-time"
            label="Start Time"
            variant="standard"
            style={{ width: '100%' }}
          />
          <TextField
            id="finish-time"
            label="Finish Time"
            variant="standard"
            style={{ width: '100%' }}
          />
          <TextField
            id="working-hours"
            label="Working Hours"
            variant="standard"
            style={{ width: '100%' }}
          />
        </div>
      </StyledSettingsPage>

      <FloatingActionButton>
        <Button
          className="adduser-btn"
          variant="contained"
          endIcon={<DoneIcon />}
          style={{ borderRadius: '20px' }}
        >
          Save changes
        </Button>
      </FloatingActionButton>
    </MainContainer>
  );
};

export default AdminDashboardSettingspage;
