import React from 'react';
import { Link } from 'react-router-dom';
import './newsContainer.css';

const NewsContainer = ({
    urlToImage,
    title,
    description,
    author,
    date,
    url
}) => {
    return (
        <div className="box">
            <div className='news__image' style={{ backgroundImage: `url(${urlToImage})` }}></div>
            <div className='news__title'>{title}</div>
            <div className='news__description'>{description}</div>
            <div className='news__footer'>
                <div className='news__author'>{author}</div>
                <div className='news__published__date'>{date}</div>
            </div>
            <div className='news__read'>
                <Link
                    to={{
                        pathname: '/reader',
                        state:
                        {
                            news:
                                { urlToImage, title, description, author, date, url }
                        }
                    }} >Read</Link></div>
        </div>
    )
};

export default NewsContainer;