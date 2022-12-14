import {useHistory, useParams} from "react-router-dom";
import {GetMealById} from "../../api";
import {useEffect, useState} from "react";
import {Preloader} from "../../components/Preloader";

function Reciept() {
    const {rid} = useParams();
    const {goBack} = useHistory();
    const {data, isPending, error} = GetMealById(rid);
    const [reciept, setReciept] = useState({
        idMeal: "",
        strMeal: "",
        strInstructions: "",
        strMealThumb: "",
        strTags: []
    });

    useEffect(() => {
        if (data) {
            setReciept({
                ...reciept,
                idMeal: data.meals[0].idMeal,
                strMeal: data.meals[0].strMeal,
                strInstructions: data.meals[0].strInstructions,
                strMealThumb: data.meals[0].strMealThumb,
                strTags: data.meals[0].strTags ? data.meals[0].strTags.split(',') : []
            });
        }
        // eslint-disable-next-line
    }, [data])
    return (
        <div >
            {isPending ? <Preloader/> : (
                <div className="reciept">
                    <button onClick={goBack} className='btn btn-back purple darken-4'><i className="large material-icons">arrow_back</i>
                    </button>
                    <h2>{reciept.strMeal}</h2>
                    <p>{reciept.strTags}</p>
                    <img src={reciept.strMealThumb} alt={reciept.strMeal} width="300px"/>
                    <p>{reciept.strInstructions}</p>
                    <div>
                        {reciept.strTags.length > 0 ? <div className="tag-title">
                            <p>tags:</p>
                            {
                                reciept.strTags.map(el => {
                                        return <span className="new badge btn-tag blue lighten-5">{el}</span>
                                    }
                                )
                            }
                        </div> : null}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Reciept;