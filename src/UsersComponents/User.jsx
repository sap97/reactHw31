import UserDetails from '../UserDetails/UserDetails.js';

const User = ({user}) =>  {
  return (
    <div style={{ width:'45%',
      border: '1px solid black',
    margin:'10px',
    display:'flex',
    justifyContent:'normal'}}>
      <UserDetails user={user} />
    </div>
  );
}

export default User;
