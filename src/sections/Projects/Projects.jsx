import style from "./Projects.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { projects } from "../../data/data";

export default function Projects() {
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <MdArrowBackIos />,
        nextArrow: <MdArrowForwardIos />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
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
            <p className={style.title}>Proyectos</p>
            <div className={style.content}>
                <div className={style.line}></div>
                <div className={style.proyects}>
                    <Slider {...settings}>
                        {projects.map((e) => (
                            <div key={e.id} className={style.proyectsCard}>
                                <div className={style.proyectsCardBorder}>
                                    <div className={style.proyectsCardContent} style={{ backgroundImage: `url(${e.image})` }}>
                                        <div className={style.proyectsCardContentOverlay}>
                                            <p className={style.proyectsCardContentName}>{e.name}</p>
                                            <p className={style.proyectsCardContentShow}>Ver detalles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div style={{ height: "150px", width: "100%", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                    <path d="M-40.91,-11.33 C227.70,301.48 292.61,-119.88 515.52,80.44 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "var(--cream)" }} />
                </svg>
            </div>
        </section>
    );
}
