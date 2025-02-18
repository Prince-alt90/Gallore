import {useState, useEffect ,useCallback} from 'react';

function Test1(){
    const[id ,setId] = useState("Loading...");
    const[name,setName] =  useState("Loading...");

    const fetchUser = useCallback(() => {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve ({id:1, name:"John Doe"});
            },2000);
        })
    },[]);
 
    useEffect(()=>{
        fetchUser().then((data)=>{
            setId(data.id);
            setName(data.name);
        });
    });
    return(
        <>
        Id : {id}
        <br />
        Name : {name}
        </>
    )
}
export default Test1;