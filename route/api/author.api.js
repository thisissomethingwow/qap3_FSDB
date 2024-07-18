const router = require('express').Router();
const authorsDal = require('../../services/authors.dal')

router.get('/',async(req,res)=>{
    if(DEBUG)console.log("we be getting with api")
    try {
        const Authors = await authorsDal.getAuthors();
        res.json(Authors)
    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})

router.get("/:id",async(req,res)=>{
    if(DEBUG)console.log("we be getting ids with api")
        console.log("wow")
    try {
        let Authors = await authorsDal.getAuthorsById(req.params.id);
        if(Authors.length === 0){
            res.statusCode= 404;
            res.json({message: "Not Found", status: 404});
        }else{
            res.json(Authors)
        }
    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})




router.post("/",async(req,res)=>{
    if(DEBUG)console.log("we be posting with api")
    try {
        await authorsDal.addAuthors(req.body.fn, req.body.ln);
        res.statusCode = 201;
        res.json({message: "Created", status: 201});

    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})

router.put("/:id",async(req,res)=>{
    if(DEBUG)console.log("we be putting with api")
    try {
        await authorsDal.putAuthors(req.params.id, req.body.fn, req.body.ln);
        res.statusCode = 200;
        res.json({message: "DONE", status: 201});

    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})

router.patch("/:id",async(req,res)=>{
    if(DEBUG)console.log("we be patching with api")
    try {
        await authorsDal.patchAuthors(req.params.id, req.body.fn, req.body.ln);
        res.statusCode = 200;
        res.json({message: "DONE", status: 201});

    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})

router.delete("/:id",async(req,res)=>{
    if(DEBUG)console.log("we be deleting with api")
    try {
        await authorsDal.delAuthors(req.params.id);
        res.statusCode = 200;
        res.json({message: "DONE", status: 201});

    } catch{
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
})


module.exports =router;