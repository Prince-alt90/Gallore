import {useState } from 'react';

function UserDefinedFunction1(){
    const [name, setName] = useState("Hello");
    const [age, setAge] = useState(20);
    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <br />
            Name is : {name}
            <br />

            <input type="text" value={age} onChange={(e) =>setAge(e.target.value)} />
            <br />
            Age is : {age}
        </div>
    );

}
export default UserDefinedFunction1;