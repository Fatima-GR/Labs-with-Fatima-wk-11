import React from 'react'
import Header from './components/Header'


 const App = () => {
  return (
    <div className="header">
      <Header 
      headerText ='Get ready for adventure!'
      headerColor = 'white'
      backgroundColor='#151414'
      circleColor ='#DD8723'
      navColor='#FFF5D1'
      a='about'
      b='trips'
      c='pricing'
      d='contact'
      />
    </div>
  )
}
 export default App