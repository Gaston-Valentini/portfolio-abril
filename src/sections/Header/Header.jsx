import style from "./Header.module.css";
import video from "../../assets/videos/test.mp4";

export default function Header() {
    return (
        <section className={style.container} id="header">
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <div style={{ height: "150px", width: "100%", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                    <path d="M-40.91,-11.33 C227.70,301.48 292.61,-119.88 515.52,80.44 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "var(--cream)" }} />
                </svg>
            </div>
        </section>
    );
}
