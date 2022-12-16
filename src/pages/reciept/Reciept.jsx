import {useHistory, useParams} from "react-router-dom";
import {GetMealById} from "../../api";
import {useEffect, useState} from "react";
import {Preloader} from "../../components/Preloader";
import NotFound from "../notfound/NotFound";

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
            if (data.meals) {
                setReciept({
                    ...reciept,
                    idMeal: data.meals[0].idMeal,
                    ...data.meals[0],
                    strMeal: data.meals[0].strMeal,
                    strInstructions: data.meals[0].strInstructions,
                    strMealThumb: data.meals[0].strMealThumb,
                    strTags: data.meals[0].strTags ? data.meals[0].strTags.split(',') : []
                });
            }
        }
        // eslint-disable-next-line
    }, [data])
    return (
        <div>
            {isPending ? <Preloader/> : (
                <div className={reciept.idMeal && "reciept"}>
                    {
                        !reciept.idMeal && <NotFound/>
                    }
                    {
                        reciept.idMeal && <button onClick={goBack} className='btn btn-back brown darken-3'><i
                            className="large material-icons">arrow_back</i></button>
                    }
                    <h2>{reciept.strMeal}</h2>
                    <img className="pic" src={reciept.strMealThumb} alt={reciept.strMeal}/>
                    <p><i>Category {reciept.strCategory}</i></p>
                    <p className="instruction">{reciept.strInstructions}</p>
                    <table className="striped" style={{width: "100%"}}>
                        <thead>
                        <tr>
                            <td>Ingridient</td>
                            <td>Measure</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(reciept).map(key => {
                                if (key.includes('strIngredient') && reciept[key]) {
                                    return <tr key={key}>
                                        <td>{reciept[key]}</td>
                                        <td>{
                                            reciept[`strMeasure${key.slice(13)}`]
                                        }</td>
                                    </tr>
                                }
                                return null
                            })
                        }
                        </tbody>
                    </table>
                    <div>
                        {reciept.strTags.length > 0 ? <div className="tag-title">
                            <p>tags:</p>
                            {
                                reciept.strTags.map(el => {
                                        return <span key={el + "_key"}
                                                     className="new badge btn-tag blue lighten-5">{el}</span>
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