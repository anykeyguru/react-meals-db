import {Link} from "react-router-dom";
import {useContext} from "react";
import {MealsContext} from "../context/MealsContext";

function CategoryItemCard(props) {
    const {setDescription} = useContext(MealsContext);
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
                <Link
                    to={`/category/${strCategory}`}
                    className="btn-small purple darken-4"
                    onClick={()=>{setDescription(strCategoryDescription)}}>
                    Watch
                </Link>
            </div>
        </div>
    )
}

export default CategoryItemCard;