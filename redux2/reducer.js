const initialState = {
    songData: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAY_SONG':
            return {
                ...state,
                songData: action.payload,
            };
        case 'GET_TOKEN':
            return {
                ...state,
                getToken: action.payload,
            };
        case 'NO_ACTION':
            return {
                state,
            };

        default:
            return state;
    }
};

export default rootReducer;
