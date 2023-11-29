export function ArticlesList({articles}) {
    return (
        <>
            <div className="grid grid-cols-1 mb-20 text-center">
                {articles.map((article) => (
                    <>
                        <div className="grid m-auto mb-10 w-full justify-center" >
                            <img src={article.image} alt={article.title} />
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl mb-5">{article.title}</h2>
                            <p className="font-serif text-sm mb-20">{article.description}</p>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}