import style from "./Contact.module.css";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot, FaInstagram } from "react-icons/fa6";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <section className={style.container}>
            <div className={style.heading}>
                <p className={style.headingTitle}>Contacto</p>
                <p className={style.headingText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam veritatis ad laboriosam aperiam debitis minus! Nesciunt aut ut totam, odio velit fugiat perferendis tempora odit magnam! Corporis, ipsam minima?</p>
            </div>
            <div className={style.form}>
                <form className={style.formInputs} onSubmit={handleSubmit}>
                    <div className={style.formInputsSection}>
                        <span>Nombre</span>
                        <input type="text" name="name" placeholder="¿De parte de quien?" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className={style.formInputsSection}>
                        <span>Correo</span>
                        <input type="email" name="email" placeholder="Escriba su correo" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className={style.formInputsSection}>
                        <span>Mensaje</span>
                        <textarea name="message" placeholder="Escriba su mensaje" onChange={(e) => handleChange(e)}></textarea>
                    </div>
                    <input type="submit" value="Enviar" className={style.formInputsSubmit} disabled={Object.values(form).some((value) => value === "")} />
                    <p className={message == 200 ? style.formInputsMessageOk : style.formInputsMessageBad}>{message == 200 ? "Mensaje enviado correctamente" : "Ha ocurrido un error, inténtalo nuevamente"}</p>
                </form>
                <div className={style.formData}>
                    <div className={style.formDataElement}>
                        <FaPhone className={style.formDataElementIcon} />
                        <p className={style.formDataElementText}>+34 623 27 18 06</p>
                    </div>
                    <div className={style.formDataElement}>
                        <MdOutlineMailOutline className={style.formDataElementIcon} />
                        <p className={style.formDataElementText}>gastonvalentiniruiz@gmail.com</p>
                    </div>
                    <div className={style.formDataElement}>
                        <FaLocationDot className={style.formDataElementIcon} />
                        <p className={style.formDataElementText}>Carrer Cornellana 1, Benidorm - Alicante, 03502</p>
                    </div>
                    <div className={style.formDataSocial}>
                        <a href="#">
                            <FaInstagram className={style.formDataSocialIcon} />
                        </a>
                        <a href="#">
                            <FaLinkedin className={style.formDataSocialIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
