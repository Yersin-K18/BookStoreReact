import styles from './selection-component.module.scss';
import classNames from 'classnames';

export interface SelectionComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-selection-components-and-templates
 */
export const SelectionComponent = ({ className }: SelectionComponentProps) => {
    return (
        <div className={classNames(styles.dropdown, className)}>
            <div className={styles['dropdown-select']}>
                <span>Choose a genre</span>
                <i className="fa fa-caret-down icon"></i>
            </div>
            <div className={styles['dropdown-list']}>
                <div className={styles['dropdown-list__item']}>Pepsi</div>
                <div className={styles['dropdown-list__item']}>Coca</div>
                <div className={styles['dropdown-list__item']}>Monster</div>
            </div>
        </div>
    );
};
