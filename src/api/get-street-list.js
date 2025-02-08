const axios = require("axios");
require("dotenv").config();

exports.handler = async () => {
  let response;

  try {
    response = await axios.get(
      `${process.env.NEXT_PUBLIC_PROD_API_URL}/streets`,
      {
        headers: {
          Authorization: `JWT ${process.env.NEXT_PUBLIC_PROD_JWT_TOKEN}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
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

  // console.log(JSON.stringify({
  //   data: response.data,
  // }))

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
