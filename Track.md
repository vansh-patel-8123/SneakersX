Tech Stack:
1. Frontend: ReactJS, Redux State, MUI
2. Backend: NodeJS, ExpressJS, Microservices, REST API

-> Right now we are only making Backend

Microservices:
1. Auth
2. Cart
3. order
4. Payment
5. Sneakers
6. User

Models:
1. Auth -> Auth Model
2. Cart -> Cart Model
3. Order -> Order Model
4. Sneakers -> Sneaker Model
5. User -> User Model

Routes:
1. Auth
   1. POST '/auth/register' :  Register User
   2. POST '/auth/login' : Login User
2. User
   1. GET '/userprofile/:id' : Get user profile
   2. PUT '/userprofile/:id' : Update user profile
   3. POST '/userprofile/:id' : Create user Profile
3. Sneakers
   1. GET '/sneakers' : Get list of all product
   2. GET '/sneaker/:id' : Get Sprcific of all product
   3. POST '/sneakers' : create new product
   4. PUT '/sneakers/:id' : Update details of a specific sneaker by ID.
   5. DELETE '/sneakers/:id' : Delete a specific sneaker by ID.
4. Order
   1. GET '/orders' : Get list of orders
   2. GET '/orders/:id' : Get specific order by ID
   3. POST '/orders' : Create Order
   4. PUT '/orders/:id' : Update order details
   5. DELETE '/orders/:id' : Delete specific by ID
5. Cart
   1. GET '/cart/:userID' : Get the user's cart items.
   2. POST '/cart/:userId/:sneakerId' : Add a sneaker to the user's cart.
   3. PUT '/cart/:userId/:sneakerId' : Update quantity of a sneaker in the user's cart.
   4. DELETE '/cart/:userId/:sneakerId' : Remove a sneaker from the user's cart.


Specific Librires, Framework Uses:
1. Auth -> JWT, BcryptJS, 
2. Cart -> 
3. order ->
4. Payment
5. Sneakers -> for photo add use (Multer), 
6. User
