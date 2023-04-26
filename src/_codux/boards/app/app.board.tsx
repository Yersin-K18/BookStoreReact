import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1141,
        canvasHeight: 1190,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
