import {Link} from "react-router-dom";

function MealItemCard(props) {
    const {strMeal, strMealThumb, idMeal} = props
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title ctitle">{strMeal}</span>

            </div>
            <div className="card-action">
                <Link to={`/receipt/${idMeal}`} className="btn-small purple darken-4">Read</Link>
            </div>
        </div>
    )
}

export default MealItemCard;