import User from './User.jsx'

const Users = ({users})=>{
    return(
        <div>
            {users.map(user => (
                <User key={user.id} user={user}/>
                ))}
        </div>
    )
}

export default Users;

