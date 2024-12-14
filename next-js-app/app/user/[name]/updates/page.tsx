"use client"
import { useEffect, useState , useRef} from "react";
const UserUpdates = (query) =>{
	let [userUpdates,setUserUpdates] = useState(null);
	useEffect(()=>{
		query.searchParams.then(data=>setUserUpdates(data))
	},[])

	return userUpdates ? (<div className="text-body-12">{`Updates of ${userUpdates?.firstName }`}</div>) : "Loading...."
	
	}
export default UserUpdates;
