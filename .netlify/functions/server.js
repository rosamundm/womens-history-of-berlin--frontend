const PORT = 8000;
const axios = require("axios");
const cors = require("cors");
const express = require("express");
require("dotenv").config()

const app = express()
app.set("json spaces", 2)  // format json output


app.get("/districts", (req, res) => {

    const getDistrictList = {
        method: "GET",
        url: `${process.env.REACT_APP_PROD_API_URL}/districts`,
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept" : "application/json", 
            "Content-Type": "application/json"
        }
    }
    
    axios.request(getDistrictList).then((response) => {
        res.json(response.data)
        }).catch((error) => {
        console.error(error)
    })

});


app.get("/districts/:slug", (req, res) => {

    const getDistrictInstance = {
        method: "GET",
        url: `${process.env.REACT_APP_PROD_API_URL}${req.url}`,
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept" : "application/json", 
            "Content-Type": "application/json"
        }
    }

    axios.request(getDistrictInstance).then((response) => {
        res.json(response.data)
        }).catch((error) => {
        console.error(error)
    })

});

app.get("/districts/:slug/streets", (req, res) => {

    const getDistrictStreets = {
        method: "GET",
        url: `${process.env.REACT_APP_PROD_API_URL}${req.url}`,
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept" : "application/json", 
            "Content-Type": "application/json"
        }
    }

    axios.request(getDistrictStreets).then((response) => {
        res.json(response.data)
        }).catch((error) => {
        console.error(error)
    })

});

app.get("/streets", (req, res) => {

    const getStreetList = {
        method: "GET",
        url: `${process.env.REACT_APP_PROD_API_URL}${req.url}`,
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept" : "application/json", 
            "Content-Type": "application/json"
        }
    }

    axios.request(getStreetList).then((response) => {
        res.json(response.data)
        }).catch((error) => {
        console.error(error)
    })

});

app.get("/streets/:slug", (req, res) => {

    const getStreetInstance = {
        method: "GET",
        url: `${process.env.REACT_APP_PROD_API_URL}${req.url}`,
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept" : "application/json", 
            "Content-Type": "application/json"
        }
    }

    axios.request(getStreetInstance).then((response) => {
        res.json(response.data)
        }).catch((error) => {
        console.error(error)
    })

});

app.get("/textpages", (req, res) => {

    const getTextPageList = {
        method: "GET",
        url: `${process.env.REACT_APP_PROD_API_URL}${req.url}`,
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept" : "application/json", 
            "Content-Type": "application/json"
        }
    }

    axios.request(getTextPageList).then((response) => {
        res.json(response.data)
        }).catch((error) => {
        console.error(error)
    })

});

app.get("/textpages/:slug", (req, res) => {

    const getTextPageInstance = {
        method: "GET",
        url: `${process.env.REACT_APP_PROD_API_URL}${req.url}`,
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept" : "application/json", 
            "Content-Type": "application/json"
        }
    }

    axios.request(getTextPageInstance).then((response) => {
        res.json(response.data)
        }).catch((error) => {
        console.error(error)
    })

});


app.listen(8000, () => console.log(`Server is running on ${PORT}`))


