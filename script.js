// Get the .sticky-header element
var stickyHeader = document.querySelector('.header-2');
var stickyHeader_2 = document.querySelector('.header-3')

// Get the initial position of the .sticky-header element
const stickyHeaderOffset = stickyHeader.offsetTop;

// Function to handle scroll event
function handleScroll() {
    console.log(window.pageYOffset > stickyHeaderOffset)
    if (window.pageYOffset > stickyHeaderOffset) {
        stickyHeader.classList.add('fixed');
        stickyHeader_2.classList.add('sticky')
    } else {
        stickyHeader.classList.remove('fixed');
        stickyHeader_2.classList.remove('sticky')
    }
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);

var cross = document.querySelector(".close-outline")

cross.addEventListener("click", function () {
    document.querySelector(".hamburger-screen").style.display = "none"
})

var hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click",function(){
    document.querySelector(".hamburger-screen").style.display = "flex"
})

function progress_bar(){
    var progressbar = document.querySelector(".progress-bar")
    var mainVideo = document.querySelector(".mainVideo")

    mainVideo.addEventListener("timeupdate", e=>{
        let {currentTime, duration} = e.target;
        let percent = (currentTime/duration) * 100;
        progressbar.style.width = percent + "%";
    })
}
progress_bar()

function video_change(){
    var all_func = [circletosearch,livetranslate,interpreter,noteassist,generativeedit,chatassist]
    globalThis.forward = document.querySelector(".chevron-forward-circle-outline")
    globalThis.backward = document.querySelector(".chevron-back-circle-outline")
    globalThis.counter = 0

    function forcounter(){
        counter++;
        return counter;
    }

    function back_counter(){
        counter--;
        return counter;
    }

    forward.addEventListener("click", function(){
        var counter_1 = forcounter()
        all_func[counter_1]();
    })

    backward.addEventListener("click",function(){
        var counter_2 = back_counter()
        all_func[counter_2]();
    })
}
video_change()

var selected_src = {"https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-circle-to-search-thumbnail-active.jpg?imbypass=true":"https://images.samsung.com/is/content/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-circle-to-search-v2.webm?imbypass=true",
        "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-live-translate-thumbnail-active.jpg?imbypass=true":"https://images.samsung.com/is/content/samsung/assets/us/smartphones/galaxy-s24-ultra/videos/galaxy-s24-ultra-highlights-overview-live-translate-a.webm?imbypass=true",
        "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-thumbnail-active-tb-v2.jpg?imbypass=true":"https://images.samsung.com/is/content/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-v2.webm?imbypass=true",
        "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-thumbnail-active-tb.jpg?imbypass=true":"https://images.samsung.com/is/content/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-v2.webm?imbypass=true",
        "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-photo-assist-thumbnail-active-tb.jpg?imbypass=true":"https://images.samsung.com/is/content/samsung/assets/us/smartphones/galaxy-s24-ultra/videos/galaxy-s24-ultra-highlights-overview-photo-assist.webm?imbypass=true",
        "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-chat-assist-thumbnail-active.jpg?imbypass=true":"https://images.samsung.com/is/content/samsung/assets/us/smartphones/galaxy-s24-ultra/videos/Galaxy-S24-Ultra-Highlights-Overview-Chat-Assist.mp4?imbypass=true"}

    var circletosearchimg  = document.querySelector(".Circle-to-search>img")
    var livetranslateimg = document.querySelector(".live-translate>img")
    var interpreterimg = document.querySelector(".Interpreter>img")
    var noteassistimg = document.querySelector(".Note-Assist>img")
    var generativeeditimg = document.querySelector(".Generative-Edit>img")
    var chatassistimg = document.querySelector(".Chat-Assist>img")
    var mainVideo = document.querySelector(".mainVideo")
    var featuretextstrong = document.querySelector(".feature-text > strong")
    var featuretextspan = document.querySelector(".feature-text > span")
    var featuretextbutton = document.querySelector(".feature-text > button")
function feature_element_change(){
    circletosearchimg.addEventListener("click", function(){
        circletosearch()
    })

    livetranslateimg.addEventListener("click", function(){
        livetranslate()
    })

    interpreterimg.addEventListener("click", function(){
        interpreter()
    })

    noteassistimg.addEventListener("click", function(){
        noteassist()
    })

    generativeeditimg.addEventListener("click", function(){
        generativeedit()
    })

    chatassistimg.addEventListener("click", function(){
        chatassist()
    })
}

feature_element_change()

function circletosearch(){
    var src = selected_src["https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-circle-to-search-thumbnail-active.jpg?imbypass=true"]
    mainVideo.src = src;
    circletosearchimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-circle-to-search-thumbnail-active.jpg?imbypass=true";
    livetranslateimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-live-translate-thumbnail-tb.jpg?imbypass=true"
    interpreterimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-thumbnail-tb-v2.jpg?imbypass=true"
    noteassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-thumbnail-tb.jpg?imbypass=true"
    mainVideo.playbackRate = 0.5
    counter = 0
    backward.style.display = "none"
    forward.style.display = "block"
    featuretextstrong.innerHTML = "Click to Search"
    featuretextspan.innerHTML = "Satisfy your curosity on the spot."
    featuretextbutton.style.display = "block"
    featuretextbutton.innerHTML = "Explore more"
}

function livetranslate(){
    var src = selected_src["https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-live-translate-thumbnail-active.jpg?imbypass=true"]
    mainVideo.src = src;
    livetranslateimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-live-translate-thumbnail-active.jpg?imbypass=true";
    circletosearchimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-circle-to-search-thumbnail-tb.jpg?imbypass=true"
    interpreterimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-thumbnail-tb-v2.jpg?imbypass=true"
    noteassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-thumbnail-tb.jpg?imbypass=true"
    mainVideo.playbackRate = 0.5
    counter = 1
    backward.style.display = "block"
    forward.style.display = "block"
    featuretextstrong.innerHTML = "Live Translate"
    featuretextspan.innerHTML = "Real easy, real-time translations over the phone"
    featuretextbutton.style.display = "block"
    featuretextbutton.innerHTML = "Explore more"
}

function interpreter(){
    var src = selected_src["https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-thumbnail-active-tb-v2.jpg?imbypass=true"]
    mainVideo.src = src;
    interpreterimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-thumbnail-active-tb-v2.jpg?imbypass=true";
    livetranslateimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-live-translate-thumbnail-tb.jpg?imbypass=true"
    noteassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-thumbnail-tb.jpg?imbypass=true";
    circletosearchimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-circle-to-search-thumbnail-tb.jpg?imbypass=true"
    circletosearchimg.style.display = "block"
    livetranslateimg.style.display = "block"
    generativeeditimg.style.display = "none"
    chatassistimg.style.display = "none"
    mainVideo.playbackRate = 0.5
    counter = 2
    backward.style.display = "block"
    forward.style.display = "block"
    featuretextstrong.innerHTML = "Interpreter"
    featuretextspan.innerHTML = "Translate face-to-face converstaions with ease"
    featuretextbutton.style.display = "none"

}

function noteassist(){
    var src = selected_src["https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-thumbnail-active-tb.jpg?imbypass=true"]
    mainVideo.src = src;
    noteassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-thumbnail-active-tb.jpg?imbypass=true";
    interpreterimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-thumbnail-tb-v2.jpg?imbypass=true"
    generativeeditimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-photo-assist-thumbnail-tb.jpg?imbypass=true"
    chatassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-chat-assist-thumbnail.jpg?imbypass=true"

    circletosearchimg.style.display = "none"
    livetranslateimg.style.display = "none"
    generativeeditimg.style.display = "block"
    chatassistimg.style.display = "block"
    mainVideo.playbackRate = 0.5
    counter = 3
    backward.style.display = "block"
    forward.style.display = "block"
    featuretextstrong.innerHTML = "Note Assist"
    featuretextspan.innerHTML = "Note smarter, not harder"
    featuretextbutton.style.display = "block"
    featuretextbutton.innerHTML = "Explore more"

}

function generativeedit(){
    var src = selected_src["https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-photo-assist-thumbnail-active-tb.jpg?imbypass=true"]
    mainVideo.src = src;
    generativeeditimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-photo-assist-thumbnail-active-tb.jpg?imbypass=true";
    noteassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-thumbnail-tb.jpg?imbypass=true";
    chatassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-chat-assist-thumbnail.jpg?imbypass=true"
    interpreterimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-thumbnail-tb-v2.jpg?imbypass=true"

    mainVideo.playbackRate = 0.5
    counter = 4
    backward.style.display = "block"
    forward.style.display = "block"
    featuretextstrong.innerHTML = "Generative Edit"
    featuretextspan.innerHTML = "Take a great pic. Then make it better."
    featuretextbutton.style.display = "block"
    featuretextbutton.innerHTML = "Explore more"
}

function chatassist(){
    var src = selected_src["https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-chat-assist-thumbnail-active.jpg?imbypass=true"]
    mainVideo.src = src;
    chatassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-chat-assist-thumbnail-active.jpg?imbypass=true";
    noteassistimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-note-assist-thumbnail-tb.jpg?imbypass=true";
    interpreterimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-interpreter-thumbnail-tb-v2.jpg?imbypass=true"
    generativeeditimg.src = "https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-overview-photo-assist-thumbnail-tb.jpg?imbypass=true"
    mainVideo.playbackRate = 0.5
    counter = 5
    backward.style.display = "block"
    forward.style.display = "none"
    featuretextstrong.innerHTML = "Chat Assist"
    featuretextspan.innerHTML = "Find the right words fast."
    featuretextbutton.style.display = "block"
    featuretextbutton.innerHTML = "Explore more"
}


function box_change(x){
    var box1 = document.querySelector(".box-1")
    var box2 = document.querySelector(".box-2")
    var box3 = document.querySelector(".box-3")
    
    var backbtn = document.querySelector(".chevron-back-circle-outline_box")
    var forwardbtn = document.querySelector(".chevron-forward-circle-outline_box")
    
    var dot1 = document.querySelector(".dot-1")
    var dot2 = document.querySelector(".dot-2")
    var dot3 = document.querySelector(".dot-3")
    
    var count = 0; // initialize count here
    
    backbtn.addEventListener("click", function(){
        count--; // decrement count
        if(count < 0) count = 2; // wrap around to last box if count goes below 0
        updateBoxes();
    });
    
    forwardbtn.addEventListener("click", function(){
        count++; // increment count
        if(count > 2) count = 0; // wrap around to first box if count goes above 2
        updateBoxes();
    });

    box1.style.display = "block"
    box2.style.display = "none"
    box3.style.display = "none"
    dot1.style.display = "flex"
    backbtn.style.display = "block"
    forwardbtn.style.display = "block"
    box1.style.width = "32.5%"
    box2.style.width = "32.5%"
    box3.style.width = "32.5%"
    box1.style.left = "14.5%"
    box2.style.left = "33.7"
    box3.style.right = "0"
    
    function updateBoxes(){
        switch(count){
            case 0:
                box1.style.display = "block"
                box2.style.display = "none"
                box3.style.display = "none"
                box1.style.left = "14.5%"
                box2.style.right = "0"
                box3.style.right = "0"
                dot1.style.opacity = "1"
                dot2.style.opacity = "0.5"
                dot3.style.opacity = "0.5"
                backbtn.style.display = "none"
                forwardbtn.style.display = "block"
                break;
            case 1:
                box1.style.display = "none"
                box2.style.display = "block"
                box3.style.display = "none"
                box1.style.left = "0"
                box2.style.left = "14.5%"
                box3.style.right= "0"
                dot1.style.opacity = "0.5"
                dot2.style.opacity = "1"
                dot3.style.opacity = "0.5"
                backbtn.style.display = "block"
                forwardbtn.style.display = "block"
                break;
            case 2:
                box1.style.display = "none"
                box2.style.display = "none"
                box3.style.display = "block"
                box1.style.left = "0"
                box2.style.right = "0"
                box3.style.left = "14.5%"
                dot1.style.opacity = "0.5"
                dot2.style.opacity = "0.5"
                dot3.style.opacity = "1"
                backbtn.style.display = "block"
                forwardbtn.style.display = "none"
                break;
        }
    }
}

function default_box(){
    var box1 = document.querySelector(".box-1")
    var box2 = document.querySelector(".box-2")
    var box3 = document.querySelector(".box-3")
    
    var backbtn = document.querySelector(".chevron-back-circle-outline_box")
    var forwardbtn = document.querySelector(".chevron-forward-circle-outline_box")
    
    var dot1 = document.querySelector(".dot")
    
    box1.style.display = "block"
    box2.style.display = "block"
    box3.style.display = "block"
    dot1.style.display = "none"
    backbtn.style.display = "none"
    forwardbtn.style.display = "none"
    box1.style.width = "32.5%"
    box2.style.width = "32.5%"
    box3.style.width = "32.5%"
    box1.style.left = "0"
    box2.style.left = "33.7"
    box3.style.right = "0"
}

if(window.innerWidth < 450){
    box_change()
}

window.onresize = function(){
    if (screen.availWidth > 450){
        default_box()
    }else{
        box_change()
    }
}
