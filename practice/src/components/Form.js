import {useState} from 'react';
import './Form.css' ;

const Form = (props) => {
    const [enterName, setEnterName] = useState("");
    const [enterAge, setEnterAge] = useState("");

    const nameChangeHandler = (event) =>{
        setEnterName(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setEnterAge(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        let personalData = {
            name: enterName,
            age: enterAge
        }
        // console.log(personalData);
        // send data to the parent using function onSaveData
        props.onSaveData(personalData);

        setEnterName('');
        setEnterAge('');
    }

    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <input type="text" value={enterName} placeholder="Name" onChange={nameChangeHandler} />
            <input type="number" value={enterAge} placeholder="Age" onChange={ageChangeHandler} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form ;