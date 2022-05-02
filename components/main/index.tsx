import { useCallback, useState, useEffect, useRef } from "react"
import Hero from "../hero"
import { Product, EffectUserData, UserData } from "../types"
import { StyledMain, StyledMainWrapper } from "./styles"
import NavBar from "../nav"
import Browse from "../browse"
import Products from "../products"

interface AppProps {
    productsData: Product[];
    initialUserData: UserData
}

export default function Main({ productsData, initialUserData }: AppProps): JSX.Element {
    let [userData, setUserData] = useState<EffectUserData>(initialUserData)
    let ref = useRef<HTMLDivElement>(null)
    let scrollToProducts = () => window.scrollTo({ top: ref.current?.offsetTop, behavior: 'smooth' })
    let fetchUser = useCallback(async () => {
        let res = await fetch("api/user")
        let data = await res.json()
        setUserData(data)
    }, [])

    return (
        <main>
            <StyledMain>
                <StyledMainWrapper>
                    <NavBar userData={userData} refreshUserData={fetchUser} />
                    <Hero onClick={scrollToProducts} />
                    <Browse />
                    <Products ref={ref} products={productsData} userData={userData} refreshUserData={fetchUser} />
                </StyledMainWrapper>
            </StyledMain>
        </main>
    )
}