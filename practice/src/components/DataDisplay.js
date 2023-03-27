import Card from './Card';
import './DataDisplay.css';
import PerData from './PerData';


const DataDisplay = (props) =>{
    console.log(props.data);
    return(
        <Card>
            {
                // ev=array ke elements ko point krega
            props.data.map((ev,keys)=>{
                return (
                    <PerData key={keys} dt={ev}/>
                )
            })
            }
        </Card>

    )
}

export default DataDisplay;