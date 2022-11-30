import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import jwt_decode from 'jwt-decode'

//own imports 
import HomeScreen from '../screens/homeScreen'
import RequestScreen from '../screens/requestScreen'
import DonorScreen from '../screens/donorsScreen'
import SignupScreen from '../screens/signupScreen'
import LoginScreen from '../screens/loginScreen'
import PrivateRoutes from './Private_Routes'
import PublicRoutes from './Public_Routes'


const Navigation = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch()
  // const [loading, setloading] = useState(false)

  useEffect(()=>{
//     if(token){
//       var data = '';
//       var config = {
//         method: 'get',
//         url: 'https://todo-isoft.herokuapp.com/api/reload',
//         headers: { 
//           'Authorization': token,
//         },
//         data : data
//       };
//       axios(config)
//       .then(function (response) {
//         setloading(true)
//         let user = response.data.user;
//         const image = response.data.imageUrl;
//         user = {...user, imageUrl: image}
//         dispatch(userLoginSuccess(user, token))
//         setloading(false)
//         dispatch(isUserLoggedIn())
// })
// .catch(function (error) {
//   console.log(error);
// });
// }
// else{
//   dispatch(Logout())
// }
    setInterval(()=>{
      if(token){
        var decoded = jwt_decode(token.toString());
        const exp = decoded.exp;
        if (exp * 1000 < Date.now()) {
          // dispatch(Logout())
          localStorage.clear()
          return clearInterval()
        }
    }
  }, 1000)

  },[])
  return (
    <div className='App'>
        <Router>
          <Routes>
              <Route exec path='/' element={<HomeScreen/>}/>
            {/* Private Routes */}
            <Route element={<PrivateRoutes/>}>
              <Route exec path='/requests' element={<RequestScreen/>}/>
              <Route exec path='/donors' element={<DonorScreen/>}/>
            </Route>

            {/* Public Routes */}
            <Route element={<PublicRoutes/>}>
              <Route exec path='/login' element={<LoginScreen/>}/>
              <Route exec path='/signup' element={<SignupScreen/>}/>
            </Route>

          </Routes>
        </Router>
      
    </div>
  
      
    
  )
}

export default Navigation
