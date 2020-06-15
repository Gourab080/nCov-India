import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Helpline from "./components/helplines";
import State from "./components/state";
import "./styles/styles.css";
import "./App.scss";
import ScrollToTop from "./utils/scroll-top";
import { Helmet } from "react-helmet";
import Analytics from "react-router-ga";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";

function App() {
    const pages = [
        {
            pageLink: '/',
            view: Home,
            displayName: 'Home',
            showInNavbar: true,
        },
        {
            pageLink: '/helplines',
            view: Helpline,
            displayName: 'Helplines',
            showInNavbar: true,
        },
        {
            pageLink: '/state/:stateCode',
            view: State,
            displayName: 'State',
            showInNavbar: false,
        },
    ];

    

    return (
        <div className="App">
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
            </Helmet>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <Analytics id="UA-161766535-2">
                    <Route
                        render={({location}) => (
                            <div className="Routing">
                                <Navbar pages={pages} />
                                <Switch location={location}>
                                    {pages.map((page, index) => {
                                        return (
                                            <Route
                                                exact
                                                path={page.pageLink}
                                                render={({match}) => (
                                                    <page.view key={match.params.stateCode || index} />
                                                )}
                                                key={index}
                                            />
                                        );
                                    })}
                                    <Redirect to="/" />
                                </Switch>
                            </div>
                        )}
                    />
                </Analytics>
            </BrowserRouter>
        </div>
    );
}

export default App;
