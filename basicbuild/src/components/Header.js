import React from "react";

const Header = () => {
    return (
        <header style={styles.header}>
            <h2>Basic Build</h2>
        </header>
    );
};

export default Header;

const styles = {
    header: {
        padding: "1px",
        textAlign: "center",
        backgroundColor: "Orange",
        border: "solid",
    },
};
