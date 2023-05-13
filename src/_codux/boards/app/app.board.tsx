import { createBoard } from '@wixc3/react-board';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    environmentProps: {
        canvasWidth: 1141,
        canvasHeight: 2270,
        windowWidth: 1238,
        windowHeight: 1520,
    },
});
