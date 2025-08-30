import Button from './button.tsx'

function Card(props){

    return (
        <div className="card">
            <h1>{props.cardName}</h1>
            <p>{props.description}</p>
            <Button link={props.link} title={props.title}/>
        </div>


    )
}

export default Card;

