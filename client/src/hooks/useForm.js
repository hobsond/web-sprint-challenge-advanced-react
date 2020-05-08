// write your custom hook here to control your checkout form
import React,{useState} from 'react'

 const useForm = (initial)=>{
   
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initial);
  const [order,setOrder]=useState({})

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    setOrder(values)
    setValues(initial)
    console.log('success')
  };
  return [showSuccessMessage,values,setValues,handleChanges,handleSubmit,order]
}

export default useForm