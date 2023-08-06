
// apid keys
const apiKeys = 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0';


const inputChat = document.getElementById("input-text");

const speakerHigh = document.querySelector(".speaker-high")
const speakerMute = document.querySelector(".speaker-mute")


const form = document.querySelector(".form")
const submitBtn = document.querySelector("submit-btn")
const inputText = document.getElementById("input-text")
const container = document.querySelector(".result-container")
const list = document.querySelector(".result-list")
const deltBtn = document.querySelector(".delete-btn")
const alertChat = document.querySelector(".alert-chat")
const botDisplay = document.querySelector(".bot-display")
const aboutBtn = document.querySelector(".about-btn")
const modalContainer = document.querySelector(".modal-container")
const closeModal = document.querySelector(".close-btn")

// bot speech
const synths = window.speechSynthesis
let volumeRate = 0

speakerHigh.addEventListener("click", function() {
    speakerHigh.classList.toggle("hide-speaker")
    speakerMute.classList.add("show-speaker")

    volumeRate = 1
})


function sound(volume) {
    
    speakerHigh.classList.toggle("hide-speaker")
    speakerMute.classList.add("show-speaker")
 
     
     let utterResponse = new SpeechSynthesisUtterance(volume)
     utterResponse.volume = 1
     synths.speak(utterResponse)

}



speakerMute.addEventListener("click", function() {

    speakerHigh.classList.remove("hide-speaker")
    speakerMute.classList.remove("show-speaker")

    volumeRate = 0
    
})


aboutBtn.addEventListener("click", function() {
    modalContainer.classList.add("show-modal")

})

closeModal.addEventListener("click", function() {
    modalContainer.classList.remove("show-modal")
    console.log("close");
})


let editElement;
let editFlag = false
let editId = ""



// let rollrandom = Math.floor(Math.random() * otherResponse.length)

// setInterval(() => {
   
//     alertChat.textContent = otherResponse[randomtime]
//     console.log(randomtime);
//     setTimeout(() => {
//         alertChat.textContent = otherResponse[rollrandom-1]
//         console.log(rollrandom)
//     }, 7000);

// },5000);




const bestQuotes = [
    {
        id:1,
        greeting : "hi there what can I do for you",
        quotes: "be what you are. this is the first step toward becoming better than you are",
        author: "julis charles hare",

    },
    {
        id:2,
        greeting : "good day.. what do you want to ask",
        quotes: "be yourself. ape no greatness. be willing to pass for what you are",
        author: "samuel coley",

    },
    {
        id:3,
        greeting : "yo!.. ask me something",
        quotes: "learn to value yourself, which means: fight for your happiness",
        author: "ayn rand",

    },
    {
        id:4,
        greeting : "ask me some question maybe I might know the answer",
        quotes: "dont concern yourself with the money. be of service. build work. dream.create",
        author: "earl nightingale",

    },
    {
        id:5,
        greeting : "do you have a lot of question? try to ask me",
        quotes: "by accepting yourself and being fully what you are, your presence can make others happy",
        author: "jane roberts",

    },
    {
        id:6,
        greeting : "hi there what can I do for you",
        quotes: "be gentle first with yourself if you wish to be gentle with others",
        author: "lama yeshe",

    },
    {
        id: 7,
        greeting : "yo!.. ask me something",
        quotes: "ask ypurself the secret of your success. listen to your ansewer and practice it",
        author: "richard bach",

    },
    {
        id: 8,
        greeting : "ask some question",
        quotes: "before you speak, ask yourself, is it kind, is it necessary, is it true, does it improve the silence",
        author: "sathya sai baba",

    },
    {
        id: 9,
        greeting : "ask me some question maybe I might know the answer",
        quotes: "inspire yourself to be great. being good isn't good enough",
        author: "gurbaksh chabal",

    },
    {
        id: 10,
        greeting : "do you have a lot of question? try to ask me",
        quotes: "know yourself and you will win all battles",
        author: "sun tzu",

    }

];


const otherResponse = ["hi there what can I do for you", 
            "good day.. what do you want to ask", 
            "yo!.. ask me something", "ask some question",
            "ask me some question maybe I might know the answer",
        "do you have a lot of question? try to ask me" ] 


        const display = document.querySelector(".bot-display")
        const quoteItems = document.querySelector(".qutes-items")
        const title = document.querySelector(".span-title")
        const author = document.querySelector(".author")

function chatroll () {
    
 
    let randomtime = Math.floor(Math.random() * bestQuotes.length)
    
    let list = bestQuotes[randomtime]

    quoteItems.textContent =`"${list.quotes}"`
    title.textContent = list.greeting
    author.textContent = `| ${list.author} |`
    

    // let utterResponse = new SpeechSynthesisUtterance( `${list.greeting} !"""", this is our quotes for today ${list.quotes}, by:${list.author}`)

    // synths.speak(utterResponse)

}

let rollReponse = setInterval(chatroll, 50000)

chatroll()



// for (let i = 0; i < otherResponse.length; i++) {
    
//     count = i

//     setTimeout(() => {
//         alertChat.textContent = otherResponse[randomtime]
    
//     }, 5000);

    
// }


// alertChat.textContent = otherResponse[counting]
form.addEventListener("submit", textInput)

deltBtn.addEventListener("click", clearItem)

function textInput(e) {
    e.preventDefault()

    const value = inputText.value
    const id = new Date().getTime.toString()

    // date variable----
    let tempDate = new Date()
    let monthToday = tempDate.getMonth().toString()
    let year = tempDate.getFullYear().toString()
    let days = tempDate.getDate().toString()

    let hours = tempDate.getHours(12).toString()
    let mins = tempDate.getMinutes().toString()
    let zone = ""


    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      let month = months[monthToday]

      if (hours => 13) {
        // console.log("hello");
       zone = "pm".toString()

      }
      else if(hours < 13){
        zone = "am".toString()
      }

    //--xx- date variable--XX--
      async function getMeaning() {

 
        // --------------dictionary----
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
        const options = {
	        method: 'GET',
	        headers: {
		        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
		        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
	        }
        };

        try {
	        // const response = await fetch(url);
	        // const result = await response.text();
	        // console.log(`${result.meanings}`);
            fetch(url)
            .then( res => res.json())
            .then(data => {

                // console.log(data);

                const dictionaryData = data
                // console.log(dictionaryData[0].meanings[0].definitions[0]);

                defineResult = dictionaryData[0].meanings[0].definitions[0].definition

                // JSON.stringify(defineResult, null);

                // thisResult = new Array(defineResult)

                // console.log(thisResult);
                
                const element = document.createElement("article")
                element.classList.add("input-result")
                const attrib = document.createAttribute("data-id")
                attrib.value.id
                element.setAttributeNode(attrib)
                
                element.innerHTML = `
                <div class="question-box">
                <p class="title">${value}</p>
                <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                </div>
        
                <div class="bot-response">
                    <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                    <p class="bot-title">"${defineResult}"</p>
                </div>
                
                <div class="date-box">
                <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                </div>`
        
                
                list.appendChild(element)
        
                let utterResponse = new SpeechSynthesisUtterance(defineResult)
                utterResponse.volume = volumeRate
                synths.speak(utterResponse)

            })

        } catch (error) {
	        console.error(error);

        }

        botDisplay.classList.add("hide-bot")

      }


    //   ------------news API------------------


    async function newApi() {

        const newsKey = 'f5bc5c799ed74068bae6486523fed394'


        const url = `https://newsapi.org/v2/top-headlines?${value}&apiKey=f5bc5c799ed74068bae6486523fed394`;
        const options = {
	        method: 'GET',
	        headers: {
		        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
		        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
	        }
        };

        try {
	        // const response = await fetch(url);
	        // const result = await response.text();
	        // console.log(`${result.meanings}`);
            fetch(url)
            .then( res => res.json())
            .then(data => {

                // console.log(data);

                const newsData = data
                console.log(newsData);

                newsResult = dictionaryData[0].meanings[0].definitions[0].definition

                // JSON.stringify(defineResult, null);

                // thisResult = new Array(defineResult)

                // console.log(thisResult);
                
                const element = document.createElement("article")
                element.classList.add("input-result")
                const attrib = document.createAttribute("data-id")
                attrib.value.id
                element.setAttributeNode(attrib)
                
                element.innerHTML = `
                <div class="question-box">
                <p class="title">${value}</p>
                <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                </div>
        
                <div class="bot-response">
                    <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                    <p class="bot-title">"${defineResult}"</p>
                </div>
                
                <div class="date-box">
                <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                </div>`
        
                
                list.appendChild(element)
        
                let utterResponse = new SpeechSynthesisUtterance(defineResult)
                utterResponse.volume = volumeRate
                synths.speak(utterResponse)

            })

        } catch (error) {
	        console.error(error);
        }
        

    }


    // CHAT OPEN AI API------------------------


    async function getMessage() {
        
            // console.log("try gtp");
           // -------------- rapid api chatbot WAIFU API----
           const url = `https://waifu.p.rapidapi.com/path?user_id=sample_user_id&message=${value}&from_name=Boy&to_name=Girl&situation=Girl%20loves%20Boy.&translate_from=auto&translate_to=auto`;
           const options = {
               method: 'POST',
               headers: {
                   'content-type': 'application/json',
                   'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                   'X-RapidAPI-Host': 'waifu.p.rapidapi.com'
               },
               body: {}
           };
           
           try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(url);

               const element = document.createElement("article")
               element.classList.add("input-result")
               const attrib = document.createAttribute("data-id")
               attrib.value.id
               element.setAttributeNode(attrib)
               
               element.innerHTML = `
               <div class="question-box">
               <p class="title">${value}</p>
               <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
               </div>
       
               <div class="bot-response">
                   <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                   <p class="bot-title">${result}</p>
               </div>
               
               <div class="date-box">
               <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
               </div>`
       
               
               list.appendChild(element)
       
               let utterResponse = new SpeechSynthesisUtterance(result)
               utterResponse.volume = volumeRate
               synths.speak(utterResponse)


           } catch (error) {
               console.error(error);
           }


// -----xxx--------- rapid api chatbot----
        
         
            
    }
        
    // CHAT OPEN AI API--------xxx------------------
        


    const otherResponse = ["hi there what can I do for you", "good day how are your doing today", 
                        "yo!.. hi ask me something", "ask some question", ]

    
 let getRandom = Math.floor(Math.random() * otherResponse.length)


    // if (value.toLowerCase().includes("hi") || value.toLowerCase().includes("hello") || value.toLowerCase().includes("good day") 
    //     || value.toLowerCase().includes("good morning") || value.toLowerCase().includes("good evening")) {

        

    //     response = getMessage()
    //     // let utterResponse = new SpeechSynthesisUtterance(otherResponse[getRandom])
    //     // synths.speak(utterResponse)
    //     // console.log(response);

    // }

     
    if (value.toLowerCase().includes("what is your contact") || value.toLowerCase().includes("your number") 
    || value.toLowerCase().includes("contact")) {

        response = `the developer mobile number is 09157548607 (globe-sim) & 09602780391 \
        (smart-sim) you can also email at tribecaster1@gmail.com or visit his website just click 
        the button. <button><a href="https://ryansy2020.github.io/mytv.github.io/"> got to website </a></button>`
        // console.log(response);

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)

    }
    else if (value.toLowerCase().includes("about tribeBot") || value.toLowerCase().includes("developer info") ||
    value.toLowerCase().includes("about ryan s olfindo") || value.toLowerCase().includes("tribebot") 
    || value.toLowerCase().includes("about the developer") || value.toLowerCase().includes("developer") 
    || value.toLowerCase().includes("about") 
    ) {
        
        response = `tribeBot is a demo version of ChatBot system and an English Dictionary.  that developed by Ryan Olfindo
        this program still under maintenance and not finish yet. where you could ask some question`
        
        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("your address") || value.toLowerCase().includes("developer address") || 
    value.toLowerCase().includes("ryan olfindo address") || value.toLowerCase().includes("where do you live") ) {

        response = `No 34 Manga St. saint benedict Langka Marikina City Phillippines..
            or you can also contact him in his mobile number 09157548607 (globe-sim) & 09602780391 \
            (smart-sim) for more info `

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("are you human") || value.toLowerCase().includes("are you robot")) {

        response = `I am not a human; I am an AI language model. I am an artificial intelligence program created to produce language that resembles 
        that of a human based on patterns and information from a vast corpus of data. My goal is to engage in natural language dialogue with users 
        like you in order to help and inform them. 
        Please don't hesitate to inquire if you need anything or if you have any questions! `

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("what is your name") || value.toLowerCase().includes("how do I call you")|| value.toLowerCase().includes('tell your name')) {

        response = `just call me tribebot`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("how old are you") || value.toLowerCase().includes("what is your age")||
    value.toLowerCase().includes("give your age") || value.toLowerCase().includes("tell me your age")) {

        response = `I was created at the month of april 2023 and I'm still under maintenace do to some coding error and not fully functioning yet`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("who made you") || value.toLowerCase().includes("who created you")||
    value.toLowerCase().includes("who is your maker") || value.toLowerCase().includes("who is your developer")|| value.toLowerCase().includes("who is your creator")) {

        response = `my maker is Ryan Sy Olfindo`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("what is the name of your mother") || value.toLowerCase().includes("who is your mother")||
    value.toLowerCase().includes("what is your mother name")) {

        response = `I dont have any mother...but my father is Ryan Sy Olfindo`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("how many languages can you speak") || value.toLowerCase().includes("Which languages can you speak")||value.toLowerCase().includes("how many languages do you speak") ||
    value.toLowerCase().includes("what languages did you know") || value.toLowerCase().includes("what languages do you know") || value.toLowerCase().includes("do you know any languages") ||
    value.toLowerCase().includes("did you speak different languages") || value.toLowerCase().includes("can you speak different languages")) {

        response = `for the time being I only understand and speak one languages and that english but when then developer already fix his financial issue he will put some languages API on me `

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("what is the day today")|| value.toLowerCase().includes('what is today')) {

        const weeks = [
            'sunday',
            'monday',
            'tuesday',
            'wenesday',
            'thursday',
            'friday',
            'saturday',
          ];

        const date = new Date()
        const day = date.getDay()

        const today = weeks[day]

        response = `today is ${today}`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("what is the time now")|| value.toLowerCase().includes('what is time now')|| value.toLowerCase().includes('what is the time') ) {

        response = `the time now is ${hours}:${mins} ${zone}`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("what is the day yesterday")) {

        const weeks = [
            'sunday',
            'monday',
            'tuesday',
            'wenesday',
            'thursday',
            'friday',
            'saturday',
          ];

        const date = new Date()
        const day = date.getDay()

        const yesterday = weeks[day-1]

        response = `yesterday is ${yesterday}`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }
    
    else if(value.toLowerCase().includes("what is the date today") || value.toLowerCase().includes("give me the date today")) {

        const weeks = [
            'sunday',
            'monday',
            'tuesday',
            'wenesday',
            'thursday',
            'friday',
            'saturday',
          ];

        const date = new Date()
        const day = date.getDay()

        const toDay = weeks[day]

        response = `the date today is ${toDay} / ${month} / ${days} / ${year} * ${hours}:${mins} ${zone}`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("what is the meaning of")) {

        const cut = value.slice(23)
        console.log(cut);

                // --------------dictionary----
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${cut}`;
                const options = {
                    method: 'GET',
                    headers: {
                        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
                    }
                };
        
                try {
                    // const response = await fetch(url);
                    // const result = await response.text();
                    // console.log(`${result.meanings}`);
                    fetch(url)
                    .then( res => res.json())
                    .then(data => {
        
                        // console.log(data);
        
                        const dictionaryData = data
                        // console.log(dictionaryData[0].meanings[0].definitions[0]);
        
                        defineResult = dictionaryData[0].meanings[0].definitions[0].definition
        
                        // JSON.stringify(defineResult, null);
        
                        // thisResult = new Array(defineResult)
        
                        // console.log(thisResult);
                        
                        const element = document.createElement("article")
                        element.classList.add("input-result")
                        const attrib = document.createAttribute("data-id")
                        attrib.value.id
                        element.setAttributeNode(attrib)
                        
                        element.innerHTML = `
                        <div class="question-box">
                        <p class="title">${value}</p>
                        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                        </div>
                
                        <div class="bot-response">
                            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                            <p class="bot-title">"${defineResult}"</p>
                        </div>
                        
                        <div class="date-box">
                        <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                        </div>`
                
                        
                        list.appendChild(element)
                
                        let utterResponse = new SpeechSynthesisUtterance(defineResult)
                        utterResponse.volume = volumeRate
                        synths.speak(utterResponse)
        
                    })
        
                } catch (error) {
                    console.error(error);
                }

                botDisplay.classList.add("hide-bot")
    }

    else if(value.toLowerCase().includes("give me the meaning of")) {

        const cut3 = value.slice(22)
        console.log(cut3);

                // --------------dictionary----
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${cut3}`;
                const options = {
                    method: 'GET',
                    headers: {
                        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
                    }
                };
        
                try {
                    // const response = await fetch(url);
                    // const result = await response.text();
                    // console.log(`${result.meanings}`);
                    fetch(url)
                    .then( res => res.json())
                    .then(data => {
        
                        // console.log(data);
        
                        const dictionaryData = data
                        // console.log(dictionaryData[0].meanings[0].definitions[0]);
        
                        defineResult = dictionaryData[0].meanings[0].definitions[0].definition
        
                        // JSON.stringify(defineResult, null);
        
                        // thisResult = new Array(defineResult)
        
                        // console.log(thisResult);
                        
                        const element = document.createElement("article")
                        element.classList.add("input-result")
                        const attrib = document.createAttribute("data-id")
                        attrib.value.id
                        element.setAttributeNode(attrib)
                        
                        element.innerHTML = `
                        <div class="question-box">
                        <p class="title">${value}</p>
                        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                        </div>
                
                        <div class="bot-response">
                            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                            <p class="bot-title">"${defineResult}"</p>
                        </div>
                        
                        <div class="date-box">
                        <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                        </div>`
                
                        
                        list.appendChild(element)
                
                        let utterResponse = new SpeechSynthesisUtterance(defineResult)
                        utterResponse.volume = volumeRate
                        synths.speak(utterResponse)
        
                    })
        
                } catch (error) {
                    console.error(error);
                }
                botDisplay.classList.add("hide-bot")

    }

    else if(value.toLowerCase().includes("what is a")) {

        const cut2 = value.slice(9)
        console.log(cut2);

                // --------------dictionary----
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${cut2}`;
                const options = {
                    method: 'GET',
                    headers: {
                        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
                    }
                };
        
                try {
                    // const response = await fetch(url);
                    // const result = await response.text();
                    // console.log(`${result.meanings}`);
                    fetch(url)
                    .then( res => res.json())
                    .then(data => {
        
                        // console.log(data);
        
                        const dictionaryData = data
                        // console.log(dictionaryData[0].meanings[0].definitions[0]);
        
                        defineResult = dictionaryData[0].meanings[0].definitions[0].definition
        
                        // JSON.stringify(defineResult, null);
        
                        // thisResult = new Array(defineResult)
        
                        // console.log(thisResult);
                        
                        const element = document.createElement("article")
                        element.classList.add("input-result")
                        const attrib = document.createAttribute("data-id")
                        attrib.value.id
                        element.setAttributeNode(attrib)
                        
                        element.innerHTML = `
                        <div class="question-box">
                        <p class="title">${value}</p>
                        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                        </div>
                
                        <div class="bot-response">
                            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                            <p class="bot-title">"${defineResult}"</p>
                        </div>
                        
                        <div class="date-box">
                        <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                        </div>`
                
                        
                        list.appendChild(element)
                
                        let utterResponse = new SpeechSynthesisUtterance(defineResult)
                        utterResponse.volume = volumeRate
                        synths.speak(utterResponse)
        
                    })
        
                } catch (error) {
                    console.error(error);
                }

                botDisplay.classList.add("hide-bot")

    }

    else if(value.toLowerCase().includes("define") ||value.toLowerCase().includes("difine") ) {

        const cut4 = value.slice(6)
        console.log(cut4);

                // --------------dictionary----
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${cut4}`;
                const options = {
                    method: 'GET',
                    headers: {
                        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
                    }
                };
        
                try {
                    // const response = await fetch(url);
                    // const result = await response.text();
                    // console.log(`${result.meanings}`);
                    fetch(url)
                    .then( res => res.json())
                    .then(data => {
        
                        // console.log(data);
        
                        const dictionaryData = data
                        // console.log(dictionaryData[0].meanings[0].definitions[0]);
        
                        defineResult = dictionaryData[0].meanings[0].definitions[0].definition
        
                        // JSON.stringify(defineResult, null);
        
                        // thisResult = new Array(defineResult)
        
                        // console.log(thisResult);
                        
                        const element = document.createElement("article")
                        element.classList.add("input-result")
                        const attrib = document.createAttribute("data-id")
                        attrib.value.id
                        element.setAttributeNode(attrib)
                        
                        element.innerHTML = `
                        <div class="question-box">
                        <p class="title">${value}</p>
                        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                        </div>
                
                        <div class="bot-response">
                            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                            <p class="bot-title">"${defineResult}"</p>
                        </div>
                        
                        <div class="date-box">
                        <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                        </div>`
                
                        
                        list.appendChild(element)
                
                        let utterResponse = new SpeechSynthesisUtterance(defineResult)
                        utterResponse.volume = volumeRate
                        synths.speak(utterResponse)
        
                    })
        
                } catch (error) {
                    console.error(error);
                }

                botDisplay.classList.add("hide-bot")

    }

    else if(value.toLowerCase().includes("define") ||value.toLowerCase().includes("what is the definition of") ) {

        const cut5 = value.slice(25)
        console.log(cut5);

                // --------------dictionary----
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${cut5}`;
                const options = {
                    method: 'GET',
                    headers: {
                        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
                    }
                };
        
                try {
                    // const response = await fetch(url);
                    // const result = await response.text();
                    // console.log(`${result.meanings}`);
                    fetch(url)
                    .then( res => res.json())
                    .then(data => {
        
                        // console.log(data);
        
                        const dictionaryData = data
                        // console.log(dictionaryData[0].meanings[0].definitions[0]);
        
                        defineResult = dictionaryData[0].meanings[0].definitions[0].definition
        
                        // JSON.stringify(defineResult, null);
        
                        // thisResult = new Array(defineResult)
        
                        // console.log(thisResult);
                        
                        const element = document.createElement("article")
                        element.classList.add("input-result")
                        const attrib = document.createAttribute("data-id")
                        attrib.value.id
                        element.setAttributeNode(attrib)
                        
                        element.innerHTML = `
                        <div class="question-box">
                        <p class="title">${value}</p>
                        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                        </div>
                
                        <div class="bot-response">
                            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                            <p class="bot-title">"${defineResult}"</p>
                        </div>
                        
                        <div class="date-box">
                        <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                        </div>`
                
                        
                        list.appendChild(element)
                
                        let utterResponse = new SpeechSynthesisUtterance(defineResult)
                        utterResponse.volume = volumeRate
                        synths.speak(utterResponse)
        
                    })
        
                } catch (error) {
                    console.error(error);
                }

                botDisplay.classList.add("hide-bot")

    }

    else if(value.toLowerCase().includes("do you know how to") ) {

        const cut10 = value.slice(19)
        console.log(cut10);

                // --------------dictionary----
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${cut10}`;
                const options = {
                    method: 'GET',
                    headers: {
                        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
                    }
                };
        
                try {
                    // const response = await fetch(url);
                    // const result = await response.text();
                    // console.log(`${result.meanings}`);
                    fetch(url)
                    .then( res => res.json())
                    .then(data => {
        
                        // console.log(data);
        
                        const dictionaryData = data
                        // console.log(dictionaryData[0].meanings[0].definitions[0]);
        
                        defineResult = dictionaryData[0].meanings[0].definitions[0].definition
        
                        // JSON.stringify(defineResult, null);
        
                        // thisResult = new Array(defineResult)
        
                        // console.log(thisResult);
                        
                        const element = document.createElement("article")
                        element.classList.add("input-result")
                        const attrib = document.createAttribute("data-id")
                        attrib.value.id
                        element.setAttributeNode(attrib)
                        
                        element.innerHTML = `
                        <div class="question-box">
                        <p class="title">${value}</p>
                        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                        </div>
                
                        <div class="bot-response">
                            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                            <p class="bot-title">"${defineResult}"</p>
                        </div>
                        
                        <div class="date-box">
                        <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                        </div>`
                
                        
                        list.appendChild(element)
                
                        let utterResponse = new SpeechSynthesisUtterance(defineResult)
                        utterResponse.volume = volumeRate
                        synths.speak(utterResponse)
        
                    })
        
                } catch (error) {
                    console.error(error);
                }

                botDisplay.classList.add("hide-bot")

    }

    else if(value.toLowerCase().includes("do you know") ) {

        const cut10 = value.slice(12)
        console.log(cut10);

                // --------------dictionary----
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${cut10}`;
                const options = {
                    method: 'GET',
                    headers: {
                        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
                    }
                };
        
                try {
                    // const response = await fetch(url);
                    // const result = await response.text();
                    // console.log(`${result.meanings}`);
                    fetch(url)
                    .then( res => res.json())
                    .then(data => {
        
                        // console.log(data);
        
                        const dictionaryData = data
                        // console.log(dictionaryData[0].meanings[0].definitions[0]);
        
                        defineResult = dictionaryData[0].meanings[0].definitions[0].definition
        
                        // JSON.stringify(defineResult, null);
        
                        // thisResult = new Array(defineResult)
        
                        // console.log(thisResult);
                        
                        const element = document.createElement("article")
                        element.classList.add("input-result")
                        const attrib = document.createAttribute("data-id")
                        attrib.value.id
                        element.setAttributeNode(attrib)
                        
                        element.innerHTML = `
                        <div class="question-box">
                        <p class="title">${value}</p>
                        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                        </div>
                
                        <div class="bot-response">
                            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                            <p class="bot-title">"${defineResult}"</p>
                        </div>
                        
                        <div class="date-box">
                        <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                        </div>`
                
                        
                        list.appendChild(element)
                
                        let utterResponse = new SpeechSynthesisUtterance(defineResult)
                        utterResponse.volume = volumeRate
                        synths.speak(utterResponse)
        
                    })
        
                } catch (error) {
                    console.error(error);
                }

                botDisplay.classList.add("hide-bot")

    }

    else if(value.toLowerCase().includes("what is")) {

        const cut6 = value.slice(7)
        console.log(cut6);

                // --------------dictionary----
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${cut6}`;
                const options = {
                    method: 'GET',
                    headers: {
                        // 'X-RapidAPI-Key': 'abcf01d0c2msh33d7d24ba7ad992p16793fjsn356d680a0dc0',
                        'X-RapidAPI-Host': 'master-dictionary.p.rapidapi.com'
                    }
                };
        
                try {
                    // const response = await fetch(url);
                    // const result = await response.text();
                    // console.log(`${result.meanings}`);
                    fetch(url)
                    .then( res => res.json())
                    .then(data => {
        
                        // console.log(data);
        
                        const dictionaryData = data
                        // console.log(dictionaryData[0].meanings[0].definitions[0]);
        
                        defineResult = dictionaryData[0].meanings[0].definitions[0].definition
        
                        // JSON.stringify(defineResult, null);
        
                        // thisResult = new Array(defineResult)
        
                        // console.log(thisResult);
                        
                        const element = document.createElement("article")
                        element.classList.add("input-result")
                        const attrib = document.createAttribute("data-id")
                        attrib.value.id
                        element.setAttributeNode(attrib)
                        
                        element.innerHTML = `
                        <div class="question-box">
                        <p class="title">${value}</p>
                        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
                        </div>
                
                        <div class="bot-response">
                            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
                            <p class="bot-title">"${defineResult}"</p>
                        </div>
                        
                        <div class="date-box">
                        <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
                        </div>`
                
                        
                        list.appendChild(element)
                
                        let utterResponse = new SpeechSynthesisUtterance(defineResult)
                        utterResponse.volume = volumeRate
                        synths.speak(utterResponse)
        
                    })
        
                } catch (error) {
                    console.error(error);
                }
                
                botDisplay.classList.add("hide-bot")

    }

    // ------------------- essential question----
    else if(value.toLowerCase().includes("how are you") || value.toLowerCase().includes("how are you doing") || 
    value.toLowerCase().includes("how are you going") || value.toLowerCase().includes("are you ok") || value.toLowerCase().includes("are you fine today") ) {

        response = `I'm really fine today thanks... `

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("what up") || value.toLowerCase().includes("yo! whats up") || 
    value.toLowerCase().includes("what's up") || value.toLowerCase().includes("yo thier") || value.toLowerCase().includes("hi thier") ) {

        response = `is such a goodday today`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("good morning") || value.toLowerCase().includes("good evening") || 
    value.toLowerCase().includes("good afternoon") || value.toLowerCase().includes("good bye") || value.toLowerCase().includes("good night") ) {

        response = `have a goodday to you to`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("how can you help me") || value.toLowerCase().includes("what can you do") || value.toLowerCase().includes("how can you help me") || 
    value.toLowerCase().includes("what else can you do")) {

        response = `sorry I cannot help you a lot I only created to ask some question and my response is still not function verywell`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("tell me something")) {

        response = `sorry I cannot help you a lot I only created to ask some question and my response is still not function verywell`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

    else if(value.toLowerCase().includes("hello")|| value.toLowerCase().includes("hi") ) {

        response = `how can I help you`

        let utterResponse = new SpeechSynthesisUtterance(response)
        utterResponse.volume = volumeRate
        synths.speak(utterResponse)
    }

     // ------xx------------- essential question---xx-

    else {
        getMeaning()
        // getMessage()

            let utterResponse = new SpeechSynthesisUtterance(response)
            utterResponse.volume = volumeRate
            synths.speak(utterResponse)
    }


    if (value !== "" && editFlag === false) {
        // console.log("question is added");
        
        const element = document.createElement("article")
        element.classList.add("input-result")
        const attrib = document.createAttribute("data-id")
        attrib.value.id
        element.setAttributeNode(attrib)
        
        element.innerHTML = `
        <div class="question-box">
        <p class="title">${value}</p>
        <img src="./images/acct icon.svg" width="40" alt="" class="acct-logo">
        </div>

        <div class="bot-response">
            <img src="./images/tribebot logo3.svg" width="40" alt="" class="chat-logo">
            <p class="bot-title">${response}</p>
        </div>
        
        <div class="date-box">
                <span>${month} / ${days} / ${year} </span> * <span>${hours}:${mins} ${zone} </span>
        </div>`

        
        list.appendChild(element)
  

        const containerHeight = container.getBoundingClientRect().height
         const listheight = list.getBoundingClientRect().height
         let position = element.offsetHeight -listheight -listheight


        // const inputResult = document.querySelector(".input-result")

        // if (listheight > containerHeight ) {
            
        //    container.style.height = `${listheight}px`

        // }

        scrollTo({
            left:0,
            top:-position,
        })

        // container.scrollBy({
        //     left: 0,
        //     top: -position
        // })
        // list.style.height = `${position}px`
        
        setBackFromDefault()

        clearInterval(rollReponse)
        const inputResult = document.querySelectorAll(".input-result")
        const title = document.querySelector(".title")

        if (inputResult.length > 0) {
            botDisplay.classList.add("hide-bot")
        }



    }
    else if (value !== "" && editflag === true ) {
        console.log("edit question");
    }
    else {

        console.log("ask me");
      
    }
    


}


// -----------delete btn------------

const alertBox = document.querySelector(".alert-container")



function clearItem() {
    
    // const result = e.currentTarget.parentElement.parentElement.parentElement.parentElement
    //                 .parentElement.parentElement.parentElement.children[1].children[0]
    //                 .children[0].children[0].children[0].children[0].children[0] 

    const inputResult = document.querySelectorAll(".input-result")
    const title = document.querySelector(".title")

    if (inputResult.length > 0) {
        
        inputResult.forEach(function (items) {
        
            list.removeChild(items)
            
            alertBox.classList.add("show-alert")

            // let utterResponse = new SpeechSynthesisUtterance("All Items is already deleted.. Now you can ask more question")
            // synths.speak(utterResponse)

            setTimeout(() => {

                alertBox.classList.remove("show-alert")
                botDisplay.classList.remove("hide-bot")
                let rollReponse = setInterval(chatroll, 50000)
                
       
            }, 5000);

           
                deltBtn.classList.add("click-clear")

                setTimeout(() => {
                    deltBtn.classList.remove("click-clear")
                    
                }, 2000);

            setBackFromDefault()

        })
    
        // console.log(inputResult);      
    }

}

// -----------setback from default
function setBackFromDefault() {
    
   inputText.value = ""
   let editFlag = false
   let editId = ""


   
}

// speeach recognition

const startBtn = document.querySelector(".mic-btn")
const micMOdal = document.querySelector(".mic-modal")

window.SpeechRecognition = window.speechRecognition || webkitSpeechRecognition

const recognition = new window.SpeechRecognition()
recognition.continuous = true
recognition.lang = "en-US"
recognition.inputResult = false
recognition.maxAlternatives = 1

// speech synthesis

const synth = window.speechSynthesis


startBtn.addEventListener("click", function() {
    recognition.start()
    micMOdal.classList.add("show-micmodal")

    setInterval(() => {

        recognition.stop()

        micMOdal.classList.remove("show-micmodal")

        console.log("goddbye");
    }, 6000);
    

    console.log("hi");
})

let utter = new SpeechSynthesisUtterance("Hi, how are you")
utter.onend = () => {
    recognition.start()
}

recognition.onresult = (e)=>{
    // console.log(e.result[e.result.length-1][0].transcript); 

    const transcript = e.results[event.results.length - 1][0].transcript.trim();

    // if (transcript === "hello") {
    //     console.log("oi gago ka");
    //     recognition.stop()
    //     utter.text = "hi gago"

    //     synth.speak(utter)  
    // }
    // else if(transcript === "goodbye"){
    //     recognition.stop()
    //     utter.text = "ok wla ka jowa"
    //     synth.speak(utter)  
        
    // }

    if (transcript === "about developer" || transcript === "about ryan") {
        recognition.stop()

        response = `tribeBot is a demo version of chatBot system. that developed by Ryan Olfindo
        this program still under maintenance and not finish yet. where you could ask some question`
        
        let utterResponse = new SpeechSynthesisUtterance(response)
        synths.speak(utterResponse)

        // utter.text = 
    }

    if (transcript === "your contact") {
        
        recognition.stop()

        response = `the developer mobile number is 09157548607 (globe-sim) & 09602780391 \
        (smart-sim) you can also email at tribecaster1@gmail.com or visit his website just click 
        the button. <button><a href="https://ryansy2020.github.io/mytv.github.io/"> got to website </a></button>`
        // console.log(response);

        let utterResponse = new SpeechSynthesisUtterance(response)
        synths.speak(utterResponse)

    }

    if (transcript === "what is the developer address" || transcript === "what is your address") {
        
        recognition.stop()

        response = `No 34 Manga St. saint benedict Langka Marikina City Phillippines..
        or you can also contact him in his mobile number 09157548607 (globe-sim) & 09602780391 \
        (smart-sim) for more info `

        let utterResponse = new SpeechSynthesisUtterance(response)
        synths.speak(utterResponse)

    }

    if (transcript ===  "hi" || transcript === "hello" || transcript === "good day") {
        
        recognition.stop()

        response = "hi there what can I do for you"

        let utterResponse = new SpeechSynthesisUtterance(response)
        synths.speak(utterResponse)

    }

    else {

        getMessage()

    }


}