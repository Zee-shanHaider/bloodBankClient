import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faHouseUser,faHouseChimney,
         faDroplet,faUserFriends,faBarChart,
         faBarsProgress, faBarsStaggered, faFile,
         faCalendarPlus, faCheck, faPlus,
         faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { url } from '../../configUrl'
 
const Card = (donor) => {
  return (
//     <div>
//       <div className="donorCard">
//     <img src={ props.imgUrl } 
//       alt={ props.alt || 'Image' } />
//     <div className="card-content">
//       <h2>{ props.title }</h2>
//       <p>{ props.content }</p>
//     </div>
//   </div>
//     </div>
        <div className="donorCard">
            <div className="img-blood">
                {/* {console.log('image url', url+'/images/'+donor?.userId?.imageUrl)} */}
                {/* <img src={url+'/images/'+donor?.userId?.imageUrl} alt='user image' className='donorImg'/> */}
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJB6iTrE2bCLOige-kfgyKErjm8RffpNzweUJVnVOTQ&s' alt='user image' className='donorImg'/>
            <div>
                <span className='bloodGroup'>{donor.blood}</span> <FontAwesomeIcon icon={faDroplet} className='clr-red bloodIcon'/>
                <p className='txt-right'>{donor.city}</p>
            </div>
            </div>
            {/* <p className='txt-left mgn-0'>Age: {donor.age}</p> */}
            <p className='txt-left mgn-0'>Age: 2</p>
            {/* <p className='txt-left mgn-0'>Gender: {donor.gender}</p> */}
            <p className='txt-left mgn-0'>Gender: Male</p>
            {/* <p className='txt-left mgn-0'>Address: {donor.address}</p> */}
            <p className='txt-left mgn-0'>Address: Sakhi Sltan Colony</p>
        </div>

    
  )
}

export default Card
