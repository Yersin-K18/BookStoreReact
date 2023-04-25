import { createBoard } from '@wixc3/react-board';
import { ButtonComponent } from '../../../components/button-component/button-component';

export default createBoard({
    name: 'ButtonComponent',
    Board: () => <ButtonComponent />,
    environmentProps: {
        canvasHeight: 60,
        canvasWidth: 213,
    },
});
