const dropdown = document.querySelector('.dropdown')
const drpmenu = document.getElementById('drpmenu')
const hidden = document.querySelector('.hidden')
const lside = document.querySelector('.lsidepp')
const popbox = document.querySelector('.popbox')
const xclose = document.querySelector('.x')
const lsidebutton = document.querySelector('#lsidebutton')
const comment = document.querySelector('#comment')
const retweetbox = document.querySelector('.retweetbox')

comment.addEventListener('click', () => {
  if (retweetbox.style.display == "none" ) {
    document.querySelector('.container').classList.add('blur-filter')
    retweetbox.style.transition = "all 0.5s ease"
    retweetbox.style.display = "flex"
  }else {
    retweetbox.style.display = "none"
    document.querySelector('.container').classList.remove('blur-filter')
  }
})


lsidebutton.addEventListener('click', (e) => {
  if (popbox.style.display == "none" ) {
    document.querySelector('.container').classList.add('blur-filter')
    popbox.style.transition = "all 0.5s ease"
    popbox.style.display = "flex"

  }else {
    popbox.style.display = "none"
    document.querySelector('.container').classList.remove('blur-filter')
  }
  e.preventDefault()
})

xclose.addEventListener('click', () => {
  if (popbox.style.display == "none" ) {
    popbox.style.transition = "all 0.5s ease"
    popbox.style.display = "flex"
  }
  
})

lside.addEventListener('click', () => {
  if (dropdown.style.display == "none" ) {
    dropdown.style.transition = "all 0.5s ease"
    dropdown.style.display = "flex"
  }else {
    dropdown.style.display = "none"
  }
  
})



const buttontweeti = document.getElementById('buttontweeti')
const tweetcontent = document.querySelector('.txtarea1')

buttontweeti.addEventListener('click', () => {
  var divBox = document.createElement('div');
  divBox.classList.add('box')

  divBox.innerHTML = `
          <div class="tweetTitle">
            <div class="titleImg">
              <img src="https://picsum.photos/400/400" alt="">
            </div>
            <a href="">alp</a>
            <a href="" class="username">@Toqtir_</a>
            <span>3s</span>
            <span><i class="fas fa-ellipsis-h"></i></span>
          </div>
          <div class="row">
            <div class="tweetContent">
              <p>${tweetcontent.value}</p>
              <div class="tweetContentImg">
                <img src="https://www.hobisi.com/wp-content/uploads/2019/05/resim-nedir-turleri-ve-stilleri.jpg" alt="">
                <span>1:35</span>
                <span>22.5B görüntülenme</span>
              </div>
            </div>
            <div class="tweetNav">
              <li>
                <a id="comment" href="#"><i class="far fa-comment"></i></a>
              </li>
              <li>
                <a href=""><i class="fas fa-retweet"></i></a>
              </li>
              <li>
                <a href=""><i class="far fa-heart"></i></a>
              </li>
              <li>
                <a href=""><i class="fas fa-share-square"></i></a>
              </li>
            </div>
          </div>
    
     `
  document.getElementById("center").appendChild(divBox)
  var list = document.getElementById("center");
  list.insertBefore(divBox, list.childNodes[2])
  
})

let count = 0;

async function getData(){
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  let user = await users.json();
  console.log(user)
  return user;
}

showData()
async function showData(){
  const posts = await getData();

  posts.forEach((item) => {
    const postDiv = document.createElement('div')
    postDiv.classList.add('box')
    postDiv.innerHTML = `
          <div class="tweetTitle">
            <div class="titleImg">
              <img src="https://picsum.photos/400/400" alt="">
            </div>
            <a href="">${item.name}</a>
            <a href="" class="username">@${item.username}</a>
            <span>3s</span>
            <span><i class="fas fa-ellipsis-h"></i></span>
          </div>
          <div class="row">
            <div class="tweetContent">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestiae tempore culpa fugiat iusto iste reiciendis facilis dolore possimus neque!</p>
              <div class="tweetContentImg">
                <img src="https://www.hobisi.com/wp-content/uploads/2019/05/resim-nedir-turleri-ve-stilleri.jpg" alt="">
                <span>1:35</span>
                <span>22.5B görüntülenme</span>
              </div>
            </div>
            <div class="tweetNav">
              <li>
                <a id="comment" href="#"><i class="far fa-comment"></i></a>
              </li>
              <li>
                <a href=""><i class="fas fa-retweet"></i></a>
              </li>
              <li>
                <a href=""><i class="far fa-heart"></i></a>
              </li>
              <li>
                <a href=""><i class="fas fa-share-square"></i></a>
              </li>
            </div>
          </div>
    
     `
    document.querySelector('.center').appendChild(postDiv)

  })
}


// const varMi = 'hidden';
// drpmenu.addEventListener('click', (e) => {
// dropdown.classList.add('hidden')

// e.preventDefault();
// });

/* 

<div class="box">
          <div class="tweetTitle">
            <div class="titleImg">
              <img src="https://picsum.photos/400/400" alt="">
            </div>
            <a href="">Sedat Sakmar</a>
            <a href="">@Toqtir_</a>
            <span>3s</span>
            <span><i class="fas fa-ellipsis-h"></i></span>
          </div>
          <div class="row">
            <div class="tweetContent">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eius impedit saepe cum vero sequi quia
                aperiam magnam qui et?</p>
              <div class="tweetContentImg">
                <img src="https://www.hobisi.com/wp-content/uploads/2019/05/resim-nedir-turleri-ve-stilleri.jpg" alt="">
                <span>1:35</span>
                <span>22.5B görüntülenme</span>
              </div>
            </div>
            <div class="tweetNav">
              <li>
                <a id="comment" href="#"><i class="far fa-comment"></i></a>
              </li>
              <li>
                <a href=""><i class="fas fa-retweet"></i></a>
              </li>
              <li>
                <a href=""><i class="far fa-heart"></i></a>
              </li>
              <li>
                <a href=""><i class="fas fa-share-square"></i></a>
              </li>
            </div>
          </div>
        </div>

        */
