import { useCallback, useState, useRef, Suspense } from "react"
import Hero from "../hero"
import { Product, UserData } from "../types"
import { StyledMain, StyledMainWrapper } from "./styles"
import NavBar from "../nav"
import Toasts from "../toasts"
import useToasts from "../toasts/useToasts"
import dynamic from 'next/dynamic'
import Products from '../products'
interface AppProps {
    productsData: Product[];
    initialUserData: UserData
}
const DynamicBrowse = dynamic(() => import('../browse'), { ssr: false })


export default function Main({ productsData, initialUserData }: AppProps): JSX.Element {
    let [userData, setUserData] = useState<UserData>(initialUserData)
    let ref = useRef<HTMLDivElement>(null)
    let scrollToProducts = () => window.scrollTo({ top: ref.current?.offsetTop, behavior: 'smooth' })
    let fetchUser = useCallback(async () => {
        let res = await fetch("api/user")
        let data = await res.json()
        setUserData(data)
    }, [])

    let { toasts, hide, successToast, errorToast } = useToasts()
    return (
        <main>
            <StyledMain>
                <StyledMainWrapper>
                    <NavBar userData={userData} refreshUserData={fetchUser} successToast={successToast} errorToast={errorToast} />
                    <Hero onClick={scrollToProducts} />
                    <Suspense fallback="loading Browse">
                        <DynamicBrowse />
                    </Suspense>

                    <Products
                        ref={ref}
                        products={productsData}
                        userData={userData}
                        refreshUserData={fetchUser}
                        successToast={successToast}
                        errorToast={errorToast}
                    />

                </StyledMainWrapper>
                <Toasts toasts={toasts} hide={hide} />
            </StyledMain>
        </main>
    )
}