// import React, { useEffect } from "react";
// // import { Redirect, Route } from "react-router-dom";
// // import { useEffect, useHistory } from "react-router-dom";
// import { getToken } from "../service/AuthService";
// import { Route } from "react-router-dom";
// // import { useHistory } from "react-router-dom";
// import { withRouter } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     // return (
//     //     <Route
//     //         {...rest}
//     //         render={props => {
//     //             return getToken() ? <Component {...props} /> 
//     //             : <Redirect to={{pathname: '/login'}} />
//     //         }}
//     //     />
//     // )
//     // const history = useHistory();
//     // useEffect(() => {
//     //     if (getToken()) {
//     //         history.push('/login');
//     //     }
//     // }, [getToken(), history]);

//     // return <Route {...rest} component={Component} />
//     if (getToken()) {
//         return rest.history.push('/login');
//     }

//     return <Route {...rest} component={Component} />
// }

// export default withRouter(PrivateRoute);