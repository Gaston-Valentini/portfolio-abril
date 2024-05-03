import style from "./Navbar.module.css";
import logo from "../../assets/images/navbar-logo.png";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const switchOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <RiMenuUnfoldLine className={!isOpen ? style.bars : `${style.bars} ${style.barsOpen}`} onClick={switchOpen} />
            <div className={!isOpen ? style.overlay : `${style.overlay} ${style.overlayOpen}`}>
                <ul className={!isOpen ? style.links : `${style.links} ${style.linksOpen}`}>
                    <IoMdClose className={style.linksClose} onClick={switchOpen} />
                    <li className={style.linksLink}>
                        <a href="#" onClick={switchOpen}>
                            Inicio
                        </a>
                    </li>
                    <li className={style.linksLink}>
                        <a href="#" onClick={switchOpen}>
                            Servicios
                        </a>
                    </li>
                    <li className={style.linksLink}>
                        <a href="#" onClick={switchOpen}>
                            Preguntas frecuentes
                        </a>
                    </li>
                    <li className={style.linksLink}>
                        <a href="#" onClick={switchOpen}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
