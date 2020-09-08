const Navbar ={
    init: function(){
        this.closeModal()
        this.openModal()
        this.closeModal()
        this.submenu()
        this.scrollNavbar()
    },
    openModal:  function(){
        const btnOpen = document.querySelector('.header__button')
        const modal = document.querySelector('.modal')
        const navbarMobile = document.querySelector('.navbar__mobile')
        const body = document.getElementsByTagName('body')
        btnOpen.addEventListener('click' , () =>{
            modal.style.display ='block'
            body[0].style.overflow='hidden'
            setTimeout(() =>{
                navbarMobile.style.transform='translateX(0)'
            },100)
        })
    },
    closeModal:function(){
        const btnClose = document.querySelector('.header__menu-button')
        const modal = document.querySelector('.modal')
        const navbarMobile = document.querySelector('.navbar__mobile')
        const body = document.getElementsByTagName('body')
        btnClose.addEventListener('click', () =>{
            navbarMobile.style.transform='translateX(100%)'
            body[0].style.overflow='unset'
            setTimeout(() =>{
                modal.style.display ='none'
            },500)
        })
    },
    clickModal : function() {
        const modal = document.querySelector('.modal')
        modal.addEventListener('click' , () =>{
            console.log("Ok");
        })
    },
    submenu:function() {
        const btnMenu =document.querySelectorAll('.navbar__mobile-link')
        const navbarItem =document.querySelectorAll('.navbar__mobile-item')
        btnMenu.forEach((btn) =>{
            btn.onclick = function(event){
                event.preventDefault();
            }
        })
        navbarItem.forEach((item) =>{
            item.addEventListener('click', () =>{
                const submenu=item.querySelector('.mobile__submenu-list')
                submenu.classList.toggle('mobile__submenu-list--active')
            })
        })
    },
    scrollNavbar : function(){
        const navbar = document.querySelector('.banner__nav')
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 150){
                navbar.classList.add('banner__nav--active')
            }
            else{
                navbar.classList.remove('banner__nav--active')
            }
        })
    }
}
const support ={
    init: function() {
        this.btnActive()
    },
    btnActive : function() {
        const buttons =document.querySelectorAll('.support__item')
        buttons.forEach((button) => {
            button.addEventListener('click' , () =>{
                for(let i=0 ; i<buttons.length ; i++){
                    buttons[i].classList.remove('support__item--active')
                }
                button.classList.add('support__item--active')
            })
        })
    }
}
const scrollDown ={
    init:function(){
        this.activeScroll()
    },
    activeScroll: function() {
        window.addEventListener('scroll', () =>{
            const buttons = document.querySelectorAll('.scroll-down')
            buttons.forEach((button) =>{
                button.addEventListener('click' , () =>{
                    window.scroll({
                        top: window.scrollY + 500,
                        left: 0,
                        behavior: 'smooth'
                    });
                    console.log("Ok");
                    
                })
            })
        })
    }
}
const btnScrollTop ={
    init: function(){
        this.scrollTop()
        this.btnScrollTop()
    },
    scrollTop:function(){
        const btnScroll = document.querySelector('.btnScroll')
        window.addEventListener('scroll' , () =>{
            if(window.scrollY >500){
                btnScroll.style.display='block'
            }
            else{
                btnScroll.style.display='none'
            }
        })
    },
    btnScrollTop: function(){
        const btnScroll = document.querySelector('.btnScroll')
        btnScroll.addEventListener('click' , () =>{
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    }
}
function openItem(button , elementHanlde,classActive) {
    button.addEventListener('click', () =>{
        elementHanlde.classList.toggle(classActive)
        if(button.innerHTML ==='Thu gọn'){
            button.innerText='Xem chi tiết'
        }
        else{
            button.innerText='Thu gọn'
        }
    })
}
const benefit ={
    init: function(){
        this.hanldeItem()
    },
    hanldeItem : function(){
        const button = document.querySelector('.benefit__button')
        const benefitRight = document.querySelector('.benefit__right')
        openItem(button,benefitRight,'benefit__right--active')
    }
}
const seo ={
    init : function(){
        this.hanldeItem()
    },
    hanldeItem : function() {
        const button = document.querySelector('.seo__button')
        const seoRight = document.querySelector('.seo__right')
        openItem(button,seoRight,'seo__right--active')
    }
}
const technology ={
    init : function(){
        this.hanldeItem()
    },
    hanldeItem : function() {
        const button = document.querySelector('.technology__button')
        const technologyRight = document.querySelector('.technology__left')
        openItem(button,technologyRight,'technology__left--active')
    }
}
const optimizi ={
    init:function(){
        this.hanldeItem()
    },
    hanldeItem : function(){
        const button = document.querySelector('.optipizi--click')
        const content =document.querySelector('.optimizi__content')
        const icon =document.querySelector('.down--optimizi')
        button.addEventListener('click' , () =>{
            content.classList.toggle('optimizi__content--active')
            icon.classList.toggle('optizi--active')
            if(button.innerHTML ==='Thu gọn'){
                button.innerText='Xem thêm'
            }
            else{
                button.innerText='Thu gọn'
                
            }
        })  
    }
}
function openModalRegister () {
    const body = document.getElementsByTagName('body')
    const modal =document.querySelector('.modal-register')
    const modalContent = document.querySelector('.modal-wrapper')
    modal.style.display ='flex'
    body[0].style.overflow='hidden'
    setTimeout(() =>{
        modalContent.style.transform='translateY(0)'
        modalContent.style.opacity='1'
    },100)
}
function closeModalRegister () {
    const body = document.getElementsByTagName('body')
    const modal =document.querySelector('.modal-register')
    const modalContent = document.querySelector('.modal-wrapper')
    body[0].style.overflow='unset'
    modalContent.style.transform='translateY(-100%)'
    modalContent.style.opacity='0'
    setTimeout(() =>{
        modal.style.display ='none'
    },500)
}
const modalRegister ={
    init:function() {
        this.openModal()
        this.closeModal()
    },
    openModal : function() {
        const btn = document.querySelector('.btn--banner')
        btn.addEventListener('click', () =>{
            openModalRegister()
        })
    },
    closeModal : function() {
        const btn = document.querySelector('.modal-close')
        btn.addEventListener('click', () =>{
            closeModalRegister()
        })
    }
}
const btnFree ={
    init: function() {
        this.openModal()
    },
    openModal: function() {
        const btnFree = document.querySelector('.btn--free')
        btnFree.addEventListener('click', () =>{
            openModalRegister()
        })
    }
}
const toolbarMobile = {
    init : function() {
        this.haldeSearchForm()
        this.hanldeToolbarList()
    },
    haldeSearchForm : function() {
        const btn = document.querySelector('.show__search-form')
        const toolbarTitle =document.querySelector('.toolbar__title')
        const toolbarSearch = document.querySelector('.toolbar__form-search')
        btn.addEventListener('click' , () =>{
            toolbarTitle.classList.toggle('toolbar__title--active')
            toolbarSearch.classList.toggle('toolbar__form-search--active')
        })
    },
    hanldeToolbarList:function() {
        const btn =document.querySelector('.toolbar__title')
        const toolbarList = document.querySelector('.toolbar__title-list')
        btn.addEventListener('click', () =>{
            toolbarList.classList.toggle('toolbar__title-list--active')
        })
    }
}
const question ={
    init:function(){
        this.activeHanldeQuestion()
    },
    activeHanldeQuestion: function() {
        const buttons = document.querySelectorAll('.question__item')
        buttons.forEach((button,index) =>{
            button.addEventListener('click', () =>{
                for(let i =0 ;i< buttons.length ; i++){
                    if(i !== index){
                        buttons[i].classList.remove('question__item--active')
                    }
                }
                button.classList.toggle('question__item--active')
            })
        })
    }
}
const btnHeader ={
    init: function() {
        this.openModal()
    },
    openModal: function() {
        const btnHeader = document.querySelector('.header__item--button')
        btnHeader.addEventListener('click', (event) =>{
            event.preventDefault()
            openModalRegister()
        })
    }
}
const clickModalRegister ={
    init: function() {
        this.closeModal()
    },
    closeModal : function() {
        const modalRegister = document.querySelector('.modal-register')
        modalRegister.addEventListener('click', () =>{
            closeModalRegister()
        })
    }
}

btnScrollTop.init()
Navbar.init()
question.init()
modalRegister.init()
// clickModalRegister.init()
btnHeader.init()
btnFree.init()
support.init()
scrollDown.init()
benefit.init()
seo.init()
technology.init()
optimizi.init()
btnFree.init()
toolbarMobile.init()
