import { createBoard } from '@wixc3/react-board';
import { ProductComponent } from '../../../components/product-component/product-component';

export default createBoard({
    name: 'ProductComponent',
    Board: () => <ProductComponent nameProduct="The Time Has Come" />,
});
