import useSearchQuery from "../../CUSTOM HOOKS/useSearchQuery";
import styles from "./Main.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    const [query, setQuery] = useSearchQuery('');
    return (
        <div className={styles.search_box}>
            <div className={styles.searching}>
                <input
                    type="text"
                    placeholder="Search the task "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.search}
                />
            </div>
            <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
        </div>
    );
};

export default Search;
