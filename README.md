# Image Shop
---
## *Overview*
This project fetches the *UnSplash* API - getting and displaying all images to the user. From here the user has the ability to browse, favorite, add/remove items from their cart, search for specific images based on search query, and get the correct grand total based on items in cart.
# *Technologies*
- ## React.js
 1. Functional Components using Hooks (useState, useEffect, useRef, useContext, customized hook).
 2. React Router for site navigation.
- ## CSS/Flexbox
 1. User friendly and fully responsive to any screen size.
 ---
 ## Challanges
 
I needed a way to change an image based on if the image was being hovered over. I created my own customized hook to do this. I keep track if a specific image is being hovered over and change the state as needed. True and False values render in different images. I have also tailored this hook to work for mobile. I import this hook into my images component and use when needed.
 
 ![image](https://user-images.githubusercontent.com/19699378/210453977-4ab36c65-f570-4665-bcbf-009cdb73f044.png)
 
---

 ## Functions
 1. Fetching API and handing errors.
 ![image](https://user-images.githubusercontent.com/19699378/210456287-ce031920-130e-4241-96e6-6b39f7b55a59.png)

 2. Search for specific image based on users search query.
 ![image](https://user-images.githubusercontent.com/19699378/210457132-16526a3a-44bf-488e-822a-d010db3b8914.png)
 
 3. Favorite images
![image](https://user-images.githubusercontent.com/19699378/210457406-c754f252-e65d-43f6-9169-04e50b88c7f7.png)


 


