import { useState } from 'react'
import useDate from './useDate';

const useList = () => {
    const date = useDate();
    const [listData, setListData] = useState({
        name: "",
        priority: "",
        starttime: "",
        endtime: "",
        note: "",
        date: date,
    });
    return [listData, setListData];
}

export default useList