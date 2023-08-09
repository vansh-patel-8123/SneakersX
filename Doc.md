## Microservices:
1. Authentication Service: User registration, login, and logout.
<<<<<<< HEAD
2. User Service: Manage user profiles and information.
=======
2. User Service: Manage user profiles and information. Multer profile image
>>>>>>> dev
3. Product Service: Manage products (sneakers) available for sale.
4. Cart Service: Manage user's shopping cart.
5. Order Service: Handle orders for products (sneakers).
6. Payment Service: Process payments for orders.
7. Notification Service: Manage and send notifications to users



## Routers:
#### 1. Product
   - GET /api/products - Get list of available products (sneakers).
   - GET /api/products/:productId - Get details of a specific product (sneaker).
   - POST /api/products - Add a new product (sneaker).
   - PUT /api/products/:productId - Update product (sneaker) details.
   - DELETE /api/products/:productId - Delete a product (sneaker).

#### 2. Authentication
   - POST /api/auth/register - User registration.
   - POST /api/auth/login - User login.
   - POST /api/auth/logout - User logout.

#### 3. Cart
   - GET /api/carts - Get the user's cart items.
   - POST /api/carts - Add a product to the user's cart.
   - DELETE /api/carts/:cartItemId - Remove a product from the user's cart.

#### 4. Order
   - GET /api/orders - Get list of orders for the authenticated user.
   - GET /api/orders/:orderId - Get details of a specific order.
   - POST /api/orders - Place a new order.
   - DELETE /api/orders/:orderId - Cancel an order.

#### 5. Payment
   - POST /api/payments - Process payment for an order.

#### 6. User
   - GET /api/users/:userId - Get user details.
   - PUT /api/users/:userId - Update user details.
   - DELETE /api/users/:userId - Delete user account.

#### 7. Notification
   - GET /api/notifications - Get a list of notifications for the authenticated user.
   - GET /api/notifications/:notificationId - Get details of a specific notification.
   - POST /api/notifications - Create and send a new notification to a user.





## Models:

#### 1. Product:
 - name: String (required)
 - description: String
 - price: Number (required)
 - seller: ObjectId (required) - Reference to Seller model


#### 2. User:
 - username: String (required)
 - email: String (required)
 - password: String (required)
 - address: String (required)

#### 3. CartItem:
 - product: ObjectId (required) - Reference to Product model
 - customer: ObjectId (required) - Reference to Customer model
 - quantity: Number (required, default: 1)

#### 4. Order:
 - customer: ObjectId (required) - Reference to Customer model
 - products: ObjectId (required) - Array of references to Product model
 - status: String (enum: ['pending', 'shipped', 'delivered'], default: 'pending')

#### 5. Notification:
 - recipient: ObjectId (required) - Reference to User model
 - content: String (required)
 - createdAt: Date (default: Date.now)




## Pages:





## Branches:
1. Main -> Deployment
2. Dev -> Development
3. FS -> Initial file structure

#### Version 1.0 - Development mode
1. Authentication Service: User registration, login, and logout.
2. User Service: Manage user profiles and information.
3. Product Service: Manage products (sneakers) available for sale.
4. Cart Service: Manage user's shopping cart.
5. Order Service: Handle orders for products (sneakers).
6. Payment Service: Process payments for orders.
7. Notification Service: Manage and send notifications to users.

#### Version 2.0 - Idea stage
1. Seller profile page: list of product
2. AI product recommendation
3. Product searching
4. Wishlist
5. User Reviews and Ratings
6. Shipping and Delivery, Order Confirmation and Emails