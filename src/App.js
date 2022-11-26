import { Fragment } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { publicRoute, privateRoute } from '~/pages/route';
import { DefaultLayout } from './component/Layout';
function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoute.map((route, index) => {
                    const Layout = route.layout === null ? Fragment : DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
