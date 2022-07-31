// Functional
import React from "react"
// Styles
import styles from "./Header.module.scss"
// Next-head and next-image
import Head from 'next/head'
import Image from "next/image"
// Utils 
import { SVG } from "../../utils/svg"
import { MAIN_ROUTE } from "../../utils/route"
// Global component
import { A } from "../../utils/components"

const Header = () => {

    return (
        <div className={styles["header"]}>
            <Head>
                <title>Vi-cue</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <nav className={styles["header__menu"]}>
                <Image
                    src={SVG.beer}
                    alt="logo"
                    width={50}
                    height={50}
                />
                {
                    MAIN_ROUTE.map(( link, index ) => (
                        <A
                            key={`header-link-${index}`}
                            href={link.href}
                        >
                            {link.title}
                        </A>
                    ))
                }
            </nav>
        </div>
    )
}

export default Header

