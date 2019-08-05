import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Cookie from 'js-cookie';
import {CurrentUserContext} from 'components/App';

export default function (props) {
  const {state: currentUser, dispatch} = useContext(CurrentUserContext);

  function handleLogout() {
    Cookie.remove('token');
    dispatch({type: 'SET_CURRENT_USER', payload: undefined})
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{currentUser && currentUser.email}</p>
      <nav>
        {currentUser ? (
          <>
            <ul>
              <li>Some Header</li>
            </ul>
            <ul>
              <li><button onClick={handleLogout}>logout</button></li>
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registration/">registration</Link>
            </li>
            <li>
              <Link to="/login/">login</Link>
            </li>
            <li>
              <Link to="/dashboard/">dashboard</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}
