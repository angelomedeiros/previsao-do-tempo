export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_PREVISOES':
            return {
                ...state,
                ...action.previsoes,
            };
        default:
            return state;
    }
};
