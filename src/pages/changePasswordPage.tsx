import React, { useState } from 'react';
import FormContainer from '../styledComponents/formContainer/formContainer';
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/rtkHooks';

const ChangePasswordPage = (): JSX.Element => {
  const [submitting, setSubmitting] = useState(false);
  const isAdminRedux = useAppSelector((state) => state.isAdminReducer.value);

  const navigate = useNavigate();

  const SignIn = (): void => {
    let timeout = null;
    setSubmitting(true);
    timeout = setTimeout(() => {
      if (isAdminRedux.isAdmin) {
        setSubmitting(false);
        navigate('/admin-dashboard');
      } else {
        setSubmitting(false);
        navigate('/user-dashboard');
      }
    }, 2000);
  };

  return (
    <FormContainer>
      <span>Change password</span>

      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Pin code</InputLabel>
        <Input
          id="standard-adornment-password"
          // type={showPassword ? 'text' : 'password'}
          type={'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
              >
                {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                <Visibility />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button variant="contained" disabled={submitting} onClick={SignIn}>
        {submitting ? 'submitting' : 'Sign In'}
      </Button>
    </FormContainer>
  );
};

export default ChangePasswordPage;
