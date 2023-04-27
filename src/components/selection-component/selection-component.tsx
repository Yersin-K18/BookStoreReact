import styles from './selection-component.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export interface SelectionComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-selection-components-and-templates
 */
export const SelectionComponent = ({ className }: SelectionComponentProps) => {
    const [selectedItem, setSelectedItem] = useState<HTMLDivElement | null>(null);
    const [selectedText, setSelectedText] = useState<string>('Choose a genre');

    function handleListItemClick(event: React.MouseEvent<HTMLDivElement>) {
        if (selectedItem) {
            selectedItem.classList.remove(styles['dropdown-list__item_selected']);
        }

        event.currentTarget.classList.add(styles['dropdown-list__item_selected']);

        setSelectedText(event.currentTarget.textContent || '');
        setSelectedItem(event.currentTarget);
    }

    return (
        <div className={classNames(styles.dropdown, className)}>
            <div className={styles['dropdown-select']}>
                <span> {selectedText} </span>
                <i className="fa fa-caret-down icon"></i>
            </div>
            <div className={styles['dropdown-list']}>
                <div className={styles['dropdown-list__item']} onClick={handleListItemClick}>
                    Pepsi
                </div>
                <div className={styles['dropdown-list__item']} onClick={handleListItemClick}>
                    Coca
                </div>
                <div className={styles['dropdown-list__item']} onClick={handleListItemClick}>
                    Monster
                </div>
            </div>
        </div>
    );
};
