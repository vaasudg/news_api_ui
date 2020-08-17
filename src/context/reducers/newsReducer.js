import {
    LOADING,
    GET_LATEST_NEWS,
    ACTIVE_AUTO_COMPLETE,
    SEARCH_NEWS,
    GET_ERROR
} from '../actions/newsAction';

export default function newsReducer(state, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.loading }
        case ACTIVE_AUTO_COMPLETE:
            return { ...state, isAutoSugesstion: action.isAutoSugesstion }
        case GET_ERROR:
            return { ...state, errorMessage: action.errorMessage }
        case GET_LATEST_NEWS:
            return { ...state, loading: action.loading, latestNews: action.latestNews }
        case SEARCH_NEWS:
            return { ...state, loading: action.loading, searchNews: action.searchNews }
        default:
            return state
    }
}