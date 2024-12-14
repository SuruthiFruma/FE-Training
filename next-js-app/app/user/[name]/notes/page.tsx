"use client"
import { useEffect, useState , useRef} from "react";
const UserNotes = (query) =>{
	let [userNotes,setUserNotes] = useState(null);
	useEffect(()=>{
		query.searchParams.then(data=>setUserNotes(data))
	},[])

	return userNotes ? (<div className="text-body-12">{`Notes of ${userNotes?.firstName }`}</div>) : "Loading...."
	
	}
export default UserNotes;

