const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
//const cron = require("node-cron")
const app = express();
//const sqlite3 = require('sqlite3');
const port = 3000;
var enabled = true

function sendDM(req, res) {
  if (enabled == true) {

    const data = req.body.data[0] + "|||" + req.body.data[1] + "|||" + functionTime() + "\n";
    fs.appendFile("data.txt", data, (err) => {
      if (err) throw err;
      //showNotification("test", "null")
      console.log("Data saved to file.");
    });
    //console.log("Data:", req.body.data);
    res.send("Data received and saved.");
  }
}


function sendLogin(req, res) {
  console.log("ok")
  const data = req.body.data
  var passes = data.split("|||")
  var username = passes[0]
  var password = passes[1]
  var username1 = 0
  var password1 = 0
  var id1 = 0

  var signinsuccess = false
    fs.readFile("Users.txt", (err, data) => {
    if (err) throw err;
    var lines = data.toString().split('\n')
    for (let i = 0; i < lines.length; i++) {
      let user = lines[i].split("|||")
      if (user[0] == username && user[1] == password) {
        signinsuccess = "true"
        username1 = user[0]
        password1 = user[1]
        id1 = user[2]
      }
    }
                const package = [signinsuccess, username, password, id1]
        console.log('user signed in, ' + package[0])
    res.send(package)

  });
}


function showNotification(userName, text) {
  //  if(document.visibilityState === "visible") {
  //      return;
  //  }
  let title = "The Jungle";
  let icon = 'https://appstickers-cdn.appadvice.com/1368694128/826583485/116b598fb62c3e8b71c396cc2898705a-4.png';
  let body = "New Message";

  let notification = new Notification(title, { body, icon });

  notification.onclick = () => {
    notification.close();
    window.parent.focus();
  }

}

function showNotification(userName, text) {
  //  if(document.visibilityState === "visible") {
  //      return;
  //  }
  let title = "The Jungle";
  let icon = 'https://appstickers-cdn.appadvice.com/1368694128/826583485/116b598fb62c3e8b71c396cc2898705a-4.png';
  let body = "New Message";

  let notification = new Notification(title, { body, icon });

  notification.onclick = () => {
    notification.close();
    window.parent.focus();
  }

}


function functionTime() {
  var today = new Date();
  var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
}

function openConn() {
  open("https://www.google.com/maps/place/Niggs+Creek/@36.4835021,-84.5443122,15z/data=!3m1!4b1!4m6!3m5!1s0x885da0aa6395a5f1:0x5a76d96c6584461e!8m2!3d36.482134!4d-84.5305387!16s%2Fg%2F11bw7qqv7w")
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/data", (req, res) => {
  fs.readFile("data.txt", (err, data) => {
    if (err) throw err;
    res.send(data.toString());
  });
});

app.get("/banned", (req, res) => {
  fs.readFile("banned.txt", (err, data) => {
    if (err) throw err;
    res.send(data.toString());
  });
});

app.get("/pass", (req, res) => {
  fs.readFile("adminPassWord.txt", (err, data) => {
    if (err) throw err;
    res.send(data.toString());
  });
});

//const lib = require("public/script.js")

//fs.watchFile("data.txt", (curr, prev) => {
    //if (curr.mtime > prev.mtime) {
      //console.log('File has been changed.');
      //showNotification("Test", "Message")
  //  }
  //});

function sendMsg(req, res) {
  if (enabled == true) {

    const data = req.body.data + "at " + functionTime() + "\n";
    fs.appendFile("data.txt", data, (err) => {
      if (err) throw err;
      //showNotification("test", "null")
      console.log("Data saved to file.");
    });
    //console.log("Data:", req.body.data);
    res.send("Data received and saved.");
  }
}

function sendSign(req, res) { //signing up
  if (enabled == true) { 
    var data = req.body.data + "\n"
    var oldData = data
    var splitData = data.split("|||")
    var username = splitData[0]
    var match = false
    fs.readFile("Users.txt", (err, data) => {
    if (err) throw err;
            var lines = data.toString().split('\n')
    for (let i = 0; i < lines.length; i++) {
      let user = lines[i].split("|||")
      if (username == user[0]){
        match = true
      }
    }
    });
    if(match == false){
          fs.appendFile("Users.txt", data, (err) => {
      if (err) throw err;
      //showNotification("test", "null")
      console.log("User created and saved to file.");
    });
    //console.log("Data:", req.body.data);
    res.send("User data received and saved.");
    }

  }
}

function sendBan(req, res) {
  if (enabled == true) {

    const data = req.body.data + "\n";
    fs.appendFile("banned.txt", data, (err) => {
      if (err) throw err;
      //showNotification("test", "null")
      console.log("Data saved to file.");
    });
    //console.log("Data:", req.body.data);
    res.send("Data received and saved.");
  }
}
console.log("set schedule")
// ...

// Schedule tasks to be run on the server.


var formatDM = "toID||||fromID||||fromname||||text"

function sendDM(req, res){
    if (enabled == true) {

    const data = req.body.data + "\n";
    fs.appendFile("DM.txt", data, (err) => {
      if (err) throw err;
      //showNotification("test", "null")
      console.log("Data saved to file.");
    });
    //console.log("Data:", req.body.data);
    res.send("Data received and saved.");
  }
}


app.post("/submit", (req, res) => {
  sendMsg(req, res)
});

app.post("/login", (req, res) => {
  sendLogin(req, res)
});

app.post("/sendDM", (req, res) => {
  sendDM(req, res)
});

app.post("/signup", (req, res) => {
  sendSign(req, res)
});

app.post("/ban", (req, res) => {
  sendBan(req, res)
});

//app.post("/notif", (req, res) => {
  //showNotification(req,res)
//});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

