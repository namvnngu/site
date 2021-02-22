import Head from "next/head";
import Email from "../../components/Contact/Email";
import MainImageContact from "../../components/Contact/MainImageContact";
import Social from "../../components/Contact/Social";
import styles from "../../styles/Contact.module.scss";
const Contact = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/personal/bee.svg" />
        <title>Contact | Nam Nguyen</title>
      </Head>
      <div className={styles["contact"]}>
        <MainImageContact />
        <section className="container">
          <Email />
          <Social/>
        </section>
      </div>
    </>
  );
};

export default Contact;
