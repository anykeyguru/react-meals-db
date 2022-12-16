import {useState} from "react";

export default function Search({cb = Function.prototype}) {
    const [value, setValue] = useState('')
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            console.log(e.key)
            handleSubmit();
        }
    }

    const handleSubmit = () => {
            cb(value);
    }

    return <div className="row">
        <div className="input-field col s12">
            <input type="search"
                   id='search-field'
                   placeholder='search'
                   onKeyDown={handleKey}
                   onChange={(e)=> setValue(e.target.value)}
                   value={value}
            />
            <button
                className='btn btn-small brown lighten-2'
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0
                }}
                onClick={handleSubmit}
            >
                <i className="large material-icons">search</i>
            </button>
        </div>
    </div>
}