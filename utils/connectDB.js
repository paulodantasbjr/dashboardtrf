import mongoose from 'mongoose'

export const connectDB = () => {
  //verifica se existe instancia do mongoose
  if (mongoose.connections[0].readyState) {
    console.log('Already connected.')
    return
  }
  //cria uma instancia do mongoose
  mongoose.connect(
    process.env.MONGODB_URL,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    //callback ( erro , overload )
    (err) => {
      if (err) throw err
      console.log('Connected to mongodb.')
    }
  )
}
