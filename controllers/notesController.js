//  jshint esversion:8

const express = require('express');
const router = express.Router();
const cat = require("../models/notes.js");
const {
    notes
} = require('joi');


router.get("/api/notes", (req, res) => {
    notes.selectAll()
        .then(results => res.json(results))
        .catch(err => res.json(err))
});

router.post("api/notes", (req, res) => {
    notes.create(["text", "title"], [req.body.title, req.body.text])
        .then(result => res.json({
            id: result.insertId
        }))
        .catch(err => res.json(err))
});
router.delete("/notes/:id", (req, res) => {
    notes.removeNote(req.params.id)
        .then(() => res.json({
            ok: true
        }))
        .catch((err) => res.status(500).json(err));
});