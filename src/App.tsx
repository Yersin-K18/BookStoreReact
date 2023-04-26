import styles from './App.module.scss';
import { SearchBoxComponent } from './components/search-box-component/search-box-component';
import { ButtonComponent } from './components/button-component/button-component';
import { BookComponent } from './components/book-component/book-component';
import menu from './assets/menu.svg';
import account from './assets/account.svg';
import logo from './assets/logo.svg';
import favorite from './assets/favorite.svg';
import { ProductComponent } from './components/product-component/product-component';
import { SelectionComponent } from './components/selection-component/selection-component';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.header}>
                <div className={styles['header-left']}>
                    <img src={menu} alt="menu" />
                    <SearchBoxComponent />
                </div>
                <div className={styles['header-right']}>
                    <div className={styles['header-icon']}>
                        <img src={account} alt="account" />
                        <img src={favorite} alt="favorite" />
                    </div>
                    <ButtonComponent icon={logo} text={'Basket'} />
                </div>
            </div>
            <div className={styles['new-releases']}>
                <div className={styles['new-releases-left']}>
                    <h2>New Releases This Week</h2>
                    <p>
                        It's time to update your reading list with some of the latest and greatest
                        releases in the literary world. From heart-pumping thrillers to captivating
                        memoirs, this week's new releases offer something for everyone
                    </p>
                    <ButtonComponent text="Subscribe" />
                </div>
                <div className={styles['new-releases-right']}>
                    <BookComponent img="" />
                </div>
            </div>
            <div className={styles['top-sellers']}>
                <h2>Top Sellers</h2>
                <div>
                    <SelectionComponent />
                </div>
                <div className={styles.slider}>
                    <ProductComponent
                        img="https://picsum.photos/180/250"
                        nameProduct="random"
                        descProduct="lorem"
                        price="29"
                    />
                    <ProductComponent
                        img="https://picsum.photos/180/250"
                        nameProduct="random"
                        descProduct="lorem"
                        price="29"
                    />
                    <ProductComponent
                        img="https://picsum.photos/180/250"
                        nameProduct="random"
                        descProduct="lorem"
                        price="29"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
