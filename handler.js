'use strict';

module.exports.main = async (event) => {

  console.log({
    host : process.env.MY_ENV,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'oi galera!',
        input: process.env.MY_ENV,
      },
      null,
      2
    ),
  };

};
