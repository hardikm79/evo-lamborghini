import React, { useEffect, useState } from 'react'
import messii from "../../assets/messii.jpg"
const Page1 = () => {
    const changeName = () => {
        setTitle("Goat Image")
      }
      const [title, setTitle] = useState("React App")
      
        useEffect(( ) => {
          setTimeout(()=>{
            changeName()
          },2000)
        }, [])  ;
      
  return (
    <div className = "container">

    <h1 className = "title"> {title} </h1>
    <p className = "description"> this is a picture of greatest of all time.With a record of 850 goals in 1083 appearances. Received eight Ballon d'Or awards and three The Best FIFA Men's Player awards, the most for any player</p>
    <img className='imageClass' src = {messii} alt = "Messsiii" />
    {/* <Button/> */}
    </div> 
  )
}

export default Page1