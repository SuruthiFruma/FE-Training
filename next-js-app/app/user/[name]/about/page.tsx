"use client"
import { useEffect, useState , useRef} from "react";
const UserAbout = (query) =>{
	let [userAbout,setUserAbout] = useState(null);
	useEffect(()=>{
		query.searchParams.then(data=>setUserAbout(data))
	},[])

	return userAbout ? (<div className="text-body-12">>{`About of ${userAbout?.firstName }`}</div>) : "Loading...."
	
	}
export default UserAbout;