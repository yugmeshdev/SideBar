const sideBarT=document.querySelector(".sidebar-toggle");
const sideBar=document.querySelector('.sidebar');
const closeBtn=document.querySelector('.close-btn')
sideBarT.addEventListener('click',function(){
    sideBar.classList.toggle("show-sidebar")
})
closeBtn.addEventListener("click",function(){
    sideBar.classList.toggle("show-sidebar")
})