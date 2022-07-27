const {MongoClient} = require('mongodb')
const d = new MongoClient(process.env['Mongo'], { useNewUrlParser: true, useUnifiedTopology: true })

d.connect(async err => {
  console.log('Mongo Connected!')
  if (err != null) {console.log(err); return;}
})
class data {
  constructor (name, collection) {
    this.db = d.db(name)
    this.collection = collection
  }
  async get (uid) {
    try {
      const data = await this.db.collection(this.collection).find({uid: uid}).toArray()
      return data[0].data
    } catch (err) {
      return undefined
    }
  }
  async set(uid, data) {
    try {
      await this.db.collection(this.collection).insertOne({uid: uid, data: data})
      return true
    } catch (err) {
      return err
    }
  }
  async save(uid, data) {
    this.db.collection(this.collection).updateOne({uid: uid}, { $set: {data: data}}).then(() => {
      return true
    })
  }
  async delete(uid) {
    await this.db.collection(this.collection).deleteOne({uid: uid})
  }
}
const db = new data('<database name>', '<collection name>')

const data = {
  uid: 'a string that will stick with the user forever for the data to be saved and found'
}