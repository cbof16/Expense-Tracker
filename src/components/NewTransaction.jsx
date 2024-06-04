import React,{ useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const NewTransaction = () => {
    const {addTransaction}=useContext(GlobalContext);
    const [formData, setFormData] = useState(
        {
            text: '',
            amount: 0,
        }
    )
    const validateForm=()=>{
        if(!formData.text || !formData.amount){
            return false;
        }
        return true;
    }

    const handlechange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTransaction({
            id:Math.floor(Math.random()*100000000),
            text:formData.text,
            amount:parseInt(formData.amount)
            //or amount:+formData.amount both are same
        })
        setFormData({
            text:'',
            amount:0
        })
         // to add data to the global state
        // localStorage.setItem('formData',JSON.stringify(formData)) // to store data in local storage
        // console.log("formsubmitted:",formData);
    }


  return (
    <div>
        <h3>Add New Transaction</h3>
        <form className='form-control' onSubmit={handleSubmit}>
            <div>
            <label>Text<br />
            <input type="text" name="text" value={formData.text} placeholder="Text" onChange={handlechange}/>
            </label>
            </div>
            <br />
            <div>
            <label>Amount (negative : expense ,  postive :income)<br />
            <input type="number" name="amount" value={formData.amount}  placeholder="Enter Amount" onChange={handlechange}/>
            </label>
            </div>
            <button className="btn"  type='submit' >Add Transaction</button>
        </form>
        
    </div>
  )
}

export default NewTransaction;