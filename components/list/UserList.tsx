import { Data } from '../types'
type AppProps = {
    data: Data;
}

const UserList = ({ data }: AppProps): JSX.Element => {
    return (
        <div>
            <p>{data._id}</p>
            <p>{data.createDate}</p>
            <p>{data.name}</p>
            <p>{data.points}</p>
            <p>Redeem history:</p>
        </div>
    )
}

export default UserList