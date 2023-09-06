import React from "react";

const Footer = () => {
    return (
        <footer>
            <p style={styles.footer}>
                Copyright &copy; 2022-
                <script>document.write(new Date().getFullYear())</script>Traven
                Wells
            </p>
        </footer>
    );
};

export default Footer;

const styles = {
    footer: {
        paddingTop: "10px",
        paddingBottom: "40px",
        textAlign: "center",
        backgroundColor: "lightGray",
    },
};
