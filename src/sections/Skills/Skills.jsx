import style from "./Skills.module.css";
import { FaHandshake, FaBookBookmark } from "react-icons/fa6";
import { PiHeadCircuit } from "react-icons/pi";

export default function Skills() {
    return (
        <section className={style.container} id="skills">
            <div className={style.content}>
                <div className={style.heading}>
                    <p className={style.headingTitle}>Habilidades</p>
                    <p className={style.headingText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nam, labore adipisci ab consectetur voluptas, ipsam numquam mollitia cupiditate asperiores tempore, eveniet iusto beatae soluta qui maxime officia molestiae velit.</p>
                </div>
                <div className={style.cards}>
                    <div className={style.cardsCard}>
                        <div className={style.cardsCardTitle} style={{ backgroundColor: "var(--orange)" }}>
                            <p className={style.cardsCardTitleText}>TÉCNICAS</p>
                        </div>
                        <FaHandshake className={style.cardsCardIcon} style={{ backgroundColor: "var(--orange)" }} />
                        <ul className={style.cardsCardData}>
                            <li className={style.cardsCardDataElement}>- Compañerismo</li>
                            <li className={style.cardsCardDataElement}>- Responsabilidad</li>
                            <li className={style.cardsCardDataElement}>- Atención al detalle</li>
                            <li className={style.cardsCardDataElement}>- Resolución de problemas</li>
                            <li className={style.cardsCardDataElement}>- Carisma</li>
                            <li className={style.cardsCardDataElement}>- Creatividad</li>
                        </ul>
                    </div>
                    <div className={style.cardsCard}>
                        <div className={style.cardsCardTitle} style={{ backgroundColor: "var(--lightBlue)" }}>
                            <p className={style.cardsCardTitleText}>BLANDAS</p>
                        </div>
                        <PiHeadCircuit className={style.cardsCardIcon} style={{ backgroundColor: "var(--lightBlue)" }} />
                        <ul className={style.cardsCardData}>
                            <li className={style.cardsCardDataElement}>- Paquete Adobe</li>
                            <li className={style.cardsCardDataElement}>- Paquete Microsoft</li>
                            <li className={style.cardsCardDataElement}>- Corte y confección</li>
                            <li className={style.cardsCardDataElement}>- Patronaje</li>
                            <li className={style.cardsCardDataElement}>- Estampados</li>
                            <li className={style.cardsCardDataElement}>- Geometrales</li>
                            <li className={style.cardsCardDataElement}>- Ficha técnica</li>
                            <li className={style.cardsCardDataElement}>- Rapport</li>
                        </ul>
                    </div>
                    <div className={style.cardsCard}>
                        <div className={style.cardsCardTitle} style={{ backgroundColor: "var(--blue)" }}>
                            <p className={style.cardsCardTitleText}>IDIOMAS</p>
                        </div>
                        <FaBookBookmark className={style.cardsCardIcon} style={{ backgroundColor: "var(--blue)" }} />
                        <ul className={style.cardsCardData}>
                            <li className={style.cardsCardDataElement}>- Español: Nativo</li>
                            <li className={style.cardsCardDataElement}>- Ingles: C1</li>
                            <li className={style.cardsCardDataElement}>- Italiano: B1</li>
                            <li className={style.cardsCardDataElement}>- Francés: Básico</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ height: "150px", width: "100%", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                    <path d="M-40.91,-11.33 C227.70,301.48 292.61,-119.88 515.52,80.44 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "var(--orange)" }} />
                </svg>
            </div>
        </section>
    );
}
