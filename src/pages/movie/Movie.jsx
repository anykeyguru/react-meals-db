import {useParams, useHistory} from "react-router-dom";
import {useRouteMatch} from "react-router-dom/cjs/react-router-dom";
import {GetFilteredCategory} from "../../api"
export default Movie;

function Movie() {
    const {id} = useParams();
    const {goBack} = useHistory();
    const {data, isPending, error} = GetFilteredCategory('Seafood');
    return<>
        <h1>Movies count is {id}</h1>
        <button className="btn" onClick={goBack}>Back</button>
    </>

}