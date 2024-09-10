import styles from "./List.module.css";
import useTime from '../CUSTOM HOOKS/useTime';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import useList from '../CUSTOM HOOKS/useList';
import useDate from "../CUSTOM HOOKS/useDate";

const List = () => {
    const time = useTime();
    const date = useDate();
    const [listData, setListData] = useList({
        name: "",
        priority: "",
        starttime: "",
        endtime: "",
        note: "",
        date: date,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentTime = new Date();
        const startTime = new Date();
        const [hours, minutes] = listData.starttime.split(':');
        startTime.setHours(hours);
        startTime.setMinutes(minutes);

        if (startTime < currentTime) {
            alert("The start time has already passed. You cannot add a note at this time.");
            return;
        }
        try {
            const q = query(
                collection(db, "tasks"),
                where("name", "==", listData.name),
                where("starttime", "==", listData.starttime),
                where("endtime", "==", listData.endtime)
            );

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                await addDoc(collection(db, "tasks"), listData);
                console.log("Document written successfully.");
                setListData({
                    name: "",
                    priority: "",
                    starttime: "",
                    endtime: "",
                    note: "",
                    date: date,
                });
            } else {
                alert("This task already exists in the database.");
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <>
            <div className={styles.main_box}>
                <form className={styles.listbox} onSubmit={handleSubmit}>
                    <div className={`${styles.div} ${styles.date_time}`}>
                        <div>
                            <p >{time}</p>
                        </div>
                        <div>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className={styles.div}>
                        <p>Enter the name of Assigners</p>
                        <input
                            type='text'
                            className='input'
                            placeholder='Enter Assigners Name'
                            name='name'
                            value={listData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.div}>
                        <p>Priority</p>
                        <select
                            name='priority'
                            value={listData.priority}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select Priority</option>
                            <option value="Less">Less</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className={styles.div}>
                        <p>Start Time</p>
                        <input
                            type='time'
                            name='starttime'
                            value={listData.starttime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.div}>
                        <p>End Time</p>
                        <input
                            type='time'
                            name='endtime'
                            value={listData.endtime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.note}>
                        <p>Note</p>
                        <input
                            type='text'
                            name='note'
                            value={listData.note}
                            className='input-item'
                            placeholder='Enter the Note'
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.btnbox}>
                        <button className={styles.btn} type='submit' title='Save the note'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default List;
