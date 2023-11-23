function showClick(){
   const list = document.querySelector('.header__list')
   const btn = document.querySelector('.menu')
   let i = 1;
   btn.addEventListener('click', function(){
     list.classList.toggle('active')
   })
   list.addEventListener('click', function (params) {
      list.classList.remove('active')
   })

}
showClick();