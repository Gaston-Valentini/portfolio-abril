import style from "./About.module.css";
import aboutPhoto from "../../assets/images/about-photo.png";
import cv from "../../assets/files/CV.pdf";
import { FaRegFilePdf, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container} id="about">
            <div className={style.content}>
                <div className={style.image}>
                    <div className={style.imageContainer}>
                        <div className={style.imageContainerCircle}></div>
                        <div className={style.imagePhoto}>
                            <img src={aboutPhoto} />
                        </div>
                    </div>
                    <div className={style.imageButtons}>
                        <a href="https://www.instagram.com/a.v.a._studio?igsh=MXhwZTZidTc5bDByYQ==" className={style.imageButtonsLink}>
                            <FaInstagram />
                        </a>
                        <a href={cv} download="Abril-Valentini-CV.pdf" className={style.imageButtonsDownload}>
                            <FaRegFilePdf />
                        </a>
                        <a href="https://www.linkedin.com/in/abril-valentini-1a8166292/" className={style.imageButtonsLink}>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className={style.data}>
                    <p className={style.dataTitle}>¿Quién soy?</p>
                    <p className={style.dataText}>Abril Valentini, originaria de Argentina, estudió Diseño de Indumentaria y Textil en la Universidad de Mendoza. Especializándose en vestuario teatral y estilismo, ha seguido desarrollándose en confección de vestidos de fiesta y un emprendimiento propio de accesorios. Ahora en Alicante, busca colaborar con artistas musicales y directores audiovisuales.</p>
                </div>
            </div>
            <div style={{ height: "150px", width: "100%", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                    <path d="M-40.91,-11.33 C227.70,301.48 292.61,-119.88 515.52,80.44 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "var(--blue)" }} />
                </svg>
            </div>
        </section>
    );
}
