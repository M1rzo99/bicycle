const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const mongodb = require("mongodb");
const color = require("colors/safe");
// for MongoDB
let db;
const connectionString = process.env.MONGO_URL;
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error connection MongoDB");
    else {
      console.log("DataBase MongoDB Connection successed");
      module.exports = client;
      const app = require("./app");

      const server = http.createServer(app);
      let PORT = process.env.PORT || 3003;
      server.listen(PORT, function () {
        console.log(
          color.blue(
            `The server is running succesfully on port ${PORT},http://localhost:${PORT}`
          )
        );
      });
    }
  }
);
