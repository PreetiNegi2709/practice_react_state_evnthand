import './Card.css' ;

const Card = (props) => {
    const classes = 'card ' + props.className ;
    return(
        <div className= {classes}>
            {/* <h2>inside card</h2> */}
            {props.children}
        </div>
    );
}

export default Card ;