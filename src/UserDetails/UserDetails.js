import UserAddress from './UserAddress';
import Company from './Company';

const UserDetails = ({user}) => {
    return(
        <div style={{margin:'10px'}}>
            <h2>id: {user.id}</h2>
            <h1>name: {user.name}</h1>
            <h4>username: {user.username}</h4>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
            <p>website: {user.website}</p>
            <UserAddress address={user.address}/>
            <Company company={user.company}/>

        </div>
    )
} 
export default UserDetails;

