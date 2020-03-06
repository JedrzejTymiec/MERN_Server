let mongoose = require('mongoose'),
 express = require('express'),
 router = express.Router();

let articleSchema = require('../models/Article');

router.route('/create-article').post((req, res, next) => {
   articleSchema.create(req.body, (error, data) => {
       if(error) {
           return next(error)
       } else {
           console.log(data);
           res.json(data)
       }
   })
});

router.route('/').get((req, res) => {
    articleSchema.find((error, data) => {
        if(error) {
            console.log(error)
            res.json('')
        } else {
            res.json(data)
        }
    })
})

router.route('/edit-article/:id').get((req, res) => {
    articleSchema.findById(req.params.id, (error, data) => {
        if(error) {
            console.log(error)
            res.json('')
        } else {
            res.json(data)
        }
    })
})

router.route('/update-article/:id').put((req, res, next) => {
    articleSchema.findByIdAndUpdate(req.params.id, {$set: req.body},
        (error, data) => {
        if(error) {
            console.log(error)
            return next(error)
        } else {
            res.json(data)
            console.log("Updated!")
        }
    })
})

router.route('/delete-article/:id').delete((req, res, next) => {
    articleSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router;