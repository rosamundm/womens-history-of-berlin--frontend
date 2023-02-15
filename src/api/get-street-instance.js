const axios = require("axios");
require("dotenv").config();

exports.handler = async (event, context) => {

  const { slug } = event.queryStringParameters;
  let response

  try {
    response = await axios.get(`${process.env.REACT_APP_PROD_API_URL}/streets/${slug}`, {
        headers: {
            "Authorization": `JWT ${process.env.REACT_APP_PROD_JWT_TOKEN}`,
            "Accept": "application/json", 
            "Content-Type": "application/json"
        }
    })

  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response.data  // access at /.netlify/functions/get-street-instance?slug={slug}
    })
  }
}