import style from "./ProjectCard.module.css";

export default function ProjectCard({ card, isModalOpen, setIsModalOpen, setModalInfo }) {
    const { id, name, description, gallery } = card;

    return (
        <div key={id} className={style.container}>
            <div className={style.containerBorder}>
                <div className={style.containerContent} style={{ backgroundImage: `url(${gallery[0]})` }}>
                    <div className={style.containerContentOverlay}>
                        <p className={style.containerContentName}>{name}</p>
                        <p
                            className={style.containerContentShow}
                            onClick={() => {
                                setIsModalOpen(!isModalOpen);
                                setModalInfo({
                                    name,
                                    description,
                                    gallery,
                                });
                            }}
                        >
                            Ver detalles
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
