"use client"
import { useEffect, useState } from "react";
const UserAppointments = (query) =>{
	useEffect(()=>{
		query.searchParams.then(data=>console.log("query data",data))
	},[])

	return (<div onClick={()=>console.log("Final about",query)}>About</div>)
	
	}
export default UserAppointments;
