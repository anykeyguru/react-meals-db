import {useHistory} from "react-router-dom";


function NotFound() {
    const {goBack} = useHistory()
    return <>
        <h1>Not Found</h1>
        <button className="btn" onClick={goBack}>Back</button>
    </>
}

export default NotFound;