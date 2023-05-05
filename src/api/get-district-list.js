const axios = require("axios");
require("dotenv").config();

exports.handler = async (event, context) => {
  
  let response

  try {
    response = await axios.get(`${process.env.REACT_APP_PROD_API_URL}/districts`, {
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept": "application/json", 
            "Content-Type": "application/json"
        }
    })

  } catch (err) {
    return {
      statusCode: err.statusCode,
      body: JSON.stringify({
        error: err.message
      }),
      // function headers need to be specified separately 
      // from rest of code!
      headers: JSON.stringify({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json"
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response.data
    }),
    headers: JSON.stringify({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Content-Type": "application/json"
    }),
  }
}

