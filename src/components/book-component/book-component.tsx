import styles from './book-component.module.scss';
import classNames from 'classnames';

export interface BookComponentProps {
    className?: string;
    img: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-book-components-and-templates
 */
export const BookComponent = ({ className, img }: BookComponentProps) => {
    if (img == '') {
        img = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
    }
    return (
        <div className={classNames(styles.root, className)}>
            <img src={img} />
        </div>
    );
};
