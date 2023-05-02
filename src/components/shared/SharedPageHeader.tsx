import React, { useState, useEffect } from 'react';

import FiltersContainer from '../../styledComponents/filters/FiltersContainer';
import PageHeading from '../../styledComponents/headings/PageHeading';

import PunchInAttendanceButton from '../../styledComponents/styledButton/PunchInAttendanceButton';
import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  // Select,
  TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useAppDispatch, useAppSelector } from '../../store/rtkHooks';
import {
  punchIn,
  searchByPosition,
  searchByStatus,
} from '../../store/slices/allUsersSlice';

interface SharedPageHeaderProps {
  pageHeading?: string;
  alertHeading?: string;
  alertDescription?: string;
  dropDownLabel: string;
}

const SharedPageHeader = (props: SharedPageHeaderProps): JSX.Element => {
  const userRedux = useAppSelector((state) => state.allUsers.value[0]);
  const dispatch = useAppDispatch();

  const { pageHeading, alertHeading, alertDescription, dropDownLabel } = props;
  const [punchedIn, setPunchedIn] = useState<boolean>(false);

  const handleAttendancePunch = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    dispatch(punchIn(!punchedIn));
  };

  useEffect(() => {
    if (userRedux.pastAttendance.length > 5) {
      setPunchedIn(true);
    } else {
      setPunchedIn(false);
    }

    return () => {};
  }, [userRedux]);

  const handleChange = (event: SelectChangeEvent): void => {
    dispatch(searchByPosition(event.target.value));
  };

  const handleChangePosition = (event: SelectChangeEvent): void => {
    dispatch(searchByStatus(event.target.value));
  };

  return (
    <div>
      {alertHeading && (
        <Alert
          severity="info"
          action={
            <PunchInAttendanceButton>
              {punchedIn ? (
                <Button size="small" onClick={handleAttendancePunch}>
                  <strong>punch out attendance</strong>
                </Button>
              ) : (
                <Button size="small" onClick={handleAttendancePunch}>
                  <strong>punch in attendance</strong>
                </Button>
              )}
            </PunchInAttendanceButton>
          }
        >
          <AlertTitle>
            <strong> {alertHeading}</strong>
          </AlertTitle>
          <span>{alertDescription}</span>
        </Alert>
      )}

      <PageHeading>{pageHeading}</PageHeading>

      {dropDownLabel === 'Attribute' ? (
        <FiltersContainer>
          <TextField
            id="filled-search"
            label="Search"
            type="search"
            className="search-field"
          />

          <FormControl>
            <InputLabel id="demo-simple-select-required-label">
              {dropDownLabel}
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              // value={age}
              label={dropDownLabel}
              onChange={handleChangePosition}
              className="select-input"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Present'}>present</MenuItem>
              <MenuItem value={'Absent'}>absent</MenuItem>
              <MenuItem value={'Leave'}>leave</MenuItem>
            </Select>
          </FormControl>

          <IconButton>
            <FilterListIcon />
          </IconButton>
        </FiltersContainer>
      ) : (
        <FiltersContainer>
          <TextField
            id="filled-search"
            label="Search"
            type="search"
            className="search-field"
          />

          <FormControl>
            <InputLabel id="demo-simple-select-required-label">
              {dropDownLabel}
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              // value={age}
              label={dropDownLabel}
              onChange={handleChange}
              className="select-input"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Frontend'}>Frontend</MenuItem>
              <MenuItem value={'Backend'}>Backend</MenuItem>
            </Select>
          </FormControl>

          <IconButton>
            <FilterListIcon />
          </IconButton>
        </FiltersContainer>
      )}
    </div>
  );
};

export default SharedPageHeader;
