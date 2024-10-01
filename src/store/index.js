import { createStore ,combineReducers, applyMiddleware} from "redux"
import { cashReducer } from "./cashReduser"
import { customerReducer } from "./customerReduser"

const rootReduser = combineReducers({
    cash:cashReducer,
    customers:customerReducer,
})

export const store = createStore(rootReduser)