import express from 'express';
import './db.mjs'
import mongoose from 'mongoose';
const Staff = mongoose.model('Staff')
const Order = mongoose.model('Order')
const Item = mongoose.model('Item')
//constants
const app = express();

// set up express static
import url from 'url';
import path from 'path';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

// configure templating to hbs

app.use(cors())

app.use(function(req, res, next){
  console.log(req.method, req.path)
  next()
})
// body parser (req.body)
app.use(express.urlencoded({ extended: false }));


app.get('/', async(req,res) => {
  Object.keys(req.query).map(k => {
    if (req.query[k] === 'All' || req.query[k] === ''){
      delete req.query[k]
    }
  })
  Staff.find(req.query)
  .then(foundStaff => {
    res.render('directory', {staff: foundStaff})
  })
  .catch(err => res.send(err))
})
app.get('/staff/add', async(req,res) => {
  res.render('staff')
})

app.post('/', async(req,res) => {
  console.log(req.body)
  const staff = new Staff(req.body)
  await staff.save()
  console.log(Staff.find())
  res.redirect('staff/add')
})

app.get('/orders', async(req,res) => {
  Object.keys(req.query).map(k => {
    if (req.query[k] === 'All' || req.query[k] === ''){
      delete req.query[k]
    }
  })
  Order.find(req.query)
  .then(foundOrder => {
    res.render('order', {order: foundOrder})
  })
  .catch(err => res.send(err))
})
app.get('/order/add', async(req,res) => {
  res.render('order')
})
app.post('/orders', async(req,res) => {
  console.log(req.body)
  const order = new Order(req.body)
  await order.save()
  console.log(Order.find())
  res.render('order')
})


app.get('/inventory', async(req,res) => {
  Object.keys(req.query).map(k => {
    if (req.query[k] === 'All' || req.query[k] === ''){
      delete req.query[k]
    }
  })
  Item.find(req.query)
  .then(foundItem => {
    res.render('inventory', {item: foundItem})
  })
  .catch(err => res.send(err))
})
app.get('/inventory', async(req, res) => {
  res.render('inventory')
})
app.post('/inventory', async(req,res) => {
  console.log(req.body)
  const item = new Item(req.body)
  await item.save()
  console.log(Item.find())
  res.render('inventory')
})

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
const username = sanitize(req.body.username);
const password = sanitize(req.body.password);

  // TODO: finish implementation

  const foundUser = await User.findOne({username: username});
  try{
    if ((foundUser.username === username) && (bcrypt.compareSync(password, foundUser.password))){
      await startAuthenticatedSession(req, foundUser);
      res.redirect('/');
    }else{
        res.render('login', {message: 'login and password combination could not be found'});
    }
  }catch (err) {
    if(err instanceof mongoose.Error.ValidationError) {
      res.render('login', {message: err.message});
    } else {
      throw err;
    }
  }
});



module.exports = app





 