export default (state = [], action) => {
    switch (action.type) {
        case 'GET_PREVISAO_DO_TEMPO':
            return [...state, action.previsaoDoTempo];
        default:
            return state;
    }
};
