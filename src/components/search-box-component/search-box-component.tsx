import classNames from 'classnames';
import styles from './search-box-component.module.scss';
import search from '../../assets/search.svg';

export interface SearchBoxComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-search-box-components-and-templates
 */
export const SearchBoxComponent = ({ className }: SearchBoxComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={search} alt="search" className={styles.iconSearch} />
            <input className={styles['search-box']} placeholder="What are you looking for ?" />
        </div>
    );
};
