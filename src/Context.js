import React, { useState, useEffect } from "react"

const Context = React.createContext()

const ContextProvider =({ children }) =>{
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
   
  


    //get data from API upon rendering save data to state
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    useEffect(() => {
        async function getPhotos() {
            const photosPromise = await fetch(url)
            const photos = await photosPromise.json()
            setAllPhotos(photos)
        }
        getPhotos()
    }, [])



    //toggle favorited on and off
    const toggleFavorite = (id) => {
        const newArr = allPhotos.map(photo => {
            if(photo.id === id){
                return{
                    ...photo,
                    isfavorite: !photo.isfavorite
                }
            }
            return photo
        })
        setAllPhotos(newArr)
    }



    //adding images to cart 
    const addToCart = (photo) => {
    setCartItems(prevItems => [...prevItems, photo])
    }



    //removing image from cart
    const removeFromCart = (photo) =>{
    setCartItems(prevItems => prevItems.filter(item => item.id !== photo.id))
    }


    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart , cartItems, removeFromCart, setCartItems}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }