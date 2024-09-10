import { NavLink } from "react-router-dom";
import styles from "./Main.module.css";
import Search from "./Search";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEffect, useState } from "react";

const Main = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    console.log(yesterday.toDateString());

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(list);
        }
        fetchData();
    }, []);

  
    const uniqueNames = Array.from(new Set(data.map(item => item.name)));

    return (
        <div className={styles.main}>
            <div className={styles.box1}>
                <div className={styles.desp}>
                    <div className={styles.heading}>
                        <p>Priority</p>
                        <div className={styles.h1}>High</div>
                    </div>
                    <div className={styles.heading}>
                        <p>Due date</p>
                        <div className={styles.date}>
                            {yesterday.toDateString()}
                        </div>
                    </div>
                    <div className={styles.heading}>
                        <p>Tags</p>
                        <div className={styles.heading_next_box}>
                            <div className={styles.m1}>Meetings</div>
                            <div className={styles.m2}>UI Design</div>
                            <div className={styles.m3}>Development</div>
                            <div className={styles.m4}>UX Research</div>
                        </div>
                    </div>
                    <div className={styles.heading}>
                        <p>Assignees</p>
                        <div className={styles.assigners}>
                            {
                                uniqueNames.map((name, id) => (
                                    <div key={id} className={styles.assign}>
                                        <p>{name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <Search />
                </div>
            </div>
            <div className={styles.box2}>
                <div >
                    <NavLink to='/newtask' className={styles.btn}>
                        New Task
                    </NavLink>
                </div>
                <div className={styles.select}>
                    <select>
                        <option>Filter</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                    <select>
                        <option>Sort</option>
                        <option value="">Today</option>
                        <option value="">Yesterday</option>
                        <option value="">Tommorow</option>
                    </select>
                    <select>
                        <option>Label</option>
                        <option value="">High</option>
                        <option value="">Low</option>
                        <option value="">Medium</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Main;
