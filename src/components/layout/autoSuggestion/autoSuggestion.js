import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './autoSuggestion.css';
import ConditionalComponent from '../../conditionalComponent/conditionalComponent';

const AutoSuggestion = ({
    searchNews,
    loading,
    onExit
}) => {
    /**
     * 
     * Color generator code copied from 
     * https://stackoverflow.com/questions/1484506/random-color-generator
     * 
     */
    const generateColor = _ => {
        let hex = '1234567890ABCDEF', i = 0, color = '#';
        for (i; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className='auto__sugesstion__content'>
            <ConditionalComponent visible={loading}>
                <div className='search__loading'>Searching...</div>
            </ConditionalComponent>
            <ul>
                <ConditionalComponent visible={searchNews}>
                    {searchNews?.news?.map((article, indx) => (
                        <li
                            key={indx}
                        >
                            <Link
                                onClick={onExit}
                                to={{
                                    pathname: '/reader',
                                    state: {
                                        news:
                                        {
                                            urlToImage: article.urlToImage,
                                            title: article.title,
                                            description: article.description,
                                            author: article.author,
                                            date: article.date,
                                            url: article.url
                                        }
                                    }
                                }}>
                                <span style={{ backgroundColor: generateColor() }}>{article.title[0]}</span>
                                {article.title}
                            </Link>
                        </li>
                    ))}
                </ConditionalComponent>
            </ul>
            <div className='auto__sugesstion__footer'>
                Total <strong>{searchNews?.totalResults | 0}</strong> item(s)
                <span onClick={onExit}>X</span>
            </div>
        </div>
    )
};


export default AutoSuggestion;

