import styles from "./footer.module.css";
import Image from "next/image";
import DropDown from "./footerDropDown/dropDown";


export default function Footer() {
    return (
        <>
            <div className={styles.divider}></div>
            <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <Image src="/Logo.png" alt="Logo" width={140} height={80} />
                <p>Copyright © 2025 Umami Connect</p>
                <p>All rights reserved</p>
            </div>
            <div className={styles.footerSection}>
                <h3>Privacy Policy</h3>
                <a>Privacy Policy</a>
                <a>Terms of Service</a>
                <a>Contact Us</a>
                <a href="https://www.instagram.com/_.joao_06/" target="_blank" rel="noopener noreferrer">Follow Us</a>
            </div>
            <div className={styles.footerSection}>
                <h3>Products</h3>
                <a>Shop</a>
            </div>
            <div className={styles.footerSection}>
                <DropDown />
            </div>
        </footer>
      </>
    );
}