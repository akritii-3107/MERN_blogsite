let db;
import { MongoClient } from 'mongodb';

async function connect_to_db(cb)  {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,connect_to_db,
};