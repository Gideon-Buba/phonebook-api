const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/contact")
require("dotenv").config();

const port = process.env.PORT || 8000
const uri = process.env.DB_URI
const app = express()
 
async function connectToDb () {
    try {
        await mongoose.connect(uri);
        console.log("connected to db")
    } catch (err) {
        console.log(err)
    }
}

// Middleware to parse JSON request bodies
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world")
})

// get all contacts
app.post("/api/contacts", async(req, res) => {
    try {
        const contacts = await contacts.find();
        res.json(contacts)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// get a single contact
app.get("/api/contacts/:id", async(req, res) => {
    res.json(res.contacts)
})

// create a contact 
app.post("/api/contacts/", async(req, res) => {
    const { name, phone } = req.body;
    try {
        const contact = new Contact({ ...req.body });
        const newContact = await contact.save()

        res.status(201).json(newContact)
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
})








connectToDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on http://localhost:${port}`)
        })
    })
    .catch((err) => {
        console.log("Error starting the server:", err.message)
    })

