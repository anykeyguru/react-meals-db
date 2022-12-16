import {useHistory} from "react-router-dom";
import {useContext} from "react";
import {MealsContext} from "../../context/MealsContext";


function NotFound() {
    const {resetDesription} = useContext(MealsContext);
    const {goBack} = useHistory();

    return <div className="notfound">
        <div className="row">
            <h1>404</h1>
            <h3>Not found</h3>
        </div>
        <button className="btn purple darken-4" onClick={goBack}>Back</button>
    </div>
}

export default NotFound;