import { useState } from 'react'
import { CategoriesBadge } from './components/Categories'
import { ArticlesList } from './components/ArticleList'
import { datablog } from '../../mockups/data';
import { Menu } from '../../components/menu/Menu'
import { Footer } from '../../components/footer/Footer'


export function Blog() {
    const allCategories = [
        'All', ...new Set(datablog.map((article) => article.category))
    ];
    
      const [ categories, setCategories ] = useState(allCategories);
      const [ articles, setArticles ] = useState(datablog);
    
      const FilterCategory = (category) => {
        if (category === 'All'){
            setArticles(datablog);
            return;
        }
    
        const filteredDataBlog = datablog.filter(
            (article) => article.category === category
        );
        setArticles(filteredDataBlog);
    }

    return(
        <>
        <Menu/>
        <div className="grid w-4/5 m-auto">
        <h1 className="text-7xl mb-20 font-bold">Hola, bienvenido</h1>
        <div className="mb-5">
          <CategoriesBadge categories={categories} FilterCategory={FilterCategory}/>
        </div>
        <ArticlesList articles={articles}/>
        </div> 
      <Footer/>
        </>
    )
}