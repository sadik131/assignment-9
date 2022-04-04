import { useEffect, useState } from "react"

const CustomHook = () =>{
    const [data ,setData] = useState([]);
    useEffect(() =>{
        fetch('fackData.json')
        .then(res =>res.json())
        .then(data => setData(data))
    },[]);
    return [data ,setData]; 
};

export default CustomHook;
