const dal = require('./auth');
const getAuthors = ()=>{
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


const addAuthors = (fn,ln)=>{
    if(DEBUG) console.log("we add authors")
    return new Promise(function(resolve,reject){
        const sql = "INSERT INTO public.author(first_name, last_name) \
        VALUES ($1, $2);";
dal.query(sql,[fn,ln],(err,result)=>{
    if(err){
        if(DEBUG)console.log(err)
        reject(err)
    }else{
        resolve(result.rows)
    }
    })
  }) 
}
// const addAuthor = (fn,ln)=>{
//     if(DEBUG)console.log("we adding the author")
//         return new Promise
// }


module.exports={
    getAuthors,
    addAuthors,
}