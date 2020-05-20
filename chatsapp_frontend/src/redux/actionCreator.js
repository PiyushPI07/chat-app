import * as actionTypes from './actionTypes';

export const updateReciepient = (reciepientName) => ({
    type: actionTypes.UPDATE_RECPNT,
    payload: {
        reciepientName:reciepientName,
    }
})