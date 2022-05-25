import walk1Desk from "../../assets/illustrations/walkthroug-1-desktop.png"
import walk1Resp from "../../assets/illustrations/walkthroug-1-responsive.png"
import walk2Desk from "../../assets/illustrations/walkthroug-2-desktop.png"
import walk2Resp from "../../assets/illustrations/walkthroug-2-responsive.png"
import walk3Desk from "../../assets/illustrations/walkthroug-3-desktop.png"
import walk3Resp from "../../assets/illustrations/walkthroug-3-responsive.png"
import walk1Icon from '../../assets/icons/walkthrough-1.svg'
import walk2Icon from '../../assets/icons/walkthrough-2.svg'
import walk3Icon from '../../assets/icons/walkthrough-3.svg'
import { CardElement } from "../types"

let browse: CardElement = {
    title: "1—Browse",
    subtitle: "Browse our tech catalog with more than 20 top tech products",
    abridgedSubtitle: "Browse our tech catalog with more than 20 top tech products",
    alt: "A person riding a rocket giving a thumbs up and flying through the clouds",
    desktop: walk1Desk,
    responsive: walk1Resp,
    icon: walk1Icon
}

let choose: CardElement = {
    title: "2—Choose",
    subtitle: "Exchange your hard earned AeroPoints for the item you want",
    abridgedSubtitle: "Exchange your hard-earned Aeropoints for a cool tech item",
    alt: "Two hands, rendered through mobile devices, reaching to each other",
    desktop: walk2Desk,
    responsive: walk2Resp,
    icon: walk3Icon
}

let enjoy: CardElement = {
    title: "3—Enjoy!",
    subtitle: "All done, you can relax! We'll take care of delivery of your tech item!",
    abridgedSubtitle: "All done. We'll take care of delivery of your tech item!",
    alt: "A person, browsing the internet with two computers, giving a victory sign",
    desktop: walk3Desk,
    responsive: walk3Resp,
    icon: walk2Icon,
}
let cards: CardElement[] = [browse, choose, enjoy]

export default cards