import {Link} from "react-router-dom";

function CategoryItemCard(props) {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription, defineCatDesc=Function.prototype} = props
    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory}/>
            </div>
            <div className="card-content">
                <span className="card-title ctitle">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)+'...'}</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn-small purple darken-4" onClick={()=>{defineCatDesc(strCategoryDescription)}}>Watch</Link>
            </div>
        </div>
    )
}

export default CategoryItemCard;