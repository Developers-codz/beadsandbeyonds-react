import React,{useEffect} from 'react'
import { useAddress } from 'context/address-context';


export const AddressTab = () => {
  const { setAddressModalOpen, addresses,getAddress } = useAddress();
useEffect(()=>{
  getAddress()
},[])
  return (
    <>
  <div className="profile-card profile-Details-card">
  <button
            className="decor-none add-address-btn  shadow-box"
            onClick={() => {
              setAddressModalOpen(true);
            }}
          >
            Add New Address
          </button>
        {
          addresses.map(add => {
            return (
                
                <div className='margin-lg' key={add._id}>
              <div>  {add.firstname} {add.lastname}</div>
              <div>{add.street}</div>
              <div>{add.city}, {add.state} {add.country}, {add.pincode}</div>
              <div>Mobile: {add.phone}</div>
    </div>
                
            )
          })
        }
    
  </div>
    </>
  )
}
