import style from "./Skills.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Skills() {
    return (
        <section className={style.container}>
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
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={style.wave}>
                <path
                    fill="var(--lightBlue)"
                    fill-opacity="1"
                    d="M0,96L0,160L36.9,160L36.9,0L73.8,0L73.8,0L110.8,0L110.8,192L147.7,192L147.7,224L184.6,224L184.6,224L221.5,224L221.5,288L258.5,288L258.5,128L295.4,128L295.4,256L332.3,256L332.3,64L369.2,64L369.2,160L406.2,160L406.2,224L443.1,224L443.1,32L480,32L480,320L516.9,320L516.9,32L553.8,32L553.8,64L590.8,64L590.8,128L627.7,128L627.7,288L664.6,288L664.6,288L701.5,288L701.5,224L738.5,224L738.5,256L775.4,256L775.4,32L812.3,32L812.3,32L849.2,32L849.2,128L886.2,128L886.2,0L923.1,0L923.1,96L960,96L960,224L996.9,224L996.9,0L1033.8,0L1033.8,64L1070.8,64L1070.8,224L1107.7,224L1107.7,160L1144.6,160L1144.6,96L1181.5,96L1181.5,160L1218.5,160L1218.5,256L1255.4,256L1255.4,192L1292.3,192L1292.3,32L1329.2,32L1329.2,192L1366.2,192L1366.2,320L1403.1,320L1403.1,192L1440,192L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}
