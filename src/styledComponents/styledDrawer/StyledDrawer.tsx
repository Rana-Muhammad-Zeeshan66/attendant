import { styled, Drawer } from '@mui/material';

const StyledDrawer = styled(Drawer)({
  '.MuiPaper-root': {
    width: '20%',
  },

  '.drawerMenuContainer': {
    width: '80%',
    margin: '0 auto',
  },

  '.drawerLinkContainer': {
    textDecoration: 'none',
    display: 'flex',
    gap: 20,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: '16px',
    padding: '8px',

    ':hover': {
      color: '#1976d2',
      backgroundColor: '#ccc',
      borderRadius: '4px',
    },

    ':active': {
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

export default StyledDrawer;
