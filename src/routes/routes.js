import { Switch, Route } from "react-router-dom";

// import PrivateRoute from "./PrivateRoutes";

//import view web Home
import Home from '../pages/web/home/Index';

function Routes() {
    return (
        <Switch>

            {/* route "/" */} 
            <Route exact path="/">
                <Home />
            </Route>

        </Switch>
    )
}
export default Routes