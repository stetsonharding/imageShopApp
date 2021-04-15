import React, { useContext } from "react"
import {Context} from "../../Context"

const QueryInput = () =>{

    const {imageQuery, setImageQuery, SearchImage} = useContext(Context)

    return(
        <form onSubmit={SearchImage} >
            <label>
                Search Photos: 
                <input
                type="text"
                className="query-input"
                placeholder="Seach Images"
                value={imageQuery}
                onChange={(e) => setImageQuery(e.target.value) }
                />
            </label>
            <button type="submit">Search Image</button>
        </form>
    )
}

export default QueryInput