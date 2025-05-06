import React from 'react';
import './Stylesheet.css';
import styles from './myStyle.module.css';

const Styles = () => {
    const myStyle = {
        color:'white',
        backgroundColor: 'DodgerBlue',
        border: '5px solid red'
    }

  return (
    <>
        <h2>Styling React using CSS</h2>
        <p>There are many ways to style React with CSS, the three common ways are:-</p>
        <ul className='styleList'>
            <li>Inline Styling</li>
            <li>CSS StyleSheets</li>
            <li>JavaScript Object</li>
        </ul>
        <h2 style={{color: 'red', backgroundColor:'yellow'}}>Hello Style!</h2>
        <p style={myStyle}>Add a little style!</p>
        <p className={styles.bigblue}>Styles through CSS Module file.</p>
    </>
  )
}

export default Styles;