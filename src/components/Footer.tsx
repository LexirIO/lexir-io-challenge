import Logo from "../assets/logoAlt";
import styles from "../styles/Footer.module.css";

import MediumIcon from "../assets/contacts/medium";
import FacebookIcon from "../assets/contacts/facebook";
import InstagramIcon from "../assets/contacts/instagram";
import Linkedin from "../assets/contacts/linkedin";

export default function Footer() {
    return( 
    <footer className={styles.footer}>
        <div className="mx-10 pt-8">
            <div className="flex justify-between flex-wrap ">
                <div><Logo /></div>
                <div className="flex flex-col flex-wrap	 gap-y-5">
                   <div className={styles.sectionName}>Community</div>
                   <p>Lexir for Brands</p>
                   <p>Business Buyers</p>
                   <p>Sales Affiliates</p>
                </div>
                <div className="flex flex-col flex-wrap	 gap-y-5">
                   <div className={styles.sectionName}>Platform</div>
                   <p>Resources</p>
                   <p>Pricing</p>
                   <p>Get Started</p>
                </div>
                <div className="flex flex-col flex-wrap	 gap-y-5">
                   <p className={styles.sectionName}>Company</p>
                   <p>About</p>
                   <p>Contact</p>
                   <p>Legal</p>
                </div>
                <div className="flex flex-col flex-wrap	 gap-y-5">
                   <div className={styles.sectionName}>Lexir Shops</div>
                   <p>Brands</p>
                   <p>Spirits</p>
                   <p>Wine</p>
                   <p>Blog</p>
                </div>
                <div className="flex flex-wrap">
                    <MediumIcon /> <FacebookIcon /> <InstagramIcon /> <Linkedin />
                </div>
            </div>
            <hr className={"mt-12 "+styles.hr}/>
            <div className="flex flex-wrap	 justify-between py-5">
                <span className={"font-light "+styles.copyRight}>2022 Lexir Inc.</span> 
                <div className="flex flex-wrap gap-x-8">
                    <span>Privacy</span> 
                    <span>Terms of Service</span>
                </div>
            </div>
        </div>
    </footer>
)}