import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { CurrentUserContext } from 'components/App';

export default function({ component: Component, ...passedProps }) {
  const { state: currentUser } = useContext(CurrentUserContext);

  return (
    <Route {...passedProps} render={(props) => (
      currentUser ?
        <Redirect to={{ pathname: '/', state: { from: props.location }}} /> : <Component {...props} />
    )} />
  );
}
