import React from 'react';
import StyledUsersTable from '../../styledComponents/tables/StyledUsersTable';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import TablePaginationActions from './TablePaginationActions';
import { Avatar, Button, ButtonGroup, Stack, TableHead } from '@mui/material';

import UserAddEditModal from '../modals/UserAddEditModal';
import UserDeleteModal from '../modals/UserDeleteModal';

interface UsersTableProps {
  statsTable: boolean;
  usersData: {
    userId: string;
    firstName: string;
    lastName: string;
    userName: string;
    position: string;
    email: string;
    totalHours: string;
    dailyAverageHours: string;
    pastAttendance: {
      Date: string;
      status: string;
    }[];
  }[];
}

const UsersTable = (props: UsersTableProps): JSX.Element => {
  const { statsTable, usersData } = props;

  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openModalDelete, setOpenModalDelete] = React.useState(false);
  const [toDeleteUser, setToDeleteUser] = React.useState({
    userId: '',
    userName: '',
  });
  const [toEditUser, setToEditUser] = React.useState({
    userId: '',
    firstName: '',
    lastName: '',
    position: '',
    email: '',
  });

  const open = Boolean(anchorEl);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * usersData.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <StyledUsersTable>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              {!statsTable && (
                <>
                  <TableCell align="center">Position</TableCell>
                  <TableCell align="center">Email</TableCell>
                </>
              )}
              <TableCell align="center">TotalHours</TableCell>
              <TableCell align="center">Daily Avg. Hours</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? usersData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : usersData
            ).map((row) => (
              <TableRow key={row.userId}>
                <TableCell component="th" scope="row">
                  <Stack
                    direction={'row'}
                    gap={2}
                    style={{ alignItems: 'center' }}
                  >
                    <Avatar alt="Remy Sharp" src={''} />
                    <span>{row.userName}</span>
                  </Stack>
                </TableCell>
                {!statsTable && (
                  <>
                    <TableCell style={{ width: 160 }} align="center">
                      {row.position}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {row.email}
                    </TableCell>
                  </>
                )}
                <TableCell style={{ width: 160 }} align="center">
                  {row.totalHours}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.dailyAverageHours}
                </TableCell>
                {!statsTable && (
                  <TableCell style={{ width: 160 }} align="center">
                    <ButtonGroup
                      // variant="contained"
                      aria-label="Disabled elevation buttons"
                    >
                      <Button
                        onClick={() =>
                          navigate(`/admin-dashboard/users/${row.userId}`)
                        }
                      >
                        View
                      </Button>

                      <Button
                        onClick={() => {
                          setOpenModalDelete(true);
                          setToDeleteUser({
                            userId: row.userId,
                            userName: row.userName,
                          });
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => {
                          setOpenModal(true);
                          setToEditUser({
                            userId: row.userId,
                            firstName: row.firstName,
                            lastName: row.lastName,
                            position: row.position,
                            email: row.email,
                          });
                        }}
                      >
                        Edit
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                )}
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={usersData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
        {openModal && (
          <UserAddEditModal
            openModal={openModal}
            handleCloseModal={setOpenModal}
            modalTitle="Edit user"
            editUserData={toEditUser}
          />
        )}

        {openModalDelete && (
          <UserDeleteModal
            openModalDelete={openModalDelete}
            handleCloseModalDelete={setOpenModalDelete}
            username={toDeleteUser.userName}
            userId={toDeleteUser.userId}
          />
        )}
      </TableContainer>
    </StyledUsersTable>
  );
};

export default UsersTable;
