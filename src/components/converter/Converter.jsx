import React, { useState } from 'react'
import './Converter.scss';

export  const  Converter = (props) =>{ 
  var USDConvert;
  var EURConvert; 

   if ( props.valutes!=='')  {
    USDConvert = props.valutes.USD.Value; 
    EURConvert = props.valutes.EUR.Value; 
 
    
  }
  else {
    USDConvert ='Сервер не ответил'; 
    EURConvert= 'Сервер не ответил';  
  }


  const [toValute, changeToValute]  = useState('RUB');

   const [fromValute, changeFromValute]  = useState('USD');
   const [toValue, changeToValue]  = useState(0);  
    const [fromValue, changeFromValue]  = useState(0); 
      
    const ConverteTorFnc = (toVal, fromVal, toValue, fromValue) => { 
      switch (toVal) {
        case 'RUB':
          switch (fromVal) {
            case 'USD': 
              console.log(toValue);
              changeFromValue((toValue/USDConvert).toFixed(2));
              break;
            case 'RUB':  
              changeFromValue(toValue);
              break;
            case 'EUR': 
              console.log(toValue);
              changeFromValue((toValue/EURConvert).toFixed(2));
              break;
            default:
              break;
          }
          break; // Добавьте break здесь
        case 'USD':
          switch (fromVal) {
            case 'RUB': 
              console.log(toValue);
              changeFromValue(USDConvert*toValue);
              break;
            case 'USD':  
              changeFromValue(toValue);
              break;
            case 'EUR':
              var valueConvert =   USDConvert/EURConvert;  
              var finalValue = toValue*valueConvert;

              changeFromValue(finalValue.toFixed(2));
              break;
            default:
              break;
          }
          break; // Добавьте break здесь
        default:
          break;
      }
      
    
      
   }

  return ( 
    <div>  
      
      Актуальный курс валют:  <br /> <br />

      USD: {USDConvert} <br />
      EUR:  {EURConvert}
        <div className="converterblock"> 
            <select name="" id="" onChange={(evt)=> {
              changeToValute(evt.target.value); 
              ConverteTorFnc(toValute, fromValute, toValue, fromValue); 

            }}>
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
            <input type="text" className='toconvert'  value={toValue} onChange={(evt)=>{
              changeToValue(evt.target.value); 
              ConverteTorFnc(toValute, fromValute, evt.target.value, fromValue); 
            }}/> 


            <img src="images/lefttoright.jpg" alt="" className='arrow' />
               <select name="" id="" onChange={(evt)=> {
                changeFromValute(evt.target.value);
                ConverteTorFnc(toValute,evt.target.value, toValue, fromValue); 
                   
               }}  > 
                <option value="USD">USD</option> 
                <option value="RUB">RUB</option> 
                <option value="EUR">EUR</option>
            </select>
            <input type="text" className='toconvert' value={fromValue}  onChange={(evt)=>
             {
                       changeFromValue(evt.target.value); 
                       ConverteTorFnc(toValute, fromValute);
             
             }

            }/>
        </div>
    </div>
  )
}
