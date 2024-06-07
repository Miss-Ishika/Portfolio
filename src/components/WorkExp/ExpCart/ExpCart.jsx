import React from 'react'
import "./ExpCart.css"

const ExpCart = ({details}) => {

  const visit = (url) => {
    window.location.href = url;
  }

  return (
    <div className='work-exp-card'>

      <div className='head'>
      <h6>{details.title}</h6>
      <div className='work-dur'>{details.date}</div>
      </div>

      <div className='role'>{details.Role}</div>

      <ul>
        {details.Respon.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className='linked'>
          <a href="www.google.com"><img src='../../../assets/images/certi.png' alt='certi' /></a>

          <div className='butt'>
            <button className='source-code' onClick={visit(details.code)}>
                <span class="material-symbols-outlined">
                  code
                  </span>
                  <span className='text'>Code </span>
            </button>
            <button className='visit' onClick={visit(details.visit)}> 
              <span className='text'>visit site </span>
              <span class="material-symbols-outlined">
              open_in_new
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default ExpCart