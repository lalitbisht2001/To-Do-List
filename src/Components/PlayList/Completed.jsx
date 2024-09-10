import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import useDate from '../../CUSTOM HOOKS/useDate';
import styles from "./Completed.module.css";
const Completed = () => {
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

    const filterData = data.filter((value) => value.date != todaydate)
    return (
        <div className={styles.complete}>
            <p className={styles.heading}>
                Completed
            </p>
            <div className={styles.completed}>
                {
                    filterData.map((note) => (
                        <div key={note.id} className={styles.box} >
                            <div className={styles.day}>
                                {
                                    note.date
                                }
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

export default Completed
