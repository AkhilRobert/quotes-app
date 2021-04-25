import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AuthorQuotes from "./pages/AuthorQuotes";

function App() {
    return (
        <>
            <Switch>
                <Route path={"/:author"}>
                    <AuthorQuotes />
                </Route>

                <Route path={"/"}>
                    <Home />
                </Route>
            </Switch>
        </>
    );
}

export default App;
