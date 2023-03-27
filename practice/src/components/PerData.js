// import './PerData.css' ;

import Card from "./Card";

const PerData = (props) =>{
    console.log(props);
    return (
        <Card>
            <h1>{props.dt.name}</h1>
            <h2>{props.dt.age}</h2>
        </Card>
    )
}

export default PerData ;