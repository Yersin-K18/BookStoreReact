import styles from './product-component.module.scss';
import classNames from 'classnames';
import { ButtonComponent } from '../button-component/button-component';

export interface ProductComponentProps {
    className?: string;
    img: string;
    nameProduct: string;
    descProduct: string;
    price: string;
    priceBefore: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-product-components-and-templates
 */
export const ProductComponent = ({
    className,
    img,
    nameProduct,
    descProduct,
    price,
    priceBefore,
}: ProductComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['img-product']}>
                <img src={img} alt='img-product' />
            </div>
            <div className={styles['detail-product']}>
                <div className={styles['about-product']}>
                    <h3 className={styles['name-product']}>{nameProduct}</h3>
                    <p className={styles['desc-product']}>
                        {descProduct}
                    </p>
                    <div className={styles['price-product']}>
                        <span className={styles.price}>$ {price}</span>
                        <span className={styles['price-before']}>$ {priceBefore}</span>
                    </div>
                </div>
                <ButtonComponent
                    icon="/src/assets/logo.svg"
                    text="Add to basket"
                    className={styles.ButtonAdd}
                />
            </div>
        </div>
    );
};
