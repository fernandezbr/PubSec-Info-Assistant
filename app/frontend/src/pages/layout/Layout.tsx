// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Outlet, NavLink, Link } from "react-router-dom";
import pipologo from "../../assets/pipo-logo.png";
import pipo from "../../assets/pipo.png";
import { WarningBanner } from "../../components/WarningBanner/WarningBanner";
import styles from "./Layout.module.css";
import { Title } from "../../components/Title/Title";
import { getFeatureFlags, GetFeatureFlagsResponse } from "../../api";
import { useEffect, useState } from "react";

export const Layout = () => {
    const [featureFlags, setFeatureFlags] = useState<GetFeatureFlagsResponse | null>(null);

    async function fetchFeatureFlags() {
        try {
            const fetchedFeatureFlags = await getFeatureFlags();
            setFeatureFlags(fetchedFeatureFlags);
        } catch (error) {
            // Handle the error here
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, []);

    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <WarningBanner />
                <div className={styles.headerContainer}>
                    <div className={styles.headerTitleContainer}>
                        <img src={pipologo} alt="Provident Interactive Partner Online" className={styles.headerLogo} />
                        <h1 className={styles.headerTitle}><Title /></h1>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer className={styles.footer} role={"banner"}>
                <WarningBanner />
                <div className={styles.headerContainer}>
                    <div className={styles.headerTitleContainer}>
                        <img src={pipo} alt="PIPO: Provident Fund Interactive Partner Online" className={styles.headerLogo} />
                    </div>
                </div>
            </footer>
        </div>
    );
};
