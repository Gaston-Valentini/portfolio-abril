import { useState } from "react";
import style from "./Contact.module.css";

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
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.formSection}>
                    <span>Nombre</span>
                    <input type="text" name="name" placeholder="¿De parte de quien?" onChange={(e) => handleChange(e)} />
                </div>
                <div className={style.formSection}>
                    <span>Correo</span>
                    <input type="email" name="email" placeholder="Escriba su correo" onChange={(e) => handleChange(e)} />
                </div>
                <div className={style.formSection}>
                    <span>Mensaje</span>
                    <textarea name="message" placeholder="Escriba su mensaje" onChange={(e) => handleChange(e)}></textarea>
                </div>
                <input type="submit" value="Enviar" className={style.formSubmit} disabled={Object.values(form).some((value) => value === "")} />
                <p className={message == 200 ? style.formMessageOk : style.formMessageBad}>{message == 200 ? "Mensaje enviado correctamente" : "Ha ocurrido un error, inténtalo nuevamente"}</p>
            </form>
        </section>
    );
}
