import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
         Visit Our Restaurant 
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT'S IN PUNE</h1>
          <p className={styles.text}>
            1654 FC Road #304.
            <br /> Pune, 411002
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 MG Road #235.
            <br /> Pune, 411002
            <br /> (602) 867-1011
          </p>
         
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 A.M - 10:00 P.M
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 9:00 A.M - 1:00 P.M
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
