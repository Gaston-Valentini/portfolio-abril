import React from "react";
import style from "./Header.module.css";
import video from "../../assets/videos/header.mp4";

export default function Header() {
    return (
        <section className={style.container} id="header">
            <div className={style.video}>
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className={style.text}>
                <p>DISEÑO DE INDUMENTARIA</p>
            </div>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className={style.svg}>
                <path d="M-40.91,-11.33 C227.70,301.48 292.61,-119.88 515.52,80.44 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "var(--cream)" }} />
            </svg>
        </section>
    );
}
