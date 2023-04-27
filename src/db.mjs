import mongoose from "mongoose";
import slug from 'mongoose-slug-updater'
mongoose.plugin(slug)


//my schema goes here
const StaffSchema = new mongoose.Schema({

  Team: String,
  Age: Number, 
  Name: String, 

})
mongoose.model('Staff', StaffSchema);

const OrderSchema = new mongoose.Schema({

  Name: String,
  Address: String, 
  Item: String, 

})
mongoose.model('Order', OrderSchema);

const ItemSchema = new mongoose.Schema({

  Name: String,
  Color: String, 
  Size: String, 

})
mongoose.model('Item', ItemSchema);




mongoose.connect('mongodb://localhost/project');