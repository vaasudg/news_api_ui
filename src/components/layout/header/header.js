import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ACTIVE_AUTO_COMPLETE, SEARCH_NEWS } from '../../../context/actions/newsAction';
import { NewsContext } from '../../../context/Store';
import { searchNews } from '../../../services/asyncServices';
import './header.css';

const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const context = useContext(NewsContext);
    const { dispatch } = context;

    const onSearchSubmit = e => {
        e.preventDefault();
    };

    const onSearchChange = e => {
        const { value } = e.target;
        setSearchValue(value);
        // dispatch({ type: 'LOADING', loading: true });
        dispatch({ type: ACTIVE_AUTO_COMPLETE, isAutoSugesstion: !!value.length });
        searchNews(`api`, dispatch, SEARCH_NEWS, { q: searchValue, pageSize: 100 });
    }
    const onSearchKeyDown = e => {
        if (e.keyCode === 38 || e.keyCode === 40) {
            alert('This feature in-progress, it may be available in the future');
        }
    }

    return (
        <div className='header'>
            <p className='title margin__10'><Link to='/'>Daily News</Link></p>
            <p className='date margin__10'>{new Date().toDateString()}</p>
            <form onSubmit={onSearchSubmit}>
                <input
                    className='search__box margin__10'
                    type='search'
                    placeholder='Search any news'
                    onChange={onSearchChange}
                    onKeyDown={onSearchKeyDown}
                />
            </form>
        </div>
    )
};


export default Header;

