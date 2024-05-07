import style from "./Contact.module.css";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot, FaInstagram } from "react-icons/fa6";
import logo from "../../assets/images/logo-cream.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef(null);
    const [message, setMessage] = useState({
        text: "",
        status: 200,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
            (result) => {
                console.log(result);
                setMessage({
                    text: "Tu mensaje se ha enviado correctamente, nos comunicaremos contigo lo antes posible.",
                    status: 200,
                });
                setTimeout(() => {
                    setMessage({
                        text: "",
                        status: 0,
                    });
                }, 3000);
            },
            (error) => {
                console.log(error);
                setMessage({
                    text: "Ha ocurrido un error, por favor inténtalo nuevamente",
                    status: 400,
                });
                setTimeout(() => {
                    setMessage({
                        text: "",
                        status: 0,
                    });
                }, 3000);
            }
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <section className={style.container} id="contact">
            <div className={style.heading}>
                <p className={style.headingTitle}>Contacto</p>
                <p className={style.headingText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam veritatis ad laboriosam aperiam debitis minus! Nesciunt aut ut totam, odio velit fugiat perferendis tempora odit magnam! Corporis, ipsam minima?</p>
            </div>
            <div className={style.form}>
                <form className={style.formInputs} onSubmit={handleSubmit} ref={formRef}>
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
                    <p className={message.status == 200 ? style.formInputsMessageOk : style.formInputsMessageBad}>{message.text}</p>
                </form>
                <div className={style.formData}>
                    <div className={style.formDataInfo}>
                        <div className={style.formDataInfoElement}>
                            <FaPhone className={style.formDataInfoElementIcon} />
                            <p className={style.formDataInfoElementText}>+34 623 27 18 06</p>
                        </div>
                        <div className={style.formDataInfoElement}>
                            <MdOutlineMailOutline className={style.formDataInfoElementIcon} />
                            <p className={style.formDataInfoElementText}>gastonvalentiniruiz@gmail.com</p>
                        </div>
                        <div className={style.formDataInfoElement}>
                            <FaLocationDot className={style.formDataInfoElementIcon} />
                            <p className={style.formDataInfoElementText}>Carrer Cornellana 1, Benidorm - Alicante, 03502</p>
                        </div>
                        <div className={style.formDataInfoSocial}>
                            <a href="#">
                                <FaInstagram className={style.formDataInfoSocialIcon} />
                            </a>
                            <a href="#">
                                <FaLinkedin className={style.formDataInfoSocialIcon} />
                            </a>
                        </div>
                    </div>
                    <div className={style.formImage}>
                        <img src={logo} />
                    </div>
                </div>
            </div>
        </section>
    );
}
