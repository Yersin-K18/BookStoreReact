import styles from './App.module.scss';
import { SearchBoxComponent } from './components/search-box-component/search-box-component';
import { ButtonComponent } from './components/button-component/button-component';
import { BookComponent } from './components/book-component/book-component';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.header}>
                <div className={styles['header-left']}>
                    <img src="/assets/menu.svg" alt="menu" />
                    <SearchBoxComponent />
                </div>
                <div className={styles['header-right']}>
                    <div className={styles['header-icon']}>
                        <img src="/assets/account.svg" alt="account" />
                        <img src="/assets/favorite.svg" alt="favorite" />
                    </div>
                    <ButtonComponent icon="/assets/logo.svg" text={'Basket'} />
                </div>
            </div>
            <div className={styles['new-releases']}>
                <div className={styles['new-releases-left']}>
                    <h1>New Releases This Week</h1>
                    <p>
                        It's time to update your reading list with some of the latest and greatest
                        releases in the literary world. From heart-pumping thrillers to captivating
                        memoirs, this week's new releases offer something for everyone
                    </p>
                    <ButtonComponent text="Subscribe" />
                </div>
                <div className={styles['new-releases-right']}>
                    <BookComponent img='' />
                </div>
            </div>
        </div>
    );
}

export default App;
