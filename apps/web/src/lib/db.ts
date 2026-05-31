import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Global declaration to maintain cached connection in development hot-reloads
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const activeCached = cached as MongooseCache;

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (activeCached.conn) {
    return activeCached.conn;
  }

  if (!activeCached.promise) {
    const opts = {
      bufferCommands: false,
    };

    activeCached.promise = mongoose.connect(MONGODB_URI!, opts).then((m) => {
      return m;
    });
  }

  try {
    activeCached.conn = await activeCached.promise;
  } catch (e) {
    activeCached.promise = null;
    throw e;
  }

  return activeCached.conn;
}
