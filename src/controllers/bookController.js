//const { count } = require("console")
const BookModel= require("../models/bookModel")

const getBookData= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const newBookData= async function (req, res) {
 let allBook = await BookModel.find().select({ BookName: 1, AuthorName: 1, _id: 0 })
        res.send({ msg: allBook })
    
}
const getBookInYear = async function (req, res) {
    let year=req.body.Year;
    let allBook = await BookModel.find({ Year: year });
    res.send({ msg: allBook });
}
  const getParticularBooks = async function (req, res) {
    let allBook = await BookModel.find(req.body)
    res.send({ msg: allBook })
} 
  const getXINRBook = async function (req, res) {
    let allBook = await BookModel.find({ 'prices.indianPrice': { $in: ["₹100", "₹200", "₹500"] } })
    res.send({ msg: allBook })
  }
  const getRandomBooks = async function (req, res) {
    const allBook = await BookModel.find({ $or: [{ StockAvailble: true }, { TotalPages: { $gt: 500 } }] })
    res.send({ msg: allBook })
  }

  module.exports.newBookData = newBookData
  module.exports.getBookData = getBookData
  module.exports.getBookInYear = getBookInYear
  module.exports.getParticularBooks = getParticularBooks
  module.exports.getXINRBook = getXINRBook
  module.exports.getRandomBooks = getRandomBooks