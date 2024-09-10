import useDate from '../CUSTOM HOOKS/useDate';
import styles from './NoteOutput.module.css';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const NoteOutput = () => {
    const todayDate = useDate();
    const [data, setData] = useState([]);
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
    let filterData = data.filter((value) => value.day === todayDate);
    filterData = data.filter(value => value.day != todayDate);
    return (
        <>
            <div className={styles.main_box}>
                {
                    filterData.map((note) => (
                        <div key={note.id} className={styles.box} title='scroll for more data'>
                            <div className={styles.day}>
                                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                                {todayDate === formatNoteDate(note.date) ? (
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
        </>
    );
};

export default NoteOutput;
