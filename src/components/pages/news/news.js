import React, { useContext, useEffect, useState } from 'react';
import { GET_ERROR, GET_LATEST_NEWS } from '../../../context/actions/newsAction';
import { NewsContext } from '../../../context/Store';
import { getLatestNewsService } from '../../../services/asyncServices';
import ConditionalComponent from '../../conditionalComponent/conditionalComponent';
import NewsContainer from '../../newsContainer/newsContainer';
import './news.css';


const News = () => {
    const context = useContext(NewsContext);
    const { state: { loading, latestNews, errorMessage }, dispatch } = context;
    const [pageSize, setPageSize] = useState(38);
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (errorMessage !== undefined) {
            getLatestNewsService(`api?pageSize=${pageSize}&page=${page}`, dispatch, GET_ERROR);
            // return;
        }
        getLatestNewsService(`api?pageSize=${pageSize}&page=${page}`, dispatch, GET_LATEST_NEWS);
    }, [dispatch, pageSize, page, errorMessage]);

    const onLoadeMore = _ => {
        alert('This feature in-progress, it may be available in the future');
        // setPageSize(pageSize + 20);
        // getLatestNewsService(`api?pageSize=${pageSize}&page=${page}`, dispatch, 'GET_LATEST_NEWS');
    }

    return (
        <div className="news__container">
            <ConditionalComponent visible={errorMessage !== undefined}>
                <p className='error__message'>{errorMessage}</p>
            </ConditionalComponent>
            <ConditionalComponent visible={loading}>
                <div className='loading'>Loading</div>
            </ConditionalComponent>
            <ConditionalComponent visible={!loading}>
                <div className='box__container'>
                    {latestNews?.map(
                        (
                            {
                                urlToImage,
                                title,
                                description,
                                author,
                                date,
                                url },
                            indx
                        ) => (
                                <NewsContainer
                                    key={indx}
                                    urlToImage={urlToImage}
                                    title={title}
                                    description={description}
                                    author={author}
                                    date={date}
                                    url={url}
                                />
                            ))}
                </div>
                <div className="load__more" onClick={onLoadeMore}>Load More News</div>
            </ConditionalComponent>
        </div>
    )
};


export default News;

