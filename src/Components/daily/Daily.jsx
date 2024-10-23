import React from 'react'
import Record from '../Record'
 

const Daily = () => {

  return (
    
    <div>
        <div><h1></h1></div>
          <Record />
      {/* { record.lenght = 0 ? nts : output } */}
      
      <div id='record' className='w-11/12 h-44 overflow-scroll'>
        {/* {render} */} output
      </div>

     

      <div className='place-self-center'>
        <table className='border-2'>
          <thead>
            <tr>
              <th className='p-5 text-green-400'>Cash In</th>
              <th className='p-5 text-red-400 '>Cash Out</th>
              <th className='p-5'>Balance</th>
            </tr>
          </thead>
          <tbody>
          
            <tr key='index'>
              <td className='p-5 text-green-400' >totalAmount</td>
              <td className='p-5 text-red-400 '>data ek prkar ka</td>
              <td className='p-5  '>balence</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Daily
