export function CategoriesBadge ({categories, FilterCategory}) {
    return (
        <div className="">
            {categories.map((category) => (
                <span className="inline-flex items-center border-2 border-black hover:bg-violet-700 cursor-pointer rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10 m-2"
                onClick={() => FilterCategory(category)}
                key={category}
                >
                    {category}
                </span>
            ))}
        </div>
    )
}