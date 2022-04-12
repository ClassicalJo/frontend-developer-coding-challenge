import { SyntheticEvent, useState } from 'react';
import { ValidCharge, EffectUserData } from '../types'
import fetchPoints from '../fetchPoints';

type AppProps = {
    userData: EffectUserData
    refreshUserData: Function
}

const UserList = ({ userData, refreshUserData }: AppProps): JSX.Element => {
    let [loading, setLoading] = useState(false)
    let [currentCharge, setCurrentCharge] = useState<ValidCharge>(1000)
    if (!userData || loading) return <p>Is loading</p>

    let { _id, createDate, name, points } = userData
    let chargeValues: ValidCharge[] = [1000, 5000, 7500]
    function setCharge(e: SyntheticEvent) {
        let { value } = e.target as HTMLInputElement
        let amount: ValidCharge = Number(value) as ValidCharge
        setCurrentCharge(amount)
    }
    function chargePoints() {
        setLoading(true)
        fetchPoints(currentCharge)
            .then(() => refreshUserData())
            .catch(err => console.log("This is where the error label should trigger", err))
            .finally(() => setLoading(false))
    }

    return (
        <div>
            <p>{_id}</p>
            <p>{createDate}</p>
            <p>{name}</p>
            <p>{points}</p>
            <p>Redeem history:</p>
            {chargeValues.map((key, index) => (
                <div
                    key={`radioInput${index}`}>
                    <input
                        type="radio"
                        value={key}
                        checked={key === currentCharge}
                        onChange={setCharge}
                    />
                    <label>{key}</label>
                </div>
            ))}
            <p>
                <input type='button' value="Add Points" onClick={chargePoints} />
            </p>
        </div>
    )
}

export default UserList