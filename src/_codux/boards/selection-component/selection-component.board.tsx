import { createBoard } from '@wixc3/react-board';
import { SelectionComponent } from '../../../components/selection-component/selection-component';

export default createBoard({
    name: 'SelectionComponent',
    Board: () => <SelectionComponent />,
    environmentProps: {
        canvasHeight: 61,
    },
});
