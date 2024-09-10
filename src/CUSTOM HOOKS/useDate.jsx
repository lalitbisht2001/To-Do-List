import { format } from 'date-fns';
const useDate = () => {
    const date = new Date();
    const formatdate = format(date, 'd MMM yyyy');
    return formatdate;
}

export default useDate;
