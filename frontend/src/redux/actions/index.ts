import * as ListProducts from "./productActions";
import * as Cart from "./cartActions";
import * as Login from "./userActions";

export default { ...ListProducts, ...Cart, ...Login };

/*import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
} */
