import {API_URL} from "./config";
import useFetch from "./hooks/useFetch";

const GetMealById = (mealId= 1) => {
    const url = `${API_URL}lookup.php?i=${mealId}`;
    const {data, isPending, error} = useFetch(url);
    return {data, isPending, error};
}

const GetAllCategories = () => {
    const url = `${API_URL}categories.php`;
    const {data, isPending, error} = useFetch(url);
    return {data, isPending, error};
}

const GetFilteredCategory = (category='Seafood') => {
    const url = `${API_URL}filter.php?c=${category}`;
    const {data, isPending, error} = useFetch(url);
    return {data, isPending, error};
}
export {
    GetMealById,
    GetAllCategories,
    GetFilteredCategory,
};