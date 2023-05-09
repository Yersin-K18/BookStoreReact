import { Fragment } from 'react';
import classNames from 'classnames';
import styles from './login-register-form-component.module.scss';
import { parseJwt } from '../../utils/jwt';

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
            var temp = parseJwt(result.token);
            localStorage.setItem(
                'Username',
                temp['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
            );
            alert('Login Success');
        } else {
            alert('Login Failed: ' + result.message);
        }
    };

    function isLogin() {
        if (localStorage.getItem('Username') != null) {
            return true;
        }
        return false;
    }

    function logout() {
        localStorage.removeItem('Username');
        document.cookie = '';
        alert('Logout Success');
    }

    return (
        <div className={classNames(styles.root)}>
            {!isLogin() ? (
                <Fragment>
                    Login
                    <br />
                    <form action="login" method="get" onSubmit={handleSubmit}>
                        <input type="text" name="username" id="username" placeholder="Username" />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        <button type="submit">Login</button>
                    </form>
                </Fragment>
            ) : (
                <Fragment>
                    Hello {localStorage.getItem('Username')}
                    <br />
                    <button onClick={logout}>Logout</button>
                </Fragment>
            )}
        </div>
    );
};
