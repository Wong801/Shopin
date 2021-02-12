const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const items = await loadPostsCollection();
    res.send(await items.find({}).toArray());
})

// Add Post
router.post('/', async (req, res) => {
    const items = await loadPostsCollection();
    await items.insertOne({
        title: req.body.title,
        price: req.body.price,
        createdAt: new Date()
    });
    res.status(201).send();
})

// Delete Post
router.delete('/:id', async (req, res) => {
    const items = await loadPostsCollection();
    await items.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadPostsCollection() {
    const portfolio = await mongodb.MongoClient.connect
    ('mongodb+srv://shopAdmin:adminShop@shopin-api.cdusa.mongodb.net/shop_item?retryWrites=true&w=majority', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })

    return portfolio.db('shop_item').collection('items');
}


module.exports = router;