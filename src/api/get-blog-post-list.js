const axios = require("axios");
require("dotenv").config();

exports.handler = async () => {
  let response;

  try {
    response = await axios.get(`${import.meta.env.VITE_APP_PROD_API_URL}/blog`, {
      headers: {
        Authorization: `JWT ${import.meta.env.VITE_APP_PROD_JWT_TOKEN}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);

    return {
      statusCode: err.statusCode,
      body: JSON.stringify({
        error: err.message,
      }),
      // function headers need to be specified separately
      // from headers pertaining to rest of code!
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json",
      },
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response.data,
    }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Content-Type": "application/json",
    },
  };
};
