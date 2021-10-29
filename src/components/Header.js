import React from 'react'

const Header = ({headerText,headerColor,backgroundColor,circleColor,navColor,a,b,c,d}) => {

    const styles = {
        backgroundColor: backgroundColor,
        circleColor: circleColor,
        headerText: headerText,
        headerColor: headerColor
    }
    return (
    <header className="header" style={styles}>
        <nav style={{color:navColor}} className="nav">
            <a>{a}</a>
            <a>{b}</a>
            <a>{c}</a>
            <a>{d}</a>
        </nav>
        <h1 style={{ color: headerColor}} className="heading-one">{headerText}</h1>
        
       <div className="circle">
           <div style ={{backgroundColor:circleColor}} className="circle"></div>
            
       </div>
        
    </header>
    )
}

export default Header