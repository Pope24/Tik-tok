import { Link, Route, Routes } from 'react-router-dom';
import { publicRoute, privateRoute } from '~/pages/route';
function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoute.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />}></Route>;
                })}
            </Routes>
        </div>
    );
}

export default App;
