import {createStore, combineReducers} from 'redux';
import {Reciepient} from './reducers/reciepient';
import {Message} from './reducers/message';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reciepient : Reciepient,
            message : Message
        })
    );
    return store;
}