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
        <div className={classNames(styles.root, className)}>
            <select name="genre" id="genre">
                <option value="none" selected disabled hidden>
                    {'Choose a genre'}
                </option>
                <option value="test">test</option>
                <option value="alo">alo</option>
                <option value="blo">blo</option>
                <option value="clo">clo</option>
            </select>
        </div>
    );
};
