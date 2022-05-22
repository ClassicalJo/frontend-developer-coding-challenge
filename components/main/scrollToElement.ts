export default function scrollToElement(element: HTMLDivElement) {
    window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
}