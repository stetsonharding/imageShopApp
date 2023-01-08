# Image Shop
---
## *Overview*
This project retrieves all of the photos from the *UnSplash* API and displays them to the user. From this point, the user may explore, like, add to or delete from their basket, search for certain photographs based on search criteria, and get the accurate grand total based on the things in their cart.
# *Technologies*
- ## React.js
 1. Functional Components using Hooks (useState, useEffect, useRef, useContext, customized hook).
 2. React Router for site navigation.
- ## CSS/Flexbox
 1. User friendly and fully responsive to any screen size.
 - ## Unsplash API
 1. Fetch data as well as handle all edge cases and errors.
 ---
 ## Challanges
 
I needed a way to change an image based on if the image was being hovered over. I created my own customized hook to do this. I keep track if a specific image is being hovered over and change the state as needed. True and False values render in different images. I have also tailored this hook to work for mobile. I import this hook into my images component and use when needed.
 
```JavaScript
const useHover = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    isDesktopOrLaptop ? setHovered(false) : setHovered(true);
    const cleanUp = ref.current;

    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      cleanUp.removeEventListener("mouseenter", enter);
      ```
      cleanUp.removeEventListener("mouseleave", leave);
    };
  }, [isDesktopOrLaptop]);

  const enter = () => {
    setHovered(true);
  };

  const leave = () => {
    setHovered(false);
  };

  return [hovered, ref];
};

```
 
---

 ## Functions
 1. Fetching API and handing errors.
  ```JavaScript
  //fetch images from API upon rendering 
    useEffect(() => {
    const url = `https://api.unsplash.com/photos?page=1&per_page=26&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

    async function getPhotos() {
    //Fetch images and store result in state 
      try {
        const photosPromise = await fetch(url);
        const photos = await photosPromise.json();
        setAllPhotos(photos);
        //Display error message to user if there is an error
      } catch(error){
        setError(error.message + " images")
      }
    }
    getPhotos();
  }, []);
  ```
 2. Search for specific image based on users search query.
  ```JavaScript
  const SearchImage = async (e) => {
  //Fetch API with users search query.
    e.preventDefault(); 
    setImageQuery("");
    const queryUrl = `https://api.unsplash.com/search/photos?page=1&per_page=26&query=${imageQuery}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
    const response = await fetch(queryUrl);
    const queryPhotos = await response.json();

    //if search can't be found display message to user else store API results in state.
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
  ```
 ---
 3. Favorite Images.
 
  ```JavaScript
  //Favorite images
const toggleFavorite = (id) => {
    //Loop through allPhotos check id passed in matches id in allPhotos
    const newArr = allPhotos.map((photo) => {
        //toggle liked_by_user property if a match is found and return 
        if (photo.id === id) {
            return {
                ...photo,
                liked_by_user: !photo.liked_by_user,
            };
        }
        return photo;
    });
    //Set new state with updated image properties
    setAllPhotos(newArr);
};
```
---
4. Add/Remove items from cart
```JavaScript
  //add image to cart
  const addToCart = (photo) => {
  //Spread all previous cart items into state and add the photo being passed in.
    setCartItems((prevItems) => [...prevItems, photo]);
  };


  //remove image from cart
  const removeFromCart = (photo) => {
  //Filter out all images that don't have matching id's.
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== photo.id)
    );
  };
  ```
  ---
  ## Run Project Locally
  1. Clone Repo.
  2. Run npm install in terminal to install all dependencies.
  3. Run npm start to run project locally.
  ---
  ## Hosted Project
  https://stetsonharding.github.io/imageShopApp/#/




 


