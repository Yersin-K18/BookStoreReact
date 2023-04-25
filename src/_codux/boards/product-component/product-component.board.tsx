import { createBoard } from '@wixc3/react-board';
import { ProductComponent } from '../../../components/product-component/product-component';

export default createBoard({
    name: 'ProductComponent',
    Board: () => (
        <ProductComponent
            nameProduct="The Time Has Come"
            descProduct={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
            img={'https://picsum.photos/200/300'}
            price={'29.53'}
            priceBefore={'30.25'}
        />
    ),
});
