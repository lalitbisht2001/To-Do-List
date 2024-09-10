import Box from "./Box";
import styles from "./Slider.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCog, faThLarge, faTasks, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import useOpen from "../../CUSTOM HOOKS/useOpen";

const Slider = () => {
    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faThLarge} />,
            name: "Overview",
        },
        {
            icon: <FontAwesomeIcon icon={faTasks} />,
            name: "Task List",
        },
        {
            icon: <FontAwesomeIcon icon={faProjectDiagram} />,
            name: "Project Overview",
        },
        {
            icon: <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />,
            name: "Calendar",
        },
        {
            icon: <FontAwesomeIcon icon={faCog} />,
            name: "Settings",
        },
    ];

    const listItems = [
        {
            icon: "😎",
            name: "Personal",
        },
        {
            icon: "🎨",
            name: "Design",
        },
        {
            icon: "💻",
            name: "Development",
        },
        {
            icon: "📚",
            name: "Research",
        }
    ];

    const [isOpen] = useOpen();
    console.log("isOpen:", isOpen);

    return (
        <>
            {isOpen && (
                <div className={styles.sidebar}>
                    <div className={styles.box1}>
                        <div className={styles.logo}>
                            <p className={styles.name}>Task<span>mate</span></p>
                            <p className={styles.quote}>Focus, Prioritize, Execute.</p>
                        </div>
                        <div className={styles.account}>
                            Sign In
                        </div>
                    </div>
                    <Box Arr={menuItems} name='Menu' />
                    <Box Arr={listItems} name='List' />
                </div>
            )}
        </>
    );
}

export default Slider;
