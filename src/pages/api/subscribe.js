// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient, Db } from 'mongodb'

module.exports = (request, response) => {

const { email } = request.body;

return (
  response.json({ message: `hello ${email}` })
  );

}