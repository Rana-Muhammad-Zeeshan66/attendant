import React, { useEffect, useState } from 'react';
import FormContainer from '../styledComponents/formContainer/formContainer';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { useAppDispatch } from '../store/rtkHooks';
import { setIsAdmin } from '../store/slices/isAdminSlice';
import { useNavigate } from 'react-router-dom';

interface FormDataType {
  username: string | null;
  password: number | null;
}

const LoginPage = (): JSX.Element => {
  const [credentialError, setCredentialErrors] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    username: null,
    password: null,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userCredentials: { username: string; password: number } = {
    username: 'admin',
    password: 1234,
  };

  const handleClickShowPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setShowPassword(!showPassword);
  };

  const SignIn = (): void => {
    let timeout = null;
    setSubmitting(true);
    timeout = setTimeout(() => {
      if (formData.password === userCredentials.password) {
        if (formData.username === userCredentials.username) {
          dispatch(setIsAdmin(true));
          setSubmitting(false);
          setCredentialErrors(false);
          navigate('/change-password');
        } else {
          dispatch(setIsAdmin(false));
          setSubmitting(false);
          setCredentialErrors(false);
          navigate('/change-password');
        }
      } else {
        setSubmitting(false);
        setCredentialErrors(true);
      }
    }, 2000);
  };

  return (
    <FormContainer>
      <span>Sign in</span>

      {credentialError && <Alert severity="error">Invalid credentials</Alert>}

      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Username</InputLabel>
        <Input
          error={credentialError}
          id="standard-adornment-password"
          // type={showPassword ? 'text' : 'password'}
          type={'text'}
          onChange={(e) =>
            setFormData({
              username: e.target.value,
              password: formData.password,
            })
          }
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Pin code</InputLabel>
        <Input
          error={credentialError}
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) =>
            setFormData({
              username: formData.username,
              password: parseInt(e.target.value),
            })
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
              >
                {!showPassword ? <VisibilityOff /> : <Visibility />}
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

export default LoginPage;
