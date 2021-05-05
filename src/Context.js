import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [imageQuery, setImageQuery] = useState("");
  const [nullQuery, setNullQuery] = useState("");
  const [error, setError] = useState("")
 

  useEffect(() => {
    //get images from API upon rendering 
    const url = `https://api.unsplash.com/photos?page=1&per_page=26&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

    async function getPhotos() {
      try {
        const photosPromise = await fetch(url);
        const photos = await photosPromise.json();
        setAllPhotos(photos);
      } catch(error){
        setError(error.message + " images")
      }
    }
    getPhotos();
  }, []);

  //search query
  const SearchImage = async (e) => {
    e.preventDefault();
    setImageQuery("");
    const queryUrl = `https://api.unsplash.com/search/photos?page=1&per_page=26&query=${imageQuery}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
    const response = await fetch(queryUrl);
    const queryPhotos = await response.json();

    //if search cant be found display message to user.
    if (queryPhotos.results.length === 0) {
      setNullQuery(
        `There are 0 results for "${imageQuery}", please try again.`
      );
      setAllPhotos([]);
    } else {
      setAllPhotos([...queryPhotos.results]);
      setNullQuery("");
    }
  };

  //toggle favorited on and off
  const toggleFavorite = (id) => {
    const newArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          liked_by_user: !photo.liked_by_user,
        };
      }
      return photo;
    });

    setAllPhotos(newArr);
  };

  //adding images to cart
  const addToCart = (photo) => {
    setCartItems((prevItems) => [...prevItems, photo]);
  };


  //removing image from cart
  const removeFromCart = (photo) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== photo.id)
    );
  };


  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        setCartItems,
        imageQuery,
        setImageQuery,
        SearchImage,
        nullQuery,
        error
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { ContextProvider, Context };
