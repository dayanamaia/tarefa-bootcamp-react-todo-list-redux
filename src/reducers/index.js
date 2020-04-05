import { combinerReducers } from 'redux;'
import { todos } from './todos';

export const reducers = combinerReducers({
    todoState: todos,
});
