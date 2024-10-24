import React , {useState , useEffect} from 'react'
import PopupCredit from '../PopupCredit'
import Record from '../Record'



const All = () => {

  
    const getData = () =>{
        let item = localStorage.getItem('list') 
       if (item){ 
        return item = JSON.parse(item)
       
       }else{ 
        return item = []
       }
      }
      
       
      
       
        const [pop, setPop] = useState(0);
        const [accDate , setAccDate] = useState([])      
      
        const [data, setData] = useState(getData);
      
        // const record =[...data];\
        //  let nts = <h1>nothing to show</h1>
        //  let output =  <li>{record}</li>
        //  console.log(data[1].date)
        
        let amount =  data.map((e)=>{
       return  e.cost })  
      
       amount = amount.map(Number)
       
       console.log(`amount:${amount}`) 
        let totalAmount = amount.reduce((acc , cVal)=>acc + cVal , 0)
      
        // let sum = 0;
        //  for (let i = 0; i = amount.length ; i++) { sum += amount[i]; }
      
        //  console.log(sum)
      
        let render = <h1>Nothing to show</h1>
      
        if (data.length > 0 /*&& data[1].product!=null && data[1].date != null && data[1].cost !=null*/) {
          render = data.map((e, i) => {
          
              const deleteHandler = (i) => {
              let copyRender = [...data]
              copyRender = copyRender.splice((i, 1))
              setData(copyRender)
            }
      
            return (
              <li key={i} className='mt-3 '>
                <div className='flex justify-between '>
                 <div><h1 className='text-xl'>{i + 1}</h1></div> 
                 <div className='w-[100px] h-[30px] overflow-hidden hover:w-[300px] hover:h-[300px]  hover:bg-blue-200 '><h1 className='text-xl '>{e.product}</h1></div> 
                  <div><h1 className='text-xl '>{e.date}</h1></div>
                <div> <h1 className='text-xl '>{e.cost}</h1></div> 
                  <button onClick={deleteHandler} className='px-4 py-2 h-10 rounded-lg bg-red-400'>Delete</button>
                </div>
              </li>
            )
      
          })
        }
       
        
      
         
        useEffect(()=>{
          localStorage.setItem('list' , JSON.stringify(data))
      
        } , [data])
      

        // let today = new Date();
        //  console.log(today)
         let today = new Date();
         let dd = today.getDate();
         let mm = (today.getMonth() + 1); //January is 0!
         let yyyy = today.getFullYear();
         
         today = [mm + '/' + dd + '/' + yyyy]
               
         console.log(typeof today)
         
         
         const aaj = data.filter((e)=>e.date === today)
          
         console.log(aaj)

         

  return (
    <>
       
       <Record />
      {/* { record.lenght = 0 ? nts : output } */}
      
      <div id='record' className='w-11/12 h-44 overflow-scroll'>
        {render}
      </div>

      {pop ==1 && <PopupCredit Reason='Addition' setData={setData} data={data} setPop={setPop} />}
      {pop ==2 && <PopupCredit Reason='Substraction' setData={setData} data={data} setPop={setPop} />}

      <div className='place-self-center flex justify-between my-10 '>
        <li><button  onClick={() => { setPop(1) }} className='bg-green-400 text-white rounded-lg py-4 mr-10 px-[48px]'>Credited</button></li>
        <li><button onClick={() => { setPop(2) }} className='bg-red-400 text-white rounded-lg py-4 mx-10 px-[50px]'>Debited</button></li>
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
              <td className='p-5 text-green-400' >{totalAmount}</td>
              <td className='p-5 text-red-400 '>{}</td>
              <td className='p-5  '>row.country</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default All
