import styles from './search-box-component.module.scss';
import classNames from 'classnames';

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
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.iconSearch}
            >
                <a href={'#'} />
                <path
                    d="M17 17L11.7548 11.7548M11.7548 11.7548C12.8948 10.6147 13.6 9.0397 13.6 7.3C13.6 3.82061 10.7794 1 7.3 1C3.82061 1 1 3.82061 1 7.3C1 10.7794 3.82061 13.6 7.3 13.6C9.0397 13.6 10.6147 12.8948 11.7548 11.7548Z"
                    stroke="#0D0842"
                    stroke-width="1.7"
                    stroke-linecap="round"
                />
            </svg>
            <input className={styles['search-box']} placeholder="What are you looking for ?" />
        </div>
    );
};
