import style from "./Skills.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Skills() {
    return (
        <section className={style.container}>
            <div className={style.heading}>
                <p className={style.headingTitle}>Habilidades</p>
                <p className={style.headingText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nam, labore adipisci ab consectetur voluptas, ipsam numquam mollitia cupiditate asperiores tempore, eveniet iusto beatae soluta qui maxime officia molestiae velit.</p>
            </div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardTitle} style={{ backgroundColor: "var(--orange)" }}>
                        <p className={style.cardsCardTitleText}>TÉCNICAS</p>
                    </div>
                    <FaInstagram className={style.cardsCardIcon} style={{ backgroundColor: "var(--orange)" }} />
                    <ul className={style.cardsCardData}>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardTitle} style={{ backgroundColor: "var(--lightBlue)" }}>
                        <p className={style.cardsCardTitleText}>BLANDAS</p>
                    </div>
                    <FaInstagram className={style.cardsCardIcon} style={{ backgroundColor: "var(--lightBlue)" }} />
                    <ul className={style.cardsCardData}>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardTitle} style={{ backgroundColor: "var(--blue)" }}>
                        <p className={style.cardsCardTitleText}>IDIOMAS</p>
                    </div>
                    <FaInstagram className={style.cardsCardIcon} style={{ backgroundColor: "var(--blue)" }} />
                    <ul className={style.cardsCardData}>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                        <li className={style.cardsCardDataElement}>- Habilidad 1</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
