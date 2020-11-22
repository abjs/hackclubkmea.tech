const express = require('express')
const router = express.Router()
const app = express();




// Static Files
router.use(express.static('public'))
router.use('/css', express.static(__dirname + 'public/css'))
router.use('/js', express.static(__dirname + 'public/js'))
router.use('/img', express.static(__dirname + 'public/img'))
router.use('/fonts', express.static(__dirname + 'public/fonts'))
router.get('/', (req, res) => {
  res.redirect('index.html')
})
router.get('/about', (req, res) => {
  res.redirect('about.html')
})
router.get('/user', (req, res) => {
  res.redirect('user.html')
})

router.get('/admin', (req, res) => {
  res.redirect('admin.html')
})
router.get('/contact', (req, res) => {
  res.redirect('contact.html')
})
router.get('/404', (req, res) => {
  res.redirect('404.html')
})
router.get('/sitemap', (req, res) => {
  res.redirect('sitemap.html')
})
router.get('/webinar', (req, res) => {
  res.redirect('https://airtable.com/shrUaS468sVHOA8lE')
})





module.exports = router;
