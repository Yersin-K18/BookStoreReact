import styles from './App.module.scss';
import { SearchBoxComponent } from './components/search-box-component/search-box-component';
import { ButtonComponent } from './components/button-component/button-component';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.header}>
                <div className={styles['header-left']}>
                    <img src="/public/assets/menu.svg" alt="menu" />
                    <SearchBoxComponent />
                </div>
                <div className={styles['header-right']}>
                    <div className={styles['header-icon']}>
                        <img src="/public/assets/account.svg" alt="account" />
                        <img src="/public/assets/favorite.svg" alt="favorite" />
                    </div>
                    <ButtonComponent icon="/public/assets/logo.svg" text={'Basket'} />
                </div>
            </div>
        </div>
    );
}

export default App;
