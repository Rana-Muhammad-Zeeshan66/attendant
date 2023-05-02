import React from 'react';
import StyledStatuspill from '../../styledComponents/pills/StyledStatuspill';
import Chip from '@mui/joy/Chip';

interface StatusPillprops {
  status: string;
}

const StatusPill = (props: StatusPillprops): JSX.Element => {
  const { status } = props;

  return (
    <StyledStatuspill>
      <Chip
        size="md"
        color={
          status === 'Present'
            ? 'neutral'
            : status === 'Leave'
            ? 'primary'
            : 'danger'
        }
      >
        {status}
      </Chip>
    </StyledStatuspill>
  );
};

export default StatusPill;
