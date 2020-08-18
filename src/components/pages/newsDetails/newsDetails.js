import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './newsDetails.css';

const NewsDetails = () => {
    const { location: { state }, go } = useHistory();
    if (!state) {
        // go('/');
        return <div className='wrong__text'>Somthing wrong with this page, Please <Link to='/'>GO HOME</Link></div>;
    }

    const { news: {
        urlToImage,
        title,
        description,
        author,
        date,
        url } } = state;

    return (
        <div className='news__page_container'>
            <div className='news__page__title'>{title}</div>
            <div className='news__page__image flex__container' style={{ backgroundImage: `url(${urlToImage})` }}></div>
            <div className='news__page__footer'>
                <div className='news__page__description'>{description}</div>
                <div className='news__page__flex'>
                    <div className='news__page__author'>Author: <span>{author}</span></div>
                    <div className='news__page__published__date'>Published: <span>{date}</span></div>
                </div>
                <div className='news__page__flex'>
                    <div className='news__page__back news__page__button'>
                        <Link to={{ pathname: '/' }} >Go Back</Link></div>
                    <div className='news__page__redirect news__page__button'>
                        <a href={url} target='_blank' rel='noopener noreferrer' >Read Full Article</a></div>
                </div>
            </div>
        </div>
    )
};


export default NewsDetails;

