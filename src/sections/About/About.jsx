import style from "./About.module.css";
import aboutPhoto from "../../assets/images/about-photo.png";
import { FaRegFilePdf, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container} id="about">
            <div className={style.content}>
                <div className={style.image}>
                    <div className={style.imageContent}>
                        <div className={style.imageContentCircle}></div>
                    </div>
                    <div className={style.imagePhoto}>
                        <img src={aboutPhoto} />
                    </div>
                    <div className={style.imageSocial}>
                        <div className={style.imageSocialLeft}>
                            <FaRegFilePdf />
                            <p>Descargar CV</p>
                        </div>
                        <div className={style.imageSocialRight}>
                            <FaLinkedin />
                            <p>Linkedin</p>
                        </div>
                        <div className={style.imageSocialLeft}>
                            <FaInstagram />
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
                <div className={style.data}>
                    <p className={style.dataTitle}>¿Quién soy?</p>
                    <p className={style.dataText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus illum molestias a hic nobis ea perferendis laboriosam placeat culpa reprehenderit omnis reiciendis autem, animi repudiandae dolores. Modi, consectetur iste!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, beatae. Esse non iusto, cumque nihil obcaecati modi nobis ut rerum, repudiandae voluptates distinctio! Voluptatibus obcaecati aperiam ullam quo, at unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, beatae. Esse non iusto, cumque nihil obcaecati modi nobis ut rerum, repudiandae voluptates distinctio! Voluptatibus obcaecati aperiam ullam quo, at unde.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, beatae. Esse non iusto, cumque nihil obcaecati modi nobis ut rerum, repudiandae voluptates distinctio! Voluptatibus obcaecati aperiam ullam quo, at unde.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, beatae. Esse non iusto, cumque nihil obcaecati modi nobis ut rerum, repudiandae voluptates distinctio! Voluptatibus obcaecati aperiam ullam quo, at unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, beatae. Esse non iusto, cumque nihil obcaecati modi nobis ut rerum, repudiandae voluptates distinctio! Voluptatibus obcaecati aperiam ullam quo, at unde.
                    </p>
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
