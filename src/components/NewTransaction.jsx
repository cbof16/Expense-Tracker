import React,{ useState } from 'react'


const NewTransaction = () => {
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
        if(!validateForm()){
            alert("Please Enter all the fields")
            return;
        }
        e.preventDefault()
        localStorage.setItem('formData',JSON.stringify(formData))
        console.log("formsubmitted:",formData);
        setFormData({text:'',amount:0})
    }


  return (
    <div>
        <h3>Add New Transaction</h3>
        <form className='form-control'>
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
        </form>
        <button className="btn" onClick={handleSubmit}>Add Transaction</button>
        
    </div>
  )
}

export default NewTransaction;