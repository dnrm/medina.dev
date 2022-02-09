import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGODB;
const DB = "vinyl";

if (!MONGO_URI) {
  throw new Error(
    "Define environment variable MONGODB with connection string."
  );
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  let client = new MongoClient(MONGO_URI, opts);
  await client.connect();
  let db = client.db(DB);

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
