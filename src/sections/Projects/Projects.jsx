import style from "./Projects.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Modal from "../../components/Modal/Modal";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { projects } from "../../data/data";
import { useState } from "react";

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [modalInfo, setModalInfo] = useState({
        name: "",
        description: "",
        gallery: [],
    });

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <MdArrowBackIos />,
        nextArrow: <MdArrowForwardIos />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className={style.container} id="proyects">
            {isModalOpen ? <Modal modalInfo={modalInfo} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> : <></>}
            <p className={style.title}>Proyectos</p>
            <div className={style.content}>
                <div className={style.line}></div>
                <div className={style.proyects}>
                    <Slider {...settings}>
                        {projects.map((card) => (
                            <ProjectCard
                                key={card.id}
                                card={card}
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                                setModalInfo={setModalInfo}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <div style={{ height: "150px", width: "100%", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                    <path
                        d="M-40.91,-11.33 C227.70,301.48 292.61,-119.88 515.52,80.44 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none", fill: "var(--cream)" }}
                    />
                </svg>
            </div>
        </section>
    );
}
