export default (state={username:'Super99'}, action) => {
    switch(action.type){
        case 'setName':
            state = {
                ...state,
                username: action.username
            }
        break;
        default:
    }

    return state;
}