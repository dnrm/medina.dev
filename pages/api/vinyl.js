const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  try {
    let { db } = await connectToDatabase();

    let posts = await db.collection("vinyl").find({}).toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (e) {
    return res.json({
      message: new Error(e),
      success: false,
    });
  }
}
