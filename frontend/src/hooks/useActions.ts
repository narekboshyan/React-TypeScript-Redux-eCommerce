import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionProducts from "../redux/actions";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionProducts, dispatch);
};

/*import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/action-creators/'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
} */
