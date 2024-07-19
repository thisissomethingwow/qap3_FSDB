const router = require('express').Router();
const booksDal = require('../../services/books.dal')

router.get('/',async(req,res)=>{
    if(DEBUG)console.log("we be getting books with api")
    try {
        const books = await booksDal.getBooks()
        res.json(books)
    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})

router.get("/:id",async(req,res)=>{
    if(DEBUG)console.log("we be getting books ids with api")
    try {
        let books = await booksDal.getBooksById(req.params.id);
        if(books.length === 0){
            res.statusCode= 404;
            res.json({message: "Not Found", status: 404});
        }else{
            res.json(books)
        }
    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})




router.post("/",async(req,res)=>{
    if(DEBUG)console.log("we be posting books with api")
    try {
        await booksDal.addBooks(req.body.title, req.body.desc);
        res.statusCode = 201;
        res.json({message: "Created", status: 201});

    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})

router.put("/:id",async(req,res)=>{
    if(DEBUG)console.log("we be putting books with api")
    try {
        await booksDal.putBooks(req.params.id, req.body.title, req.body.desc);
        res.statusCode = 200;
        res.json({message: "DONE", status: 201});

    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})

router.patch("/:id",async(req,res)=>{
    if(DEBUG)console.log("we be patching books with api")
    try {
        await booksDal.patchBooks(req.params.id, req.body.title, req.body.desc);
        res.statusCode = 200;
        res.json({message: "DONE", status: 201});

    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})

router.delete("/:id",async(req,res)=>{
    if(DEBUG)console.log("we be deleting books with api")
    try {
        await booksDal.delBooks(req.params.id);
        res.statusCode = 200;
        res.json({message: "DONE", status: 201});

    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})


module.exports =router;