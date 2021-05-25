import Head from "next/head";
import styles from "./Layout.module.css";
const Layout = ({children, title  ="Country Quiz !"}) => {
    return(    
    <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            my first project
          </h1>
          {children}
          
  
          
  
        </main>
  
        <footer className={styles.footer}>
          
        </footer>
      </div>);
};
export default Layout;