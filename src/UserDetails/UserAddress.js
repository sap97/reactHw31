const UserAddress = ({ address }) => {
  return (
    <div style={{border:'2px solid black',
    margin:'5px'}}>
      <h5>User Address:</h5>
      <p>Street: {address.street}</p>
      <p>Suite: {address.suite}</p>
      <p>City: {address.city}</p>
    </div>
  );
}

export default UserAddress;
