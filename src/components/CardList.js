import React, {Fragment} from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    const cardArray = robots.map((element, i) => {
        //key property is used to identify specific Card component
       return <Card key={element.id} id={element.id} name={element.name} email={element.email}/>
    })
    return (
        <Fragment>
        {cardArray}
        </Fragment>       
    )
}
export default CardList