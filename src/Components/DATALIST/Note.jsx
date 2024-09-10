import { useEffect, useState } from "react";
import styles from "./Note.module.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Note = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(list);
        };

        fetchData();
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                NOTES
            </div>
            <div className={styles.list_box}>
                {
                    data.map((note, i) => (
                        <div key={i} className={styles.box}>
                            <p className={styles.name}>
                                {note.name}
                            </p>
                            <div className={styles.date}>
                                <p><span>Priority :</span> {note.priority}</p>
                                <p><span>Date : </span>{note.date}</p>
                            </div>
                            <p className={styles.note}>
                                {note.note}
                            </p>
                            <div className={styles.time}>
                                <p>{note.starttime}</p>
                                <p>-</p>
                                <p>{note.endtime}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Note
