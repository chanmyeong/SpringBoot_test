import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CafeReviewListComponent from "./components/CafeReviewListComponent";
import CafeReviewWriteComponent from "./components/CafeReviewWriteComponent";
import CafeReviewDetailComponent from "./components/CafeReviewDetailComponent";
import CafeRegisterComponent from "./components/CafeRegisterComponent";

const AppRouter = () => {
    return (
        <div>
            <div style = {style} >
                <Switch>
                    <Route path = "/cafe-register" component = {CafeRegisterComponent} />
                    {/*<Route exact path = "/cafe-list" component = {CafeListComponent} />*/}
                    {/*<Route path = "/cafe-info" component = {CafeInfoComponent} />*/}
                    <Route path = "/cafe-review-list" component = {CafeReviewListComponent} />
                    <Route path = "/cafe-review-write" component = {CafeReviewWriteComponent} />
                    <Route path = "/cafe-review-detail" component = {CafeReviewDetailComponent} />

                </Switch>
            </div>
        </div>
    );
}

const style = {

}

export default AppRouter;