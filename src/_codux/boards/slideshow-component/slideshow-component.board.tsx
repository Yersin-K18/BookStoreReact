import { createBoard } from '@wixc3/react-board';
import { SlideshowComponent } from '../../../components/slideshow-component/slideshow-component';

export default createBoard({
    name: 'SlideshowComponent',
    Board: () => <SlideshowComponent />,
    environmentProps: {
        windowHeight: 741,
    },
});
