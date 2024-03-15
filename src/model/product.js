import mongoose  from "mongoose";


const productShema = new mongoose.Schema({
    name :{
        type: String,
        require: true
    },
    tenXe:{
        type: String,
        require: true
    },
    namSx:{
        type: Number,
        require: true
    },
    gia: {
        type: Number,
        require: true,
    },
    quocGia: {
        type: String,
        require: true
    },
}
// timestamps: true,
,{versionKey:false}
)

const Product = mongoose.model("product", productShema)
export default Product;