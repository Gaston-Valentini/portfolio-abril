import style from "./Contact.module.css";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../assets/images/logo-blue.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef(null);
    const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
            (result) => {
                console.log(result);
                setMessage(200);
                setTimeout(() => {
                    setMessage();
                }, 3000);
            },
            (error) => {
                console.log(error);
                setMessage(400);
                setTimeout(() => {
                    setMessage();
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
            <p className={style.title}>Contacto</p>
            <div className={style.form}>
                <form className={style.formInputs} onSubmit={handleSubmit} ref={formRef}>
                    <div className={style.formInputsFields}>
                        <div className={style.formInputsFieldsElements}>
                            <input type="text" name="name" placeholder="Nombre" onChange={(e) => handleChange(e)} />
                            <input type="email" name="email" placeholder="Correo" onChange={(e) => handleChange(e)} />
                            <textarea name="message" placeholder="Mensaje" onChange={(e) => handleChange(e)} />
                        </div>
                        <button type="submit" className={style.formInputsFieldsSubmit} disabled={Object.values(form).some((value) => value === "")}>
                            <FaRegPaperPlane />
                        </button>
                    </div>
                    {message === 200 ? <p className={style.formInputsMessageOk}>Tu mensaje se ha enviado correctamente</p> : <></>}
                    {message === 400 ? <p className={style.formInputsMessageNo}>Ha ocurrido un error, por favor inténtalo nuevamente</p> : <></>}
                </form>
                <div className={style.formData}>
                    <div className={style.formDataElement}>
                        <FaLocationDot />
                        <p className={style.formDataElementText}>Calle botella de hornos, 7 - Alicante</p>
                    </div>
                    <div className={style.formDataElement}>
                        <FaPhone />
                        <p className={style.formDataElementText}>+34631159030</p>
                    </div>
                    <div className={style.formDataElement}>
                        <MdOutlineMailOutline />
                        <p className={style.formDataElementText}>abril.valentini.a@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={style.logo}>
                <hr />
                <img src={logo} />
                <hr />
            </div>
            <div className={style.developer}>
                Desarrollado por <a href="https://www.linkedin.com/in/gastonvalentini/">GASTÓN VALENTINI</a>
            </div>
        </section>
    );
}
