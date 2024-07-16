const dal = require('./auth');
let getAuthors = ()=>{
    if(DEBUG) console.log("authors.dal.js")
    return new Promise(function(resolve,reject){
        const sql = "SELECT author_id AS _id, first_name AS fn, last_name AS ln FROM author \
ORDER BY author_id DESC LIMIT 7;"
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
    getAuthors,
}