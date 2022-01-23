import { Action, createStore, applyMiddleware } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers";
import { initialState } from "./initialStoreState";


const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// *  ReducerType i am going to use with useSelector when getting data from the store, with this we can make our own hook which will include useSelector
export type ReducerType = ReturnType<typeof rootReducer>;

export type BaseThunkType<
    A extends Action = Action,
    R = Promise<void>
> = ThunkAction<R, ReducerType, unknown, A>;
