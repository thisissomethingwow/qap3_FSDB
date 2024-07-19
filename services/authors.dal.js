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
        return
    }
})
}) 
}

const getAuthorsById = (id)=>{
    if(DEBUG) console.log("get by id")
    return new Promise(function(resolve,reject){
        const sql = "SELECT author AS _id, first_name AS fn, last_name AS ln FROM author WHERE author_id = $1";
dal.query(sql,[id],(err,result)=>{
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

const putAuthors = (id,fn,ln)=>{
    if(DEBUG)console.log("we be putting")
    return new Promise((resolve,reject)=>{
        const sql = "UPDATE public.author SET first_name=$2, last_name=$3 WHERE author_id=$1;";
        dal.query(sql,[id,fn,ln],(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result.rows)
            }
    })
})
}

const patchAuthors = (id,fn,ln)=>{
    if(DEBUG)console.log("we be patching")
    return new Promise((resolve,reject)=>{
        const sql = "UPDATE public.author SET first_name=$2, last_name=$3 WHERE author_id=$1;";
        dal.query(sql,[id,fn,ln],(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result.rows)
            }
    })
})
}

const delAuthors = (id)=>{
    if(DEBUG)console.log("we be deling")
    return new Promise((resolve,reject)=>{
        const sql = "DELETE FROM public.author WHERE author_id = $1;";
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
    getAuthors,
    getAuthorsById,
    addAuthors,
    putAuthors,
    patchAuthors,
    delAuthors,
}