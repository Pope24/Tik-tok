import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
const publicRoute = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
];
const privateRoute = [];
export { publicRoute, privateRoute };
