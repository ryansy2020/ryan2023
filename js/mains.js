

const navToggle = document.querySelector(".nav-toggle")
const linkContainer = document.querySelector(".links-container")
const linkItem = document.querySelector(".links-item")
const porfContainer = document.querySelectorAll(".Container")
// const itemLink = document.querySelector(".social-container2")
const links = document.querySelector(".links")

// ----------------toggle Nav----

navToggle.addEventListener("click", function(){

    const containerHeight = linkContainer.getBoundingClientRect().height
    const linkHeight = linkItem.getBoundingClientRect().height
    const itemHeight = links.getBoundingClientRect().height

    const toggleHeight = itemHeight + linkHeight +linkHeight

    // console.log(itemHeight)

    if (containerHeight === 0) {
        linkContainer.style.height = `${toggleHeight}px`
    }
    else {
        linkContainer.style.height = 0
    }

})

porfContainer.forEach(function(clk) {
    
    clk.addEventListener("click", function() {
        linkContainer.style.height = 0
    })

})

const nav = document.getElementById("nav")

// ----------------Fixed Nav----

window.addEventListener("scroll", function( ) {
    
    const scrollPage = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height

    if (scrollPage > navHeight) {
        
        nav.classList.add("fixed-nav")

    }
    else {
        nav.classList.remove("fixed-nav")
    }

})

// ------Scroll to link------

const scrollLink = document.querySelectorAll(".scroll-link")

scrollLink.forEach(function( link) {
    
    link.addEventListener("click", function(e) {
       
        e.preventDefault()
        
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        const linkHeight = linkContainer.getBoundingClientRect().height
        const navHeight = nav.getBoundingClientRect().height
        const fixeNav = nav.classList.contains("fixed-nav")
        
        let attribute = element.offsetTop - navHeight

        if (!fixeNav) {
            attribute  = attribute - navHeight
        }

        if (navHeight > 82) {
            
            attribute = attribute + linkHeight

        }
     

        // console.log(linkHeight)

        scrollTo({

            left: 0,    
            top: attribute,

        })

        linkContainer.style.height = 0
    } )

})


// -----------------Header Slider & porfolio slider ------


let count = 0

function prev(t) {
    
    let container = t.parentElement.parentElement
    let item = container.querySelector(".slide")

    item.scrollBy(-300, 0)
}

function next(t){

    let container = t.parentElement.parentElement
    let item = container.querySelector(".slide")

    console.log(count)


   item.scrollBy(300,0)


   
}

// ---XX--------------Header Slider & porfolio slider ----XX--

// -------------------About Me--------------------------------

const aboutItem = document.querySelectorAll(".about-item")

aboutItem.forEach(function(item){

    const btn = item.querySelector(".this-btn")

    btn.addEventListener("click", function() {

        aboutItem.forEach(function(list) {
            
            if (list != item) {
                list.classList.remove("show-text")
            }

        })

        
       item.classList.toggle("show-text")
    })
    

})

// ---XX----------------About Me----------------------------xx----

// ----------Header slider array

const headerList = [

    {
        id: 1,
        title: "about me",
        img: "./images/ryan1.png",
        link:"#about",
    },
    {
        id: 2,
        title: "my porfolio",
        img: "./images/editing2.png",
        link:"#porfolio",
    },
    {
        id: 3,
        title: "my contact",
        img: "./images/ryan5.png",
        link:"#contact",
    },
    {
        id: 4,
        title: "design",
        img: "./images/keybord2.png",
        link:"#about",
    },


];



const slideContainer = document.querySelector(".slider-container")


window.addEventListener("DOMContentLoaded", function() {
    
    showHeader(headerList)

})

function showHeader(item) {
    
    let dispalyHeader = item.map(function(list) {
        
        return`  <div class="bg-slider" style="background-image:url(${list.img});">
        <div class="bg-gradient">
        <div class="banner-info">
            <h1>${list.title}</h1>
            

           <button class="btn-banner"><a href="${list.link}">explore</a></button>
         </div>
        </div>   
    </div>`

    })
    dispalyHeader = dispalyHeader.join("")
    slideContainer.innerHTML = dispalyHeader

}

// --XX--------Header slider array-----XX

// ------------Porfolio slider Array-----------------------------

const porfolio = [

    {
        id: 1,
        title: "mytv movie website",
        img: "./images/mytv screeshot.png",
        link:"https://ryansy2020.github.io/mytv.github.io/",
        desc: "this site is social networking website that post diffrent kind of movies this website is not finish yet it just for representation "
    },

    {
        id: 2,
        title: "tribebot chat system",
        img: "./images/tribebot screeshot.png",
        link: "https://ryansy2020.github.io/syryan.github.io/chatbot.html",
        desc: "tribebot is a chatnot system where you can ask any question this is base on chatgpt system and still not finish it just for representation for the client"
    },

    {
        id: 3,
        title: "tinda ecommerce website",
        img: "./images/tinda screeshot.png",
        link: "https://ryansy2020.github.io/tinda-github.io/",
        desc: "tinda is a ecommerce website where you can sell your product to the internet this website is just for presentation its still not finish yet and dont have any database",
    },

    {
        id: 4,
        title: "vonk global company website",
        img: "./images/vonk global.png",
        link: "https://vonkglobal.wixsite.com/vonkglobal",
        desc: "vonk global is a company website that represent thier product and work base on constration, advertising and airconditioning",
    },

]


// ----------Graphic Porfolio------------------
const graphicDesign = [

    {
        id: 1,
        title: "video Editing",
        img: "./images/videoedit1.png",
        desc: "have knowledge in video editing software such us adobe after effect, primiere, and other online videoeditieng software such us capcut"
    },

    {
        id: 2,
        title: "labeling sticker and printing",
        img: "./images/labeling sticker.png",
        desc: "have knowledge in labeling sticker layouting printing preparation, color theory and color processing"
    },

    {
        id: 3,
        title: "layout design",
        img: "./images/pringting.png",
        desc: "have knowledge in offset printing layouting magazine, books, invits, callingcard and other printing supplies",
    },

    {
        id: 4,
        title: "Biilboard Signages Modolar Kioks",
        img: "./images/billboard.png",
        desc: "have knowldege in billboard, Signanges, kioks, design and interior design for kitchen or store renovation",
    }

]


// ----------Graphic Porfolio------------------

const porfolioContainer = document.querySelector(".porfolio-slide")
const modalContainer = document.querySelector(".modal-container")
const graphicmodalContainer = document.querySelector(".graphicmodal-container")
const grahpiSLide = document.querySelector(".graphic-slide")

window.addEventListener("DOMContentLoaded", function() {
    
    showPorfolio(porfolio)
    graphicDisplay(graphicDesign)


})

let clickId = 0

function showPorfolio(item) {
    
    let displaySlide = item.map(function(details) {
        
        return`<article class="trending-box" style="background-image: url('${details.img}');">
        <div class="bg-overlay">
            <div class="card-title">
                <h3>${details.title}</h3>
             </div>
 
             <div class="more-info">
                 <div class="add-icon">

                     <button class="porfolio-info" data-id="${details.id}">info</button>
                 </div>
 
             </div>

        </div>

    </article>`

    })
    displaySlide = displaySlide.join('')
    porfolioContainer.innerHTML = displaySlide

    const porfolioInfo = document.querySelectorAll(".porfolio-info")


    porfolioInfo.forEach(function(btn) {
        
        btn.addEventListener("click", function(e) {
            // console.log(e.currentTarget.dataset.id);
            const currentId = e.currentTarget.dataset.id

            clickId = `${currentId}`

            const modalId = porfolio.filter(function(mod) {
                return mod.id == clickId
            })

            displayModal(modalId)

            modalContainer.classList.add("show-modal")

        })

    })

}


function displayModal(items) {
    
    let showDisplay = items.map(function(list) {
        return`<article class="modal-box">

        <div class="close-btn">
            <i class="fa-solid fa-close"></i>
        </div>

        <div class="img-box">
            <img src="${list.img}" alt="" class="website-img">
        </div>

        <div class="modal-info">
            <div class="website-title">
                <h3>${list.title}</h3>
            </div>
            
            <div class="website-info">
               <span>${list.desc}
                </span>
            </div>

            <div class="add-icon">
                <button class="modal-btn">
                <a href=${list.link} target="_blank" >visit the website</a>
                </button>
            </div>

        </div>

    </article>`

    })
    showDisplay = showDisplay.join('')
    modalContainer.innerHTML = showDisplay

    const closeModal = document.querySelector(".close-btn")

    closeModal.addEventListener("click", function() {
        modalContainer.classList.remove("show-modal")
        graphicmodalContainer.classList.remove("show-modal")
        
    } )

}

function graphicDisplay(grap) {
    
    let showGraphic = grap.map(function(item) {
        return`<article class="trending-box" style="background-image: url('${item.img}');">
        <div class="grapbg-overlay">
            <div class="card-title">
                <h3>${item.title}</h3>
             </div>
 
             <div class="more-info">
                 <div class="add-icon">

                     <button class="grapporfolio-info" data-id="${item.id}">info</button>
                 </div>
 
             </div>

        </div>

    </article>`

    })
    showGraphic = showGraphic.join('')
    grahpiSLide.innerHTML = showGraphic

    const graphicInfo = document.querySelectorAll(".grapporfolio-info")


    graphicInfo.forEach(function(btn) {
        
        btn.addEventListener("click", function(e) {
            console.log(e.currentTarget.dataset.id);
            const currentId = e.currentTarget.dataset.id

            clickId = `${currentId}`

            const gmodalId = graphicDesign.filter(function(mod) {
                return mod.id == clickId
            })

            graphicModal(gmodalId)

            graphicmodalContainer.classList.add("show-modal")
            modalContainer.classList.remove("show-modal")

        })

    })

}

function graphicModal(items) {
    
    let graphicDisplay = items.map(function(list) {
        return`<article class="graphicmodal-box">

        <div class="gclose-btn">
            <i class="fa-solid fa-close"></i>
        </div>

        <div class="img-box">
            <img src="${list.img}" alt="" class="website-img">
        </div>

        <div class="modal-info">
            <div class="website-title">
                <h3>${list.title}</h3>
            </div>
            
            <div class="website-info">
               <span>${list.desc}
                </span>
            </div>
            

        </div>

    </article>`

    })
    graphicDisplay = graphicDisplay.join('')
    graphicmodalContainer.innerHTML = graphicDisplay

    const gcloseModal = document.querySelector(".gclose-btn")

    gcloseModal.addEventListener("click", function() {
        graphicmodalContainer.classList.remove("show-modal")
        console.log("hi");
    } )

}
