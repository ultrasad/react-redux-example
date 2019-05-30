import React from 'react';
import { connect } from 'react-redux';

const Header = ({ username, paramx, dispatch }) => (
    <div className="container">

    <div className="columns column is-12">
      {username} - {paramx}
    </div>

    <div className="columns column is-12">
        <input
        type='text'
        name="username"
        className='form-control form-control-sm'
        required
        onChange={(e) => dispatch(changeUserName((e.target.value)))} />
    </div>

    </div>
);

const changeUserName = (username = 'Guest') => ({
    type: 'setName',
    username: username //=> username: username
});

const mapStateToProps = function(state) {
    return {
      //username: state.user.username || 'Hanajung'
      username: state.user.username || 'Hanajung',
      paramx: 'OMG !!'
    }
};

/*
const mapDispatchToProps = (dispatch) => {
    return {
        changeName:(name) => {
            dispatch({
                type:"setName",
                username: name
            });
        }
    }
}
*/

const HeaderWithConnect = connect(mapStateToProps)(Header);
export default HeaderWithConnect;