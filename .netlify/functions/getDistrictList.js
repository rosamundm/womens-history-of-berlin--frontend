const axios = require("axios");
const cors = require("cors");
const express = require("express");
const { json } = require("react-router-dom");
require("dotenv").config()

const app = express()
app.set("json spaces", 2)  // format json output

exports.handler = async (event, context) => {
    const slug = event.queryStringParameters.slug  // not needed for this particular fetch
    const targetURL = `${process.env.REACT_APP_PROD_API_URL}/districts`

    try {
        const response = axios.get(targetURL);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

