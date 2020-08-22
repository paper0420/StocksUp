import React from 'react';
import NewsCard from './NewsCard';

const Newscardlist = ({news}) => {
    return (
        <div>
            {news.map((user, i) => {
              
                return <NewsCard
                    key={i}
                    id={news[i].id}
                    title={news[i].title}
                    summary={news[i].summary}
                />
            })

            }
        </div>
    );
}

export default Newscardlist;
