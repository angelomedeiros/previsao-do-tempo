export default (state = { isFetching: false }, action = { previsoes: {} }) => {
    switch (action.type) {
        case 'GET_PREVISOES_SUCCESS':
            return {
                ...state,
                ...action.previsoes,
            };
        case 'GET_PREVISOES_LOADING':
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
};
