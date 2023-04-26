import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1599,
        windowWidth: 1302,
        windowHeight: 1064,
        canvasHeight: 1116,
    },
});
