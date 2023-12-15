import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const[registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

const handleRegister = e =>{
    e.preventDefault()
   const email = e.target.email.value
   const password = e.target.password.value
   const accepted  = e.target.terms.checked

//  reset error
   setRegisterError('')
   setSuccess('')

   if(password.length < 6){
    setRegisterError('password should contain at least 6 character')
    return
   }
   else if(!/[A-Z]/.test(password)){
    setRegisterError('your password should have at least one uppercase character')
    return
   }
   else if(!accepted){
    setRegisterError('please accept our terms and conditions')
    return
   }

   createUserWithEmailAndPassword(auth, email, password)
   .then(result =>{
    console.log(result.user)
    setSuccess('user created successfully')
   })
   .catch(error =>{
    console.log(error)
    setRegisterError(error.message)
   })
}

    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">this is Register</h2>
                 <form onSubmit={handleRegister}>
                    <input placeholder="your email" className="mb-4 w-full px-4 py-2" type="email" name="email" id="" required/>
                    <br />
                    <div className="border relative mb-4">
                    <input placeholder="your password" className="   w-full px-4 py-2" 
                    type= {showPassword ? "text" : "password"}
                     name="password"
                      id="" required/>
                    <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                     {
                      showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                    </span>
                    </div>
                   <br />
                   <input type="checkbox" name="terms" id="terms" />
                   <label htmlFor="terms" className="ml-2">Accept our terms and <a href="">conditions</a></label>
                 <br />
                 <input className="btn btn-secondary mb-4 w-full text-white" type="submit" value="Register" />
                 </form>
                 {
                    registerError && <p className="text-red-600">{registerError}</p>
                 }
                 {
                    success && <p className="text-2xl text-blue-700">{success}</p>
                 }
                 <p>Already have an account? please <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;