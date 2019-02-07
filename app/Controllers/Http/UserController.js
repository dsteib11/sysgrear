'use strict'

class UserController {
  register({ view }) {
    return view.render('account/register');
  }
  login({ view }) {
    return view.render('account/login');
  }
  index({ view }) {
    return view.render('account/index');
  }
  changePassword({ view }) {
    return view.render('account/changePassword');
  }
  orders({ view }) {
    return view.render('account/orders');
  }
}

module.exports = UserController
