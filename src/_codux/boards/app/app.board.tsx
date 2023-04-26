import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1438,
        windowWidth: 1386,
        windowHeight: 1064,
        canvasHeight: 1156,
    },
});
