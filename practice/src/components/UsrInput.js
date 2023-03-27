import './UsrInput.css' ;
import Card from './Card'
import Form from './Form'

const UsrInput = (props) =>{
    const onSaveDataHandler = (data) => {
        const userData = {
            ...data
        }
        // console.log(userData)
        // sending data to the parent(.app)
        props.onUserData(userData);
    }

    return(
            <Card className = "card_urs_info">
                {/* onsavedata = function will trigger if something happens inside of this function. */}
                {/* in our case when form is saved/submit */}

                {/* when we get data we will handle it = onSaveDataHandler */}
                <Form onSaveData={onSaveDataHandler} />
                {/* use onSaveData function in our Form component to receive data */}
            </Card>
    );
}

export default UsrInput;