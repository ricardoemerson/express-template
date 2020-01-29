class HomeController {
  index(req, res) {
    return res.json({ hello: 'world' });
  }
}

export default new HomeController();
