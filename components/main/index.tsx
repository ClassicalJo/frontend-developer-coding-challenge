import { useCallback, useState, useEffect } from "react"
import Hero from "../hero"
import UserList from "../list/UserList"
import ProductList from "../list/ProductsList"
import { Product, EffectUserData } from "../types"
import { StyledMain, StyledMainWrapper } from "./styles"
import NavBar from "../nav"
import Browse from "../browse"
import Products from "../products"

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
            <StyledMainWrapper>
                <NavBar userData={userData}/>
                <Hero />
                <Browse />
                <Products products={productsData} userData={userData} refreshUserData={fetchUser} />
                
                
            </StyledMainWrapper>
        </StyledMain>
    )
}