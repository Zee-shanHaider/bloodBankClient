import {React,useState} from 'react'
import './signup_style.css'
import {useDispatch, useSelector} from 'react-redux'
import {userSignupAsync} from '../../store/user/userActions'
import {Formik, Form, replace} from 'formik'
import TextField from '../TextField'
import * as Yup from 'yup'
import { Navigate, useNavigate } from 'react-router-dom'
import { signupErrorSelector } from '../../store/user/userSelector'


const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [image,setImage] = useState(null)
    const signupError = useSelector(signupErrorSelector)
    console.log('signup error', signupError)

    const validate = Yup.object({
      email: Yup.string()
        .email('Email is Invalid')
        .required('Required'),
      username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      phoneNo: Yup.string()
        .required('Phone No is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })

  return (
    // <div>
    //     <div className="signupContainer">
    //     <form onSubmit={submitHandler} className='form'>
    //                 <label htmlFor="email" className='txt-left'>Email</label>
    //                 <input type="text" name='email' placeholder='Email' className='form-fields' onChange={changeHandler} value={formValues.email}/>

    //                 <label htmlFor="username" className='txt-left'>Username</label>
    //                 <input type="text" name='username' placeholder='Username' className='form-fields' onChange={changeHandler} value={formValues.username}/>

    //                 <label htmlFor="phoneNo" className='txt-left'>Phone No</label>
    //                 <input type="number" name='phoneNo' placeholder='Phone No' className='form-fields' onChange={changeHandler} value={formValues.phoneNo}/>

    //                 <label htmlFor="image" className='txt-left'>Image</label>
    //                 <input type="file" name='image' placeholder='Image' className='form-fields' onChange={(e)=>setImage(e.target.files[0])}/>

    //                 <label htmlFor="password" className='txt-left'>Password</label>
    //                 <input type="password" name='password' id='password' placeholder='Password' className='form-fields' onChange={changeHandler} value={formValues.password}/>

    //                 <label htmlFor="password" className='txt-left'>Confirm Password</label>
    //                 <input type="password" name='confirmPassword' placeholder='Confirm Password' className='form-fields' onChange={changeHandler} value={formValues.confirmPassword}/>
    //                 <button className='form-btn auth-btn'>Sign up</button>
    //             </form>
    //     </div>
    // </div>

    <Formik
    initialValues={{
      email: '',
      username: '',
      phoneNo: '',
      password: '',
      confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        dispatch(userSignupAsync(values,image))
        // setFormValues(Initial_Values)
        // setImage(null)
        // navigate('/login')
      }}
      >
      
        <>
      <p className='txt-left'> 
          AiOutlineArrowLeft
          </p>
        <div className='form'>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label ='Email' type="email" name='email' id='email' placeholder='Email'/>
            <TextField label="Username"  type="text" name='username' id='username' placeholder='Username' />
            <TextField label='Phone No' type="number" name='phoneNo' id='phoneNo' placeholder='Phone No'/>
            <input type="file" className='form-fields img-input' onChange={(e)=>setImage(e.target.files[0])}/>
            <TextField label="Password" name="password" type="password" id='password'/>
            <TextField label="Confirm Password" name="confirmPassword" type="password" id='confirmPassword'/>
            <button className="btn btn-dark mt-3" type="submit">Register</button>
          </Form>
          <div className="error">
            <p style={{color: 'red'}}>
              {signupError?.response?.data?.msg[0].msg}
            </p>
          </div>
        </div>
    
      </>
    </Formik>


  )
}

export default Signup
