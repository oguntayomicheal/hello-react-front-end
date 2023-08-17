import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetingSlice";

const Greeting = () => {
    const greeting = useSelector((state) => state.allgreeting.eachgreeting);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchGreeting());
    }, [dispatch]);

    return (
      <p className="message">{greeting}</p>
    );
   
  };
  
  export default Greeting;