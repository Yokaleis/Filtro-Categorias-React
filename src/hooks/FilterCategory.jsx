import { useState } from 'react';
import { datablog } from '../mockups/data';

const allCategories = [
    'All', ...new Set(datablog.map((article) => article.category))
];

  const [ categories, setCategories ] = useState(allCategories);
  const [ articles, setArticles ] = useState(datablog);

export const FilterCategory = (category) => {
    if (category === 'All'){
        setArticles(datablog);
        return;
    }

    const filteredDataBlog = datablog.filter(
        (article) => article.category === category
    );
    setArticles(filteredDataBlog);
}