var divBox = document.createElement('div');
divBox.classList.add('box')

var divTweetTitle = document.createElement('div')
divTweetTitle.classList.add('tweetTitle')

var divinput=document.createElement('div')
divinput.classList.add('div_input')

divTweetTitle.appendChild(divinput)
divbox.appendChild(divTweetTitle)

document.querySelector('.center').appendChild(divbox)



<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>map(<%= layout1 %>)</h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>




<div class="center"> <%= topic %>
  <div class="box"> <%= description  %>
  </div>
</div>





const data = async () => {
  const res = await axios({
    method: "GET",
    url: "users/data",
  })
  var div = document.querySelector(".text")
  var listusers = document.querySelector("#list_users")
  const text = []
  let listitems = ""
  for (let i = 0; i < res.data.users.length; i++) {
    text.push({
      name: res.data.users[i].name,
      surname: res.data.users[i].surname,
      username: res.data.users[i].username,
    })
  }
  for (items of text) {
    listitems +=
      "<li>" +
      "Name:" +
      items.name +
      " " +
      "Surname:" +
      items.surname +
      " " +
      "Username:" +
      items.username +
      "</li>"
  }
  div.style.visibility = "visible"
  listusers.innerHTML = listitems
};
