export default (state = {score: 0}, action) => {
    switch (action.type) {
      case 'INCREMENT':
        //return state + action.score
        return state = {
            score: state.score + action.score
        }
      case 'DECREMENT':
        //return state - action.score
        return state = {
            score: state.score - action.score
        }
      default:
        return state
    }
}

/*
export default (state = {score: 0}, {type, score}) => {
    switch (type) {
      case 'INCREMENT':
        //return state + action.score
        return state = {
            score: state.score + score
        }
      case 'DECREMENT':
        //return state - action.score
        return state = {
            score: state.score - score
        }
      default:
        return state
    }
}
*/