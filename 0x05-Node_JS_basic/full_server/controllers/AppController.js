class AppController {
    static getHomepage(req, resp) {
      resp.statusCode = 200;
      resp.send("Hello Holberton School!");
    }
  }
  
    module.exports = AppController;
