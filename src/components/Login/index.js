import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import'./index.css'


const Login = ()=>{
    const navigate = useNavigate();
    
    const [email,setEmail] = useState('');
    const [emailError, setEmailError]=useState('')
    
    const [password,setPassword] = useState('')
    const [passwordError,setPasswordError] = useState('')

    const [sucess,setSucess] = useState('')

    // const handleChange =({currenctTarget: input}) =>{
    //     setlog({...log,[input.name]:input.value})
    //     console.log(log)
    // }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        setEmailError('');
        setSucess('');

    }
    const hanlepasswordChange =(e)=>{
        setPassword(e.target.value);
        setPasswordError('');
        setSucess('')
    }


    const handleSubmitForm = (e)=>{
        e.preventDefault();

        // empty password
        if(email!=='' ){
            if(/\S+@\S+\.\S+/.test(email)){
                if(email == 'saikumarkillana569@gmail.com'){
                    if(password == 12345 ){
                        navigate('/employ')
                        
                    }
                    else{
                        setPasswordError('please give  valid password')
                    }

                }else{
                    setEmailError('please give  valid email')
                }
            }
            else{
                setEmailError('please give  valid email')
            }
        }else{
            setEmailError('please give email')
        }

        if(password!==''){
            
        }else{
            setPasswordError('please give password')
        }

    }


  
    

    return(<div className="bg-container">

        <div className="bg-login">
            <h1>login</h1>
                       <form className="form_container" onSubmit={handleSubmitForm}>
                       <input type="text" placeholder="email"  value={email} onChange={handleEmailChange}  ></input>
                       {emailError&&<div>{emailError}</div>}
                       <br></br>
                       <input type="password" placeholder="password" value={password}  onChange={hanlepasswordChange}
                        ></input>
                        {passwordError&&<div>{passwordError}</div>}
                      
                       <button type="submit" className='green-button' onChange={hanlepasswordChange}>
							Sign In
						</button>
                       </form>


        </div>

    </div>)
}
export default Login