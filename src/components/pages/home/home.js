import React, { useContext } from 'react';
import { ACTIVE_AUTO_COMPLETE } from '../../../context/actions/newsAction';
import { NewsContext } from '../../../context/Store';
import ConditionalComponent from '../../conditionalComponent/conditionalComponent';
import AutoSuggestion from '../../layout/autoSuggestion/autoSuggestion';
import Header from '../../layout/header/header';
import './home.css';


const Home = ({ children }) => {
    const { state: { isAutoSugesstion, searchNews, loading }, dispatch } = useContext(NewsContext);

    const onExit = _ => {
        dispatch({ type: ACTIVE_AUTO_COMPLETE, isAutoSugesstion: false });
    }
    
    return (
        <div className=''>
            <Header />
            <ConditionalComponent visible={isAutoSugesstion}>
                <ConditionalComponent visible={searchNews}>
                    <AutoSuggestion
                        searchNews={searchNews}
                        loading={loading}
                        onExit={onExit}
                    />
                </ConditionalComponent>
            </ConditionalComponent>
            <main className='layout__content'>
                <div className='demo-content'>
                    {children}
                </div>
            </main>
        </div>
    )
};


export default Home;

