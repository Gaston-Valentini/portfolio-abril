import style from "./About.module.css";
import aboutOverlay from "../../assets/images/about-overlay.png";
import aboutPhoto from "../../assets/images/test.jpg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.image}>
                    <div className={style.imageImages}>
                        <img src={aboutPhoto} className={style.imageImagesPhoto} />
                        <img src={aboutOverlay} className={style.imageImagesOverlay} />
                    </div>
                    <hr />
                    <div className={style.imageSocial}>
                        <div className={style.imageSocialDownload}>Descargar CV</div>
                        <hr />
                        <a href="#" className={style.imageSocialTag}>
                            <FaLinkedin className={style.imageSocialTagIcon} />
                            <p className={style.imageSocialTagText}>Linkedin</p>
                        </a>
                        <hr />
                        <a href="#" className={style.imageSocialTag}>
                            <FaInstagram className={style.imageSocialTagIcon} />
                            <p className={style.imageSocialTagText}>Instagram</p>
                        </a>
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
        </section>
    );
}
