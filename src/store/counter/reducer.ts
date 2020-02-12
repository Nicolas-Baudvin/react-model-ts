import { INCREMENT, Actions, stateOptions } from './types';

const initialState: stateOptions = {
    nbr: 0,
}

export default (state = initialState, action: Actions) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                nbr: state.nbr + 1
            }
        }
        default: {
            return state;
        }
    }
}