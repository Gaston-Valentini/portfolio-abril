import style from "./Modal.module.css";
import logo from "../../assets/images/logo-light-blue.png";

export default function Modal({ modalInfo, isModalOpen, setIsModalOpen }) {
    const { name, description, gallery } = modalInfo;

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section className={style.container} onClick={() => setIsModalOpen(!isModalOpen)}>
            <div className={style.content} onClick={handleContentClick}>
                <div className={style.close} onClick={() => setIsModalOpen(!isModalOpen)}>
                    X
                </div>
                <p className={style.name}>{name}</p>
                <p className={style.description}>{description}</p>
                <div className={style.logo}>
                    <hr />
                    <img src={logo} alt="Logo" />
                    <hr />
                </div>
                <div className={style.gallery}>
                    {gallery.map((image, index) => (
                        <div key={index} className={style.galleryImage}>
                            <img src={image} alt={`Gallery Image ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
