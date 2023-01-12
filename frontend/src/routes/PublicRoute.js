// import React, { useEffect } from "react";
// // import { Redirect, Route } from "react-router-dom";
// // import { useEffect, useHistory } from "react-router-dom";
// import { getToken } from "../service/AuthService";
// import { Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// // import { withRouter } from "react-router-dom";

// const PublicRoute = ({ component: Component, ...rest }) => {
//     console.log(React.version);
//     // return (
//     //     <Route
//     //         {...rest}
//     //         render={props => {
//     //             return !getToken() ? <Component {...props} /> 
//     //             : <Redirect to={{ pathname: '/premium-content'}} />
//     //         }}
//     //     />
//     // )
//     // const history = useHistory();
//     // useEffect(() => {
//     //     if (!getToken()) {
//     //         history.push('/premium-content');
//     //     }
//     // }, [getToken(), history]);

//     // return <Route {...rest} component={Component} />
//     // if (!getToken()) {
//     //     return rest.history.push('/premium-content');
//     // }

//     // return <Route {...rest} component={Component} />
//     const history = useHistory();
//     if (!getToken()) {
//         history.push('/premium-content');
//     }

//     return <Route {...rest} component={Component} />
// }

// export default PublicRoute;