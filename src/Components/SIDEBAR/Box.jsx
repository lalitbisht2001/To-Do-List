import styles from "./Sidebar.module.css";

const Box = ({ Arr , name }) => {
    return (
        <div className={styles.box2}>
            <p className={styles.menu}>{name}</p>
            <div className={styles.menu_box}>
                {
                    Arr.map(({ icon, name }) => (
                        <div className={styles.page} key={name}>
                            {icon}
                            <p>{name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Box