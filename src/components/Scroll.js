import React from 'react'

const Scroll = (props) => {
    // create a scrollable by passing through props and using props.children
    return(
        //add style using javascript {{}}
        //make CardList Component scrollable
        <div style={{overflowY: 'scroll', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll