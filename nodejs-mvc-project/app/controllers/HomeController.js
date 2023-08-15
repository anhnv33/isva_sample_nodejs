const User = require('../models/User');

class HomeController {
  static async index(req, res) {
    console.log('Request Headers:', req.headers);
    let ivUser = req.headers['iv-user'];
    res.render('home', { ivUser });
  }

  static async epac(req, res) {
    console.log('Request Headers:', req.headers);
    let ivCreds = req.headers['iv-creds'];
    res.render('epac', { ivCreds });
  }
}

module.exports = HomeController;