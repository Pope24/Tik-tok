import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
const publicRoute = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: ProfilePage },
    { path: '/upload', component: UploadPage, layout: null },
];
const privateRoute = [];
export { publicRoute, privateRoute };
