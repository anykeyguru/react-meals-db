import CategoryItemCard from "./CategoryItemCard"
function CategoryList(props) {
    const {catalog} = props;
    return (
        <div className="list">
            {
                catalog.map(category=>{
                    return <CategoryItemCard key={category.idCategory} {...category}/>
                })
            }
        </div>
    )

}
export default CategoryList;