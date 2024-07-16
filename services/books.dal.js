const dal = require('./auth');
let getBooks = ()=>{
    if(DEBUG) console.log("books.dal.js")
    return new Promise(function(resolve,reject){
        const sql = "SELECT book_id AS _id, book_title AS title, book_description AS desc FROM books \
ORDER BY book_id DESC LIMIT 7;"
dal.query(sql,[],(err,result)=>{
    if(err){
        if(DEBUG)console.log(err)
        reject(err)
    }else{
        resolve(result.rows)
    }
})
}) 
}
module.exports={
    getBooks,
}