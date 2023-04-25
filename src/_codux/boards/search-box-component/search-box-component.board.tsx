import { createBoard } from '@wixc3/react-board';
import { SearchBoxComponent } from '../../../components/search-box-component/search-box-component';

export default createBoard({
    name: 'SearchBoxComponent',
    Board: () => <SearchBoxComponent />,
    environmentProps: {
        canvasWidth: 307,
        canvasHeight: 53,
    },
});
