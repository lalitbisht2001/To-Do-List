import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import useDate from "../../CUSTOM HOOKS/useDate";
import useWindowSize from "../../CUSTOM HOOKS/useWindowSize";
import useOpen from "../../CUSTOM HOOKS/useOpen";

const Navbar = () => {
    const formatdate = useDate();
    const [windowsize] = useWindowSize();
    const [open, setOpen] = useOpen();

    const updateOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className={styles.navbar}>
            {windowsize.width <= 740 && (
                <div className={styles.menu_icon} onClick={updateOpen}>
                    {!open ? (
                        <FontAwesomeIcon icon={faBars} className={styles.icon} />
                    ) : (
                        <FontAwesomeIcon icon={faTimes} className={styles.icon} />
                    )}
                </div>
            )}
            <p className={styles.heading}>
                To Do List
            </p>
            <div className={styles.calender}>
                <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
                <p className={styles.date}>{formatdate}</p>
            </div>
        </div>
    );
}

export default Navbar;
