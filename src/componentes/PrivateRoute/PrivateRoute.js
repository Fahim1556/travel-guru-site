import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({childern, ...rest}) => {
    const [user , setUser] =useContext(userContext);
    return (
        <div>
        <Route
          {...rest}
          render={({ location }) =>
         user.email? (
             childern
            ) : (
             <Redirect
               to={{
                 pathname: "/login",
                 state: { from:location }
               }}
             />

          )
        }
      />
        </div>
    );
};

export default PrivateRoute;
