import style from "./Projects.module.css";

export default function Projects() {
    const data = [
        {
            id: 1,
            title: "Proyecto",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatibus, consequuntur distinctio explicabo dolor, exercitationem cupiditate blanditiis tenetur dolorem ducimus nihil natus fuga adipisci architecto esse neque, nobis autem sit.",
            image: "https://www.viamoda.ad/wp-content/uploads/2022/03/project-x-paris-ss22-via-moda-andorra-min.jpg",
            gallery: [],
        },
        {
            id: 2,
            title: "Proyecto",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatibus, consequuntur distinctio explicabo dolor, exercitationem cupiditate blanditiis tenetur dolorem ducimus nihil natus fuga adipisci architecto esse neque, nobis autem sit.",
            image: "https://www.viamoda.ad/wp-content/uploads/2022/03/project-x-paris-ss22-via-moda-andorra-min.jpg",
            gallery: [],
        },
        {
            id: 3,
            title: "Proyecto",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatibus, consequuntur distinctio explicabo dolor, exercitationem cupiditate blanditiis tenetur dolorem ducimus nihil natus fuga adipisci architecto esse neque, nobis autem sit.",
            image: "https://www.viamoda.ad/wp-content/uploads/2022/03/project-x-paris-ss22-via-moda-andorra-min.jpg",
            gallery: [],
        },
    ];

    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.heading}>
                    <p className={style.headingTitle}>Proyectos</p>
                    <p className={style.headingText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sapiente modi ad quibusdam obcaecati molestias voluptates eum, accusantium aliquid a, quia tempora suscipit. Tempora, omnis architecto adipisci quisquam consequuntur est.</p>
                </div>
                <div className={style.cards}>
                    {data.map((card) => (
                        <div className={style.cardsContainer} key={card.id}>
                            <div className={style.cardsCard} style={{ backgroundImage: `url(${card.image})` }}>
                                <div className={style.cardsCardOverlay}>
                                    <p className={style.cardsCardTitle}>{card.title}</p>
                                    <div className={style.cardsCardShow}>Ver detalles</div>
                                </div>
                            </div>
                        </div>
                    ))}
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
