import React, { Component } from "react";
import style from "./styles.css";

export class battletimer extends Component {
  render() {
    return (
      <div className={style.container}>
        <img className={style.mockup} src="img/001.jpg" alt='logo'/>
        <p className={style.text}>Essential.</p>
        <p className={style.textUnder}>For Competitive Wargaming. </p>
        <br />
        <p className={style.googlePlay}>Available now on Google Play.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.battletimer.dftpp&hl=en"
          alt='logo'
          className={style.gplaybadge}
        >
          <img className={style.gplaybadge} src="img/googleplaybadge.png" />
        </a>
      </div>
    );
  }
}

export default battletimer;
