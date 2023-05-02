import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import StyledUserListCard from '../../styledComponents/cards/StyledUserListCard';
import CarduserInfo from './CarduserInfo';

interface UserListCardProps {
  cardTitle: string;
  userList: [];
}

const UserListCard = (props: UserListCardProps): JSX.Element => {
  const { cardTitle, userList } = props;

  return (
    <StyledUserListCard>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography className="card-title">{cardTitle}</Typography>

          {Array.from(Array(3)).map((_, index) => (
            <CarduserInfo
              userImage=""
              userPosition="UX/UI Designer"
              username="John Doe"
            />
          ))}
        </CardContent>
      </Card>
    </StyledUserListCard>
  );
};

export default UserListCard;
