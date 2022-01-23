import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReducerType } from "../redux/store/index";

export const useTypedSelector: TypedUseSelectorHook<ReducerType> = useSelector;
