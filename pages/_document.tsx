import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
    return (
        <Html>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&display=swap" rel="stylesheet" />
                <link rel="prefetch" href="/system-error.svg" as="image" />
                <link rel="prefetch" href="/cross-active.svg" as='image' />
                <link rel='prefetch' href='/cross-default.svg' as='image' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}