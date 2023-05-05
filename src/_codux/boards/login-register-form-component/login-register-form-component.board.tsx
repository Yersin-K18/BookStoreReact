import { createBoard } from '@wixc3/react-board';
import { LoginRegisterFormComponent } from '../../../components/login-register-form-component/login-register-form-component';

export default createBoard({
    name: 'LoginRegisterFormComponent',
    Board: () => <LoginRegisterFormComponent />
});
