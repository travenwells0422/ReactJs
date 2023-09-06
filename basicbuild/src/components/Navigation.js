import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav style={styles.nav}>
            <Link to="homepage" style={styles.navButton}>
                Home
            </Link>
            <Link to="page1" style={styles.navButton}>
                PageOne
            </Link>
            ;
            <Link to="page2" style={styles.navButton}>
                PageTwo
            </Link>
            ;
            <Link to="page3" style={styles.navButton}>
                PageThree
            </Link>
            ;
        </nav>
    );
};

export default Navigation;

const styles = {
    nav: {
        marginTop: "20px",
        textAlign: "center",
    },
    navButton: {
        border: "dotted",
        padding: "5px",
    },
};
