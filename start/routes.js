'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', 'PageController.home')
Route.get('/about', 'PageController.about')

// PRODUCTS
Route.get('/products', 'ProductController.index')
Route.get('/:brand/:subcategory/:slug', 'ProductController.show')
Route.get('/products/new-arrivals', 'ProductController.newArrivals')


// CART
Route.get('/cart/checkout', 'CartController.checkout')


// ACCOUNT
Route.get('/account', 'UserController.index')
Route.get('/account/changePassword', 'UserController.changePassword')
Route.get('/account/orders', 'UserController.orders')
Route.get('/register', 'UserController.register')
Route.get('/login', 'UserController.login')
