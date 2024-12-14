"use client"
import { useEffect, useState , useRef} from "react";
const UserAppointments = (query) =>{
	let [userAppointments,setUserAppointments] = useState(null);
	useEffect(()=>{
		query.searchParams.then(data=>setUserAppointments(data))
	},[])

	return userAppointments ? (<div className="text-body-12">>{`Appointments of ${userAppointments?.firstName }`}</div>) : "Loading...."
	
	}
export default UserAppointments;
