import {useContext,createContext,useState} from "react"
import axios from "axios";


const AddressContext = createContext();

const AddressProvider = ({children}) =>{
    const [isAddModalOpen,setAddModalOpen] = useState(false);
    const [addresses,setAddresses] = useState({
        address : [],
    })

    const setNewAddress = async (address) =>{
        const encodedToken = localStorage.getItem("token")
        try{
            const response = await axios.post("/api/user/address/",
            { address },
            { headers: { authorization: encodedToken } })
            console.log(response)

        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <AddressContext.Provider value={{isAddModalOpen,setAddModalOpen,setNewAddress}}>
            {children}
        </AddressContext.Provider>
    )
}

const useAddress = () => useContext(AddressContext);

export {useAddress,AddressProvider}