// Set a unique ID in local storage
var phrase = "gronk"

var loggedIn = false
var shownLogin = false

//what
//how can we make a friend system

function askCode() {
  let prom = prompt("Room code?")
  if (prom == phrase) {
    alert("entered")
  } else {
    askCode()
  }
}
askCode()
//STOP DISABLING THE CODE BECAUSE TE CHATROOM ALREADY GOT LEAKED STUPID IDIOT MONKEY 
//ALSO MY BROTHERGOT ON THE CHATROOM SO DONT DISABLE IT

//function makeNotification(notificationText, color) {
//  const notifBox = document.getElementById("notificationDiv")
//  const notif = document.createElement("p");
//  notif.innerHTML = notificationText;
//  notif.style.color = "green";
//  notifBox.appendChild(notif);
//}


if (!localStorage.getItem("user_id")) {
  localStorage.setItem("user_id", Math.random().toString(36).substring(2, 15));
}

var ip = Math.floor(Math.random() * 999).toString() + "." + Math.floor(Math.random() * 40).toString() + "." + Math.floor(Math.random() * 40).toString()

function showIP() {
  alert("Your IP is " + ip)
}

var banned = false
const form = document.querySelector("#myForm");
const dataInput = document.querySelector("#data");
//const userName = document.getElementById("UserName")

if (!localStorage.getItem("user_name")) {
  localStorage.setItem("user_name", "");
} else {
  //userName.value = localStorage.getItem("user_name")
}

// Retrieve the unique ID from local storage
var user_id = localStorage.getItem("user_id") || Math.random().toString(36).substring(2, 15);
var user_name = "nil";

const idPara = document.getElementById("idTag")
idPara.innerHTML = "ID: " + user_id

var cooldown = 0

function copyToClipboard(text) {
  alert(text)
  navigator.clipboard.writeText(text);
  //makeNotification("Copied '"+text+"'!", "#32a852")
}

function sendMSG(e) {
  if (banned == true) {
    return
  }
  if (loggedIn == false) {
    return
  }
  if (dataInput.value.includes("g+a") || dataInput.value.includes("G+A") || dataInput.value.includes("G+S") || dataInput.value.includes("g+s") ||
    dataInput.value.includes("mexico") ||
    dataInput.value.includes("mexican") ||
    dataInput.value.includes("monkeypeople") ||
    dataInput.value.includes("digustingdirties")
  ) {
    window.open("https://www.youtube.com/watch?v=en1heHDBf3k&t=7s&pp=ygUSbG91ZCBtZXhpY2FuIHRydWNr")
    return
  }
  if (dataInput.value.length < 2) {
    return
  }
  if (dataInput.value == "") {
    return
  }
  if (e) {
    e.preventDefault();
  }
  var ctc = "copyToClipboard('" + user_id + "')`"

  var addStuff = "<br> <br> <span style='color:white;font-size:2ch;font-weight:700;' onclick=\ " + ctc + "\ >" + user_name + ": " + dataInput.value + " </span> <br> ID: "

  var addStuff2 = "<br> <br> <div> <p style='color:white;font-size:2ch;font-weight:700;overflow-wrap: break-word;'><nobr>" + "<button onclick=`" + ctc + " nowrap style='color:white;font-size:2ch;font-weight:700;background-color: #20283c; border-radius:0.6ch;cursor:pointer;'><nobr>" + user_name + ": " + "</nobr></button>" + " " + dataInput.value + "</nobr> </p> </div>"


  const data = addStuff2 + user_id + " | ";
  if (cooldown <= 0) {
    dataInput.value = ""
  }
  if (cooldown <= 0) {
    var send = false
    var send2 = false
    var FinalSend = false
    if (user_name) {
      send = true
    }
    if (dataInput.value == "") {
      send2 = true
      if (send == true) {
        FinalSend = true
      }
    }
    if (FinalSend == true) {
      fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      })
        .then((res) => res.text())
        .then((text) => console.log(text))
        .catch((err) => console.error(err));
    }
  }
  cooldown = 1.5
  document.getElementById("cooldownDisplay").innerHTML = "Cooldown: " + cooldown + "s"
}

function attempt() {
  const msg = document.getElementById("data")
  sendMSG(msg.innerText)
}
//form.addEventListener("submit", (e) => {
//sendMSG(e)
//});

document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  if (code == "Enter") {
    sendMSG(event)
  }
  if (code == "Backquote") {
    openWebsiteRep()
  }
}, false);


function openAB() {
  var win = window.open()
  var iframe = win.document.createElement('iframe')
  var page = "https://data-server-test.roeckelmatt.repl.co"
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = page
  win.document.body.appendChild(iframe)
  win.document.body.style.margin = '0';
}

function refreshWeb() {
  document.location.href = "index.html"
}

function openWebsite() {
  open("https://data-server-test.roeckelmatt.repl.co")
}

function openWebsiteRep() {
  if (user_id == "6fd2ypdbq6" || user_id == "wwocxtfp4tp") {
    open("https://replit.com/@roeckelmatt/Data-Server-Test#data.txt")
  }
}

function saveName() {
  localStorage.setItem("user_name", userName.value);
}

let permission = Notification.permission;

if (permission === "default") {
  requestAndShowPermission();
}

function requestAndShowPermission() {
  Notification.requestPermission(function(permission) {
    if (permission === "granted") {
      showNotification();
    }
  });
}

var module = []

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

//module.exports = { showNotification };

function copyId() {
  navigator.clipboard.writeText(user_id);
}

var oldText = ""

function updateMessage() {
  if (banned == true) {
    const dataContainer = document.querySelector("#displayData");
    dataContainer.innerHTML = "you're banned lmao 💀";
    return
  }
  if (loggedIn == false) {
    if (shownLogin == true) {
      return
    }
    shownLogin = true
    const dataContainer = document.querySelector("#displayData");
    dataContainer.innerHTML = `<h2 style="color:#858999; text-align: center; font-family: 'Nunito Sans', sans-serif;">You must login/signup to access the chatroom. </h2> <br> <br> <label>Username:</label> <br>
       <textarea style="width:30% height:10%" id="UsernameEnter" name="UsernameEnter"></textarea> <br> <br> <br> <label>Password:</label> <br>
       <textarea style="width:30% height:10%" id="PasswordEntering" name="PasswordEntering"></textarea> <br> <br> <button onclick="signup()" style='color:white;font-size:2ch;font-weight:700;background-color: #20283c; border-radius:0.6ch;cursor:pointer;'> Sign Up </button> <br> <br> <button  onclick="login()" style='color:white;font-size:2ch;font-weight:700;background-color: #20283c; border-radius:0.6ch;cursor:pointer;'> Log In </button>`;
    return
  }
  fetch("/data")
    .then((res) => res.text())
    .then((text) => {
      const dataContainer = document.querySelector("#displayData");
      dataContainer.innerHTML = text;
      oldText = dataContainer.innerHTML
    })
    .catch((err) => console.error(err));
}

function checkBanned() {
  fetch("/banned")
    .then((res) => res.text())
    .then((text) => {
      const dataContainer = document.querySelector("#bannedUserList");
      dataContainer.innerHTML = text;
      oldText = text
      if (text.includes(user_id)) {
        banned = true

      }

    })
    .catch((err) => console.error(err));
}

function GetPass() {
  var passAttempt = document.getElementById('adminPass').value
  var banUser = document.getElementById('userBan').value
  fetch("/pass")
    .then((res) => res.text())
    .then((text) => {
      if (passAttempt == text) {
        fetch("/ban", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: banUser }),
        })
          .then((res) => res.text())
          .then((text) => console.log(text))
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.error(err));
}

function setOT() {
  const dataContainer = document.querySelector("#displayData");
  oldText = dataContainer.innerHTML
}

function getBanned() {
  var bannedList = document.querySelector('#bannedUserList').innerHTML
  if (bannedList.includes(user_id) == true) {
    banned = true
  }

}

setInterval(setOT, 2000)
setInterval(updateMessage, 800)
updateMessage()
setInterval(checkBanned, 800)

function deleteMsg(line) {
  // break the textblock into an array of lines
  fetch("/data")
    .then((res) => res.text())
    .then((text) => {
      var lines = textblock.split('\n');
      // remove one line, starting at the first position
      lines.splice(line, line);
      // join the array back into a single string
      var newtext = lines.join('\n');
    })
    .catch((err) => console.error(err));
}

function subtractCooldown() {
  if (!cooldown == 0) {
    cooldown = cooldown - 0.5
    document.getElementById("cooldownDisplay").innerHTML = "Cooldown: " + cooldown + "s"
  }
}
setInterval(subtractCooldown, 500)

var sentMessage = false

function checkBan() {
  if (sentMessage == false) {
    if (user_id == "") { //xujj38sam9
      alert("You do not have access to this website.")
      banned = true
      window.close()
      window.close()
      sentMessage = true
    }
  }
}

setInterval(checkBan, 400)

function getID(text) {
  var length = text.length;
  var id = ""  
  var l11 = text[length - 2]
  var l10 = text[length - 3]  
  var l9 = text[length - 4]
  var l8 = text[length - 5] 
  var l7 = text[length - 6]
  var l6 = text[length - 7]
  var l5 = text[length - 8]
  var l4 = text[length - 9]  
  var l3 = text[length - 10]  
  var l2 = text[length - 11]  
  var l1 = text[length - 12]
  id = id + l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11

  alert(id)
  return id  
  //["true""hi""greegle""jd5h03aikql"]
}

function login() {
  var filler = "|||";

  const usernameInputt = document.querySelector("#UsernameEnter");
  const passwordInputt = document.querySelector("#PasswordEntering");

  //alert(usernameInputt.value)
  //alert(passwordInputt.value)

  const data = usernameInputt.value + filler + passwordInputt.value + filler + user_id; + '\n'
  console.log(data)
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  })
    .then((res) => res.text())
    .then((text) => {
      //alert("TEXT[0] = "+ text[0])
      //alert("TEXT[1] = "+ text[1])
      user_name = usernameInputt.value

      var finaltext = ""
      for (var i = 0; i < text.length; i++) {
        //alert(text[i])
        if (text[i] !== "[" && text[i] !== "]" && text[i] !== "," && text[i] !== "''") {
          finaltext = finaltext + text[i]
          
        }
      }
      user_id = getID(finaltext)
      //alert(text[2] + text[3] + text[4] + text[5])
      if (text[2] == "t" && text[3] == "r" && text[4] == "u" && text[5] == "e") {
        //alert("user signed in, " + text[0] + text[1] + text[2] + text[3])
        shownLogin = true
        loggedIn = true
        //alert("SHOWN LOGIN TRUE")
      }

    })
    .catch((err) => console.error(err));
}
function signup() {
  var filler = "|||";

  const usernameInputt = document.querySelector("#UsernameEnter");
  const passwordInputt = document.querySelector("#PasswordEntering");

  //alert(usernameInputt.value)
  //alert(passwordInputt.value)

  const data = usernameInputt.value + filler + passwordInputt.value + filler + user_id; + '\n'

  //alert(data)
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  })
    .then((res) => res.text())
    .then((text) => {

    })
    .catch((err) => console.error(err));
  login()

}
var recipiant = "ID"
var formatDM = "toID||||fromID||||fromname||||text"
function sendDM(){
    fetch("/sendDM", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  })
    .then((res) => res.text())
    .then((text) => {

    })
    .catch((err) => console.error(err));
}

//
