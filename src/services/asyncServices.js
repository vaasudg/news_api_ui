import { get, post } from 'axios';

export const getLatestNewsService = async (uri, dispatch, type) => {
    try {
        const { data: { news, error } } = await get(uri);
        if(error){
            dispatch({ type, errorMessage: error, loading: false });
            return;
        }
        dispatch({ type, latestNews: news, loading: false });
    } catch (error) {
        console.error(error);
    }
}


export const searchNews = async (uri, dispatch, type, response) => {
    try {
        const { data: { news, totalResults } } = await post(uri, response);
        dispatch({ type, searchNews: { news, totalResults }, loading: false });
    } catch (error) {
        console.error(error);
    }
}