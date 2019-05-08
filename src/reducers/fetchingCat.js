const initialState = {
    isFetching: false,
    cat: {},
    count: 0
}
  
const fetchingCat = (state=initialState, { type, payload }) => {
    switch(type) {
      case 'FETCH_CAT_PENDING':
        return {
          ...state,
          isFetching: true
        }
      case 'FETCH_CAT_SUCCESS':
        return {
          ...state,
          isFetching: false,
          cat: payload
        }
      case 'COUNTER_CLICK':
        return {
          ...state,
          isFetching: false,
          count: payload
        }
      default:
        return state
    }
}

export default fetchingCat;