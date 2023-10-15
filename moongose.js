const mongoose= require('mongoose')

const schema= new mongoose.Schema(
    {
        name:String,
        price: Number
    }
)

const productModel=mongoose.model('product', schema)
const mongooseDb=async()=>{

    await mongoose.connect("mongodb://127.0.0.1:27017/practice")
    console.log('connected to mongodb');
    const newData=new productModel ({
        name:'iphone',
        price:2000
    })
    newData.save()
    console.log('product added successfully ');


}
mongooseDb()