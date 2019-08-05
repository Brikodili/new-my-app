import React, { useReducer, useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
// import { CookiesProvider, useCookies } from 'react-cookie';
import currentUserReducer from 'components/App/current-user-reducer';
import Routes from 'components/Routes';
import Cookie from 'js-cookie';

import { api } from 'api';

export const CurrentUserContext = React.createContext(undefined);
const currentUserInitialState = undefined;

function App() {
  const [state, dispatch] = useReducer(currentUserReducer, currentUserInitialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = Cookie.get('token');

    if (token) {
      setLoading(true);
      api.get(`/get-user`).then((resp) => {
        dispatch({type: 'SET_CURRENT_USER', payload: resp.data.user });
        setLoading(false)
      })
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{dispatch, state}}>
      {loading ? 'Loading...' : <Routes />}
    </CurrentUserContext.Provider>
  );
}

export default App;
