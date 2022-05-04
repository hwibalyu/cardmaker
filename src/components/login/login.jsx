import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.top}>
      <div className={styles.main}>
        <div className={styles.logobar}>
          <span>Business Card Maker</span>
        </div>
        <div className={styles.center}>
          <span className={styles.login_text}>Login</span>
          <div className={styles.buttons}>
            <button className={styles.google_button}>Google</button>
            <button>Github</button>
          </div>
        </div>
        <div className={styles.footbar}>Code your dream</div>
      </div>
    </div>
  );
};

export default Login;
