import { SHOW_SPINNER } from '../../actions/spinner-action';

const initialState = {
    loading: false
};

export function spinnerReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_SPINNER:
            return { ...state, loading: action.payload.loading };
        default:
            return state;
    }
}
