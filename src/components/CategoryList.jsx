import CategoryItemCard from "./CategoryItemCard"
function CategoryList(props) {
    const {catalog, defineCatDesc=Function.prototype} = props;
    return (
        <div className="list">
            {
                catalog.map(category=>{
                    return <CategoryItemCard key={category.idCategory} {...category} defineCatDesc={defineCatDesc}/>
                })
            }
        </div>
    )

}
export default CategoryList;