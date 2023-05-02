import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import usersData from '../../data/data.json';

interface AllUsersState {
  value: {
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

const initialState: AllUsersState = {
  value: usersData.allUsers,
};

const allusers = createSlice({
  name: 'users',
  initialState,
  reducers: {
    punchIn: (state, action: PayloadAction<boolean>) => {
      if (action.payload === true) {
        state.value[0].pastAttendance.unshift({
          Date: '2/5/2023',
          status: 'Present',
        });
      } else {
        state.value[0].pastAttendance.shift();
      }
    },
    ediUser: (
      state,
      action: PayloadAction<{
        userId: string;
        firstName: string;
        lastName: string;
        position: string;
        email: string;
      }>
    ) => {
      const indexOfUser = state.value
        .map((user) => user.userId)
        .indexOf(action.payload.userId);

      const toEditUser = state.value[indexOfUser];

      toEditUser.firstName = action.payload.firstName;
      toEditUser.lastName = action.payload.lastName;
      toEditUser.position = action.payload.position;
      toEditUser.email = action.payload.email;

      state.value[indexOfUser] = toEditUser;
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const indexOfUser = state.value
        .map((user) => user.userId)
        .indexOf(action.payload);

      state.value.splice(indexOfUser, 1);
    },
    addUser: (
      state,
      action: PayloadAction<{
        userId: string;
        firstName: string;
        lastName: string;
        position: string;
        email: string;
      }>
    ) => {
      const newUser = {
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        userName: action.payload.firstName + '' + action.payload.lastName,
        position: action.payload.position,
        email: action.payload.email,
        totalHours: '152',
        dailyAverageHours: '7.9',
        pastAttendance: [
          {
            Date: '03/03/2022',
            status: 'Absent',
          },
          {
            Date: '02/03/2022',
            status: 'Absent',
          },
          {
            Date: '01/03/2022',
            status: 'Absent',
          },
          {
            Date: '29/02/2022',
            status: 'Absent',
          },
          {
            Date: '28/03/2022',
            status: 'Absent',
          },
        ],
      };

      state.value.unshift(newUser);
    },
    searchByPosition: (state, action: PayloadAction<string>) => {
      state.value = initialState.value;
      const fitertest = state.value.filter((user) =>
        user.position.includes(action.payload)
      );

      state.value = fitertest;

      return state;
    },
    searchByStatus: (state, action: PayloadAction<string>) => {
      state.value[0].pastAttendance = initialState.value[0].pastAttendance;

      const fiterResult = state.value[0].pastAttendance.filter((pa) =>
        pa.status.includes(action.payload)
      );

      state.value[0].pastAttendance = fiterResult;

      return state;
    },
    applyForLeave: (state, action: PayloadAction<string>) => {
      state.value[0].pastAttendance.unshift({
        Date: '2/5/2023',
        status: 'Leave',
      });
    },
  },
});

export const {
  punchIn,
  ediUser,
  deleteUser,
  addUser,
  searchByPosition,
  searchByStatus,
  applyForLeave,
} = allusers.actions;

const allUsersReducer = allusers.reducer;
export default allUsersReducer;
