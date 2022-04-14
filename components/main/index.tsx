import { useCallback, useState, useEffect } from "react"
import Hero from "../hero"
import UserList from "../list/UserList"
import ProductList from "../list/ProductsList"
import { Product, EffectUserData } from "../types"
import { StyledMain } from "./styles"

interface AppProps {
    productsData: Product[]
}

export default function Main({ productsData }: AppProps): JSX.Element {
    let [userData, setUserData] = useState<EffectUserData>(null)
    let fetchUser = useCallback(async () => {
        let res = await fetch("api/user")
        let data = await res.json()
        setUserData(data)
    }, [])

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    return (
        <StyledMain>
            <Hero />
            <UserList userData={userData} refreshUserData={fetchUser} />
            <ProductList productsData={productsData} userData={userData} refreshUserData={fetchUser} />
        </StyledMain>
    )
}