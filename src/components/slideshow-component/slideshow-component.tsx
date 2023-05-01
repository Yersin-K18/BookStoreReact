import styles from './slideshow-component.module.scss';
import classNames from 'classnames';
import { BookComponent } from '../book-component/book-component';

export interface SlideshowComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-slideshow-components-and-templates
 */
export const SlideshowComponent = ({ className }: SlideshowComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['first-book']}>
                <BookComponent img={'https://picsum.photos/200/300'} />
            </div>
            <div className={styles['second-book']}>
                <BookComponent img={'https://picsum.photos/200/300'} />
            </div>
            <div className={styles['third-book']}>
                <BookComponent img={'https://picsum.photos/200/300'} />
            </div>
        </div>
    );
};
