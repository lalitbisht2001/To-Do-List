import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import useDate from "../../CUSTOM HOOKS/useDate";
import styles from "./Completed.module.css";

const Overdue = () => {
    const [data, setData] = useState([]);
    const todaydate = useDate();
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(list);
        };

        fetchData();
    }, []);
    const formatNoteDate = (dateString) => {
        if (!dateString) return "Invalid Date";
        const date = new Date(dateString);
        if (isNaN(date)) return "Invalid Date";
        return format(date, 'd MMM yyyy');
    };

    const filterData = data.filter((value) => value.date === todaydate);
    return (
        <div className={styles.complete}>
            <p className={styles.heading}>
                Overdue
            </p>
            <div className={styles.completed}>
                {
                    filterData.map((note) => (
                        <div key={note.id} className={styles.box}>
                            <div className={styles.day}>
                                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                {todaydate === formatNoteDate(note.date) ? (
                                    <p>Today</p>
                                ) : (
                                    <p>{formatNoteDate(note.date)}</p>
                                )}
                            </div>
                            <div className={styles.note}>
                                <p>{note.note}</p>
                            </div>
                            <div className={styles.time}>
                                <p>{note.starttime}</p>
                                <p> - </p>
                                <p>{note.endtime}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Overdue;