import React from 'react'
import styles from '../../styles/Home.module.css'

import NewsCard from '../NewsCard/NewsCard'

export const NewsCardLists = ({news}) => {


    return (
        
        <div>
            {news.map((user, i) => {
              
              return <NewsCard
                  key={i}
                  id={news[i].id}
                  title={news[i].title}
                  summary={news[i].summary}
                 
              />
          })}

        </div>
    )
}

export default NewsCardLists;
