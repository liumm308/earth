/**
 *@author  liumm308
 *@data  2020/07/09 11:31
 *@mail xidian_liu@163.com
 */

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React,{Suspense} from 'react';
import ErrorBoundary from '@/components/ErrorBoundary/index.jsx';
import path from 'path';
import { Spin } from 'antd';
import routerArr from './routerArr'

const RouteItem = props => {
    const { redirect, path: routePath, component, key, ...others } = props;
    if (redirect) {
        return <Redirect key={key} from={routePath} to={redirect} {...others} />;
    }
    return <Route key={key} component={component} path={routePath} {...others}/>;
};

const loading = (
    <div style={{ paddingTop: 180, textAlign: 'center' }}>
        <Spin />
    </div>
);

export default () => {
    return (
        <ErrorBoundary>
            <Router>
                <Switch>
                    {routerArr.map((route, id) => {
                        const { component: RouteComponent, children, ...others } = route;
                        if (!children) {
                            return RouteItem({
                                key: id,
                                ...route,
                            });
                        } else {
                            return (
                                <Route
                                    key={id}
                                    {...others}
                                    component={props => {
                                        return (
                                            <RouteComponent key={id} {...props}>
                                                <Suspense fallback={loading}>
                                                    <Switch>
                                                        {children.map((routeChild, idx) => {
                                                            const { path: childPath ,component} = routeChild;
                                                            return RouteItem({
                                                                key: `${id}-${idx}`,
                                                                ...routeChild,
                                                                path: childPath && path.join(route.path, childPath),
                                                                component,
                                                            });
                                                        })}
                                                    </Switch>
                                                </Suspense>
                                            </RouteComponent>
                                        );
                                    }}
                                />
                            );
                        }
                    })}
                </Switch>
            </Router>
        </ErrorBoundary>
    );
};
