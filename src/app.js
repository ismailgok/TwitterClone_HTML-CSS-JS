const dropdown = document.querySelector('.dropdown')
const drpmenu = document.getElementById('drpmenu')
const hidden = document.querySelector('.hidden')
const lside = document.querySelector('.lsidepp')
const popbox = document.querySelector('.popbox')
const xclose = document.querySelector('.x')
const lsidebutton = document.querySelector('#lsidebutton')

lsidebutton.addEventListener('click', () => {
  if (popbox.style.display == "none" ) {
    document.querySelector('.container').classList.add('blur-filter')
    popbox.style.transition = "all 0.5s ease"
    popbox.style.display = "flex"
  }else {
    popbox.style.display = "none"
    document.querySelector('.container').classList.remove('blur-filter')
  }
  
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

// const varMi = 'hidden';
// drpmenu.addEventListener('click', (e) => {
// dropdown.classList.add('hidden')

// e.preventDefault();
// });

