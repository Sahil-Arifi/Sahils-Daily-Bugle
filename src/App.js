//  useEffect is a function that activates onces our code starts
//  It takes two parameters
//1. call back function
//2. dependency array
import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards'

const alanKey = 'b1b1854391fb3adff90f7ad4225367702e956eca572e1d8b807a3e2338fdd0dc/stage';

export const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticles] = useState(-1);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
              if(command === 'newHeadlines') {
                  setNewsArticles(articles)
              } else if (command === 'highlight') {
                  setActiveArticles((prevActiveArticle) => prevActiveArticle + 1)
              }
            }
        })
    }, [])

    return (
        <div>
            <h1 style={{
                fontFamily: 'sans-serif',
                display: 'flex',
                justifyContent: 'center',
                padding: '10px 0 0 0'
            }}>Sahil's Daily Bugle</h1>
            <NewsCards key="articles" articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}