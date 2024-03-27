const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB",{useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit"
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const People = mongoose.model("People",peopleSchema);

const people = new People({
  name: "John",
  age: 37
});
//people.save();

// const kiwi = new Fruit({
  //   name: "Kiwi",
  //   rating: 10,
  //   review: "The best fruit"
  // })
  
  // const orange = new Fruit({
    //   name: "Orange",
    //   rating: 4,
    //   review: "Too sour for me"
    // });
    
    // const banana = new Fruit({
      //   name: "Banana",
      //   rating: 3,
      //   reviiew: "Weird texture"
      // });
      
      // Fruit.insertMany([kiwi,orange,banana]);
      // fruit.save();
      
      
      
      Fruit.find().then((data) => {
  // console.log(data);
  mongoose.connection.close();
  data.forEach(function(fruit){
    console.log(fruit.name);
  })
 });


Fruit.updateOne({_id: "652f686f7ad2488d141e1f5f"}, {rating: 4});