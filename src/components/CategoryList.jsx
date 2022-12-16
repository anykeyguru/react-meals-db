import CategoryItemCard from "./CategoryItemCard"
function CategoryList(props) {
    const {catalog} = props;
    return (
        <div className="list">
            <div className="category-title">
                <h1 className="category-title-text">Categoryes of meals</h1>
                <div className="hide-on-small-only">
                    <h5>Chose what You like!</h5>
                </div>
            </div>
            {
                catalog.map(category=>{
                    return <CategoryItemCard key={category.idCategory} {...category}/>
                })
            }
        </div>
    )

}
export default CategoryList;