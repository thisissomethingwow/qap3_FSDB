const dal = require('./auth');
let getFilms = ()=>{
    if(DEBUG) console.log("films.dal.js")
    return new Promise(function(resolve,reject){
        const sql = "SELECT film_id AS _id, title, description FROM film \
ORDER BY film_id DESC LIMIT 7;"
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
    getFilms,
}