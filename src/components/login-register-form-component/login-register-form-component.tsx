import styles from './login-register-form-component.module.scss';
import classNames from 'classnames';

export interface LoginRegisterFormComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-login-register-form-components-and-templates
 */
export const LoginRegisterFormComponent = ({ className }: LoginRegisterFormComponentProps) => {
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        var username = event.target.username.value;
        var password = event.target.password.value;

        var data = await fetch(
            `https://booklibraryapi.up.railway.app/Auth/login?username=${username}&password=${password}`,
            {
                method: 'POST',
            }
        );
        var result = await data.json();
        if (result.message.includes('Halo')) {
            document.cookie = 'Bearer=' + result.token;
            alert('Login Success');
        } else {
            alert('Login Failed: ' + result.message);
        }
    };

    return (
        <div className={classNames(styles.root)}>
            Login
            <br />
            <form action="login" method="get" onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" placeholder="Username" />
                <input type="password" name="password" id="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
