const express = require('express')
const router = express.Router()
const Category = require('../models/category')
    //get category
router.get('/', async(req, res) => {
        try {
            const categories = await Category.find()
            res.status(200).send(categories);
        } catch (err) {
            res.status(400).send(err);
        }
    })
    //end

//create category
router.post('/', async(req, res) => {
        const category = new Category({
            name: req.body.name,
            color: req.body.color,
            description: req.body.description,
            active: req.body.active
        })
        try {
            const cat = await category.save()
            res.status(201).send(cat);
        } catch (err) {
            res.status(400).send(err);
        }
    })
    //end
    //get single category
router.get('/:id', async(req, res) => {
        try {
            const category = await Category.findById(req.params.id)
            res.status(200).send(category);
        } catch (err) {
            res.status(400).send(err);
        }
    })
    //end
    //updated caegory
router.patch('/:id', async(req, res) => {
        try {
            const category = await Category.findById(req.params.id)
            category.name = req.body.name,
                category.color = req.body.color,
                category.description = req.body.description,
                category.active = req.body.active
            const cat = await category.save()
            res.status(200).send(cat);
        } catch (err) {
            res.status(400).send(err);
        }
    })
    //end
    //category detete
router.delete('/:id', async(req, res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id)
            if (!req.params.id) {
                return res.status(400).send();
            }
            res.send(category);
        } catch (err) {
            res.status(400).send(err);
        }
    })
    //end

module.exports = router