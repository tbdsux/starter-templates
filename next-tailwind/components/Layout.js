import Head from 'next/head'

export const SiteName = 'Creep'

export default function Layout({children}) {
    return (
        <div className="antialiased w-full h-full">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;700;900&display=swap" rel="stylesheet" />
            </Head>

            <main>
                {children}
            </main>
        </div>
    )
}