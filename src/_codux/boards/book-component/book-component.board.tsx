import { createBoard } from '@wixc3/react-board';
import { BookComponent } from '../../../components/book-component/book-component';

export default createBoard({
    name: 'BookComponent',
    Board: () => <BookComponent img="https://picsum.photos/200/300" />,
});
