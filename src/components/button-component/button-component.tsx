import styles from './button-component.module.scss';
import classNames from 'classnames';

export interface ButtonComponentProps {
    className?: string;
    icon?: string;
    text: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-button-components-and-templates
 */
export const ButtonComponent = ({ className, icon, text }: ButtonComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {icon && <img src={icon} alt="" />}
            <span>{text}</span>
        </div>
    );
};
