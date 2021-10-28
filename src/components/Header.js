import React from 'react'

const Header = (props) => {

    const styles = {
        backgroundColor:props.backgroundColor,
        circleColor:props.circleColor,
        textColor:props.headerText
    }
    return (
    <div style={styles}>
        
       <div>
            {props.backgroundColor}
       </div>
        <nav>
            <a>{props.a}</a>
            <a>{props.b}</a>
            <a>{props.c}</a>
            <a>{props.d}</a>
        </nav>
    </div>
    )
}

export default Header