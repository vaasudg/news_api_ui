import News from "../components/pages/news/news";
import NewsDetails from "../components/pages/newsDetails/newsDetails";

const routes = [
    {
        path: '/',
        component: News,
        title: 'Home'
    },
    {
        path: '/:reader',
        component: NewsDetails,
        title: 'Title'
    }
];

export default routes;