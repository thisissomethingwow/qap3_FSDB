const dal = require('./auth');

const getBooks = ()=>{
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

const addBooks = (title,desc)=>{
    if(DEBUG) console.log("we add books")
    return new Promise(function(resolve,reject){
        const sql = "INSERT INTO public.books(book_title, book_description) \
        VALUES ($1, $2);";
dal.query(sql,[title,desc],(err,result)=>{
    if(err){
        if(DEBUG)console.log(err)
        reject(err)
    }else{
        resolve(result.rows)
        return
    }
    })
  }) 
}


const putBooks = (id,title,desc)=>{
    if(DEBUG)console.log("we be putting with books")
    return new Promise((resolve,reject)=>{
        const sql = "UPDATE public.books SET book_title=$2, book_description=$3 WHERE book_id=$1;";
        dal.query(sql,[id,title,desc],(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result.rows)
            }
    })
})
}

const patchBooks = (id,title,desc)=>{
    if(DEBUG)console.log("we be patching in books")
    return new Promise((resolve,reject)=>{
        const sql = "UPDATE public.books SET book_title=$2, book_description=$3 WHERE book_id=$1;";
        dal.query(sql,[id,title,desc],(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result.rows)
            }
    })
})
}

const delBooks = (id)=>{
    if(DEBUG)console.log("we be deling")
    return new Promise((resolve,reject)=>{
        const sql = "DELETE FROM public.books WHERE book_id = $1;";
        dal.query(sql,[id],(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result.rows)
            }
    })
})
}


module.exports={
    getBooks,
    addBooks,
    putBooks,
    patchBooks,
    delBooks,
}