import dynamic from 'next/dynamic'
import { Suspense, useRef, useState } from "react"
import Hero from "../hero"
import NavBar from "../nav"
import Products from '../products'
import Toasts from "../toasts"
import useToasts from "../toasts/useToasts"
import { Product, UserData } from "../types"
import scrollToElement from "./scrollToElement"
import { StyledMain, StyledMainWrapper } from "./styles"
import fetchUserData from './fetchUserData'
interface AppProps {
    productsData: Product[];
    initialUserData: UserData
}
const DynamicBrowse = dynamic(() => import('../browse'), { ssr: false })


export default function Main({ productsData, initialUserData }: AppProps): JSX.Element {
    let [userData, setUserData] = useState<UserData>(initialUserData)
    let ref = useRef<HTMLDivElement>(null)
    let { toasts, hide, successToast, errorToast, handleErrorWithToast } = useToasts()
    let scrollToProducts = () => ref.current && scrollToElement(ref.current)
    let refreshUserData = () => fetchUserData(setUserData, handleErrorWithToast)
    return (
        <main>
            <StyledMain>
                <StyledMainWrapper>
                    <NavBar userData={userData} refreshUserData={refreshUserData} successToast={successToast} errorToast={errorToast} />
                    <Hero onClick={scrollToProducts} />
                    <Suspense fallback="loading Browse">
                        <DynamicBrowse />
                    </Suspense>

                    <Products
                        ref={ref}
                        products={productsData}
                        userData={userData}
                        refreshUserData={refreshUserData}
                        successToast={successToast}
                        errorToast={errorToast}
                    />

                </StyledMainWrapper>
                <Toasts toasts={toasts} hide={hide} />
            </StyledMain>
        </main>
    )
}