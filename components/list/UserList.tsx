import { UserData } from '../types'

type AppProps = {
    userData: UserData;
}

const UserList = ({ userData }: AppProps): JSX.Element => {
    return (
        <div>
            <p>{userData._id}</p>
            <p>{userData.createDate}</p>
            <p>{userData.name}</p>
            <p>{userData.points}</p>
            <p>Redeem history:</p>
        </div>
    )
}

export default UserList