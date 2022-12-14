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

router.get('/new/:id',[],async(req,res)=>{
    try {
        const url = "https://hacker-news.firebaseio.com/v0/item/"+ req.params.id +".json?print=pretty"
        const fetch = await axios.get(url)
        const commentId = fetch.data.kids
        console.log(req.params.id)
        if (commentId!=undefined){
            const comments = []
            
            for(let i=0;i<commentId.length;i++){
                console.log("dadasd",commentId[i] )
                const commentUrl ="https://hacker-news.firebaseio.com/v0/item/" + commentId[i] +".json?print=pretty"
                const fetchComment = await axios.get(commentUrl)
                comments.push(fetchComment.data)
            }
            return res.status(201).json({new:fetch.data, comments:comments, isComments:true})
        }
        return res.status(201).json({new:fetch.data, comments:null,isComments:false})
    } catch (error) {
        console.log("ERROR!", error)
        return res.status(500).json({message:error})
    }
})


router.post('/getComments/',[],async(req,res)=>{
    try {
        const commentsId  = req.body.comments
        console.log(commentsId)
        comments = []
        for (let i = 0; i< commentsId.length;i++){
            const fetch = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentsId[i]}.json?print=pretty`)
            comments.push(fetch.data)


        }

        return res.status(201).json(comments)

    } catch (error) {
        console.log("ERROR!", error)
        return res.status(500).json({message:error})
    }
})
module.exports = router