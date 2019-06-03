"use strict";

const express = require("express");
const cartitems = require("./cart-items");
const router = express.Router();

router.get("/cartitems", (req, res) => {
    res.json(cartitems);
});

router.post("/cartitems", (req, res) => {
    console.log(req.body);
    cartitems.push(req.body);
    res.json(cartitems);
});

router.delete("/cartitems/:id", (req, res) => {
    console.log(req.params.id);
    cartitems.splice(cartitems.findIndex(element => element.id == req.params.id), 1);
    res.json(cartitems);
});

router.put("/cartitems/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    cartitems.splice(cartitems.findIndex(element => element.id == req.params.id), 1, req.body);
    res.json(cartitems);
});




module.exports = router;