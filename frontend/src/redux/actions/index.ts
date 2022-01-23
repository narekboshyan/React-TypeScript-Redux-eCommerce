import * as ListProducts from "./productActions";
import * as Cart from "./cartActions";

export default { ...ListProducts, ...Cart };

/*import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
} */
