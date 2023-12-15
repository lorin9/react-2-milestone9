import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const[loginError, setLoginError] = useState('')
    const[success, setSuccess] = useState('')
    const emailRef = useRef(null)

    const handleLogin = e =>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
         
        setLoginError('')
        setSuccess('')

        if(password.length < 6){
         console.log('your password should contain 6 or more characters')
         return
        }

        // add validation
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            if(result.user.emailVerified){
              setSuccess('you have logged in successfully')
            }
            else{
              alert('please verify your email address')
            }
            sendEmailVerification(result.user)
            .then(() =>{
              alert('please check your email and verify your account')
            })
        })
        .catch(error =>{
            setLoginError(error.message)
        })
    }
const handleForgetPassword =() =>{
  const email = emailRef.current.value;
  if(!email){
    console.log('send reset email', emailRef.current.value)
    return
  }
  // send validation email
  sendPasswordResetEmail(auth, email)
  .then(() =>{
   alert('please check your email')
  })
  .catch(error =>{
    console.log(error)
  })
}

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef} placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
        loginError && <p className="text-red-600 text-2xl">{loginError}</p>
      }
      {
        success && <p className="text-green-600 text-2xl">{success}</p>
      }
       <p>New to this website? please <Link to="/register">register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;