import { SyntheticEvent, useState } from 'react';
import { UserData, ValidCharge } from '../types'
import Loading from '../Loading'
import fetchData from '../fetchData';
type AppProps = {
    userData: UserData;
}

const UserList = ({ userData }: AppProps): JSX.Element => {
    let [loading, setLoading] = useState(false)

    function chargePoints(e: SyntheticEvent) {
        let { value } = e.target as HTMLInputElement
        let amount: ValidCharge = Number(value) as ValidCharge
        setLoading(true)
        fetch('api/points', { method: "POST", body: JSON.stringify({ amount }) })
            .then(() => setLoading(false))
            .catch(() => setLoading(false))
    }

    return (
        <div>
            <p>{userData._id}</p>
            <p>{userData.createDate}</p>
            <p>{userData.name}</p>
            <p>{userData.points}</p>
            <p>Redeem history:</p>
            <Loading loading={loading}>
                <input type='button' value={1000} onClick={chargePoints} />
                <input type="button" value={5000} onClick={chargePoints} />
                <input type='button' value={7500} onClick={chargePoints} />
                <input type='button' value="Add Points" />
            </Loading>
        </div>
    )
}

export default UserList