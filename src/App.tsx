import styles from './App.module.scss';
import { SearchBoxComponent } from './components/search-box-component/search-box-component';

function App() {
    return (
        <div className={styles.App}>
            <SearchBoxComponent />
        </div>
    );
}

export default App;
