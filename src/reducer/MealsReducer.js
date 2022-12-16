export function MealsReducer(state, {type, payload}) {
    switch (type) {
        case "SET_CATEGORY_DESC":
            return {
                ...state,
                category_description: payload.descr,
            };
        default:
            return state;
    }
};