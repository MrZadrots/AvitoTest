const {Router} = require("express")
const axios = require('axios')


const router = Router()

router.get('/news',[],async (req,res)=>{
    try {
        console.log("ASSADAD")
        const news = await axios("https://hacker-news.firebaseio.com/v0/newstories.json")
        
        const result = []
        for(let i=0; i<10;i++){
            const req = "https://hacker-news.firebaseio.com/v0/item/"+news.data[i]+".json?print=pretty"
            const newAdd = await axios(req)
            result.push(newAdd.data)
        }
        console.log(result)
        return res.status(201).json(result)
    } catch (error) {
        console.log("ERROR!", error)
        return res.status(500).json({message: error})
    }
})

router.get('/comments',[], async(req,res)=>{
    try {
        
        
    } catch (error) {
        console.log("ERROR!", error)
        return res.status(500).json({message:error})
    }
})


module.exports = router