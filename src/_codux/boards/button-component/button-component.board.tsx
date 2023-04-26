import { createBoard } from '@wixc3/react-board';
import { ButtonComponent } from '../../../components/button-component/button-component';

export default createBoard({
    name: 'ButtonComponent',
    Board: () => <ButtonComponent text="Add to backet" icon={'/public/assets/logo.svg'} />,
    environmentProps: {
        canvasHeight: 44,
        canvasWidth: 185,
    },
});
