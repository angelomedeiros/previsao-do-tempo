export const getPrevisoesRequest = cidade => {
    return {
        type: 'GET_PREVISOES_REQUEST',
        cidade,
    };
};

export const getPrevisoesSuccess = previsoes => {
    return {
        type: 'GET_PREVISOES_SUCCESS',
        previsoes,
    };
};

export const getPrevisoesLoading = isFetching => {
    return {
        type: 'GET_PREVISOES_LOADING',
        isFetching,
    };
};
