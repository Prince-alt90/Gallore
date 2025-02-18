import { createContext ,useState ,useEffect} from 'react';
export const UserContext = createContext();
function FetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: 'John Doe', id: 25});
        }, 10000);
    });
}
export function UserProvider({children}){
    const [user,setUser] = useState({id:"loading..." , name:"loading..."});
    useEffect(() => {
        FetchUser().then((data) => setUser(data));
    }, []);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
   
}