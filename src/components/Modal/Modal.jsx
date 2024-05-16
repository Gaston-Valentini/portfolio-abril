import style from "./Modal.module.css";
import logo from "../../assets/images/logo-light-blue.png";

export default function Modal({ modalInfo, isModalOpen, setIsModalOpen }) {
    const { name, description, gallery } = modalInfo;

    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.close} onClick={() => setIsModalOpen(!isModalOpen)}>
                    Cerrar
                </div>
                <p className={style.name}>{name}</p>
                <p className={style.description}>{description}</p>
                <div className={style.logo}>
                    <hr />
                    <img src={logo} />
                    <hr />
                </div>
                <div className={style.gallery}>
                    {gallery.map((image) => (
                        <div className={style.galleryImage}>
                            <img src={image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
