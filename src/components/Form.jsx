import { useState } from "react";


const Form = (props) =>{
    const [formState, setFormState] = useState({searchTerm: ""});

    const handleChange = (event) => {
        //make a new copy of the current state - notes don't use spread operator bc there is only one object, but if there were multiple, you would want to use the spread operator to make sure you are capturing all of them
        const newState = {...formState}
        //update the copy
        newState[event.target.name] = event.target.value
        //set the state
        setFormState(newState)



    };

    const handleSubmit = (event) => {
        //prevent refresh
        event.preventDefault()
        //pass searchTerm to getMovie
        props.getMovie(formState.searchTerm)
        //reset form to show blank
        setFormState(
            {searchTerm: ""}
        )
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="searchTerm" 
            onChange={handleChange}
            value={formState.searchTerm}/>
            <input type="submit" value="Sumbit" />
        </form>
    </div>
    
    
    
    
    )


}

export default Form