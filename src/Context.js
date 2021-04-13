import React, { useState, useEffect } from "react"

const Context = React.createContext()

const ContextProvider =({ children }) =>{
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
   
  


    //get data from API upon rendering save data to state
    const url = `https://api.unsplash.com/photos?page=5&per_page=30&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    
    // "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    useEffect(() => {

        // console.log(url)
        async function getPhotos() {
            const photosPromise = await fetch(url)
            const photos = await photosPromise.json()
            setAllPhotos(photos)
       
        }
        getPhotos()
     
    }, [url])

   console.log(allPhotos)

    //toggle favorited on and off
    const toggleFavorite = (id) => {
        const newArr = allPhotos.map(photo => {
            if(photo.id === id){
                return{
                    ...photo,
                    liked_by_user: !photo.liked_by_user
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