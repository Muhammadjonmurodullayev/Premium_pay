import React from 'react'
import Premium_pay_img from "./Img/Premium_pay.svg"
import Media from "./Img/vector.svg"
import Star from "./Img/star.svg"
import Appp from "./Img/App.svg"
import "./stayle.css"
const App = () => {
  return (
    <>
    <div className='pre'>
        <div className='premium_svg'>
          <img src={Premium_pay_img} alt="" />
        </div>
<div className='parent_chaild'>
    <p className='premium_text'>Главная</p>
    <p className='premium_text'>Функции</p>
    <p className='premium_text'>Вопросы</p>
    <p className='premium_text'>Команда</p>
    <p className='premium_text'>Контакт</p>
    <button className='Скачать'>Скачать</button>
</div>  
    </div>
      <div className='Parent_chaild_id2'>
        <div className="Parent_chaild_id">
          <div className="div1">
            <p className='parentchaild_img'>Cайт находится в<br/> стадии разработки</p>
          </div>
        </div>
        <div className='iphone'>
<img className='Appp' src={Appp} alt="" />
        </div>
   </div>

    
    </>
  )
}
export default App;