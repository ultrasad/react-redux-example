export const fetchPending = () => ({
    type: 'FETCH_CAT_PENDING'
});

export const fetchSuccess = (data={}) => ({
    type: 'FETCH_CAT_SUCCESS',
    payload: data
});

export const countClick = (count=0) => ({
    type: 'COUNTER_CLICK',
    payload: count + 1
});