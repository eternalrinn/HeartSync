//MESSAGE CONTENT HIDER
const showChatContent = document.querySelector('#chat-content');
let Clicked = true;

let showChat = function(){
    if (Clicked){
        showChatContent.style.display = 'flex';
        document.querySelector('.chat').classList.add('chatting');
        Clicked = false;
    }
    else{
        removeChatting();
        showChatContent.style.display = 'none';
        Clicked = true;
    }
}
//MESSAGE CONTENT HIDER

//GLOBAL CONTENT HIDER
const showGlobalChat = document.querySelector('#global-content');
let GContentClicked = true;

let showGChat = function(){
    if (GContentClicked){
        showGlobalChat.style.display = 'flex';
        showCreate.style.display = 'none';
        document.querySelector('.global-messages .chat:nth-child(2)').classList.add('chatting');
        GContentClicked = false;
    }
    else{
        removeChatting();
        showGlobalChat.style.display = 'none';
        GContentClicked = true;
    }
}
//GLOBAL CONTENT HIDER

//CREATE CHAT HIDER
const showCreate = document.querySelector('#create-content');
let CreateClicked = true;

let showCreateChat = function(){
    if (GContentClicked){
        showCreate.style.display = 'flex';
        showGlobalChat.style.display = 'none';
        document.querySelector('.global-messages .chat:nth-child(1)').classList.add('chatting');
        GContentClicked = false;
    }
    else{
        removeChatting();
        showCreate.style.display = 'none';
        GContentClicked = true;
    }
}
//CREATE CHAT HIDER

// REMOVES ACTIVE-CHAT
function removeActiveClass() {
    const allMessages = document.querySelectorAll('.chats-selector .messages');
    allMessages.forEach(message => message.classList.remove('active-chat'));
}
function removeChatting() {
    const Chatting = document.querySelectorAll('.chat');
    Chatting.forEach(message => message.classList.remove('chatting'));
}

// GLOBAL LIST HIDER
const showGlobalContent = document.querySelector('#global-messages');
let globalClicked = false;

let showGlobal = function() {
    removeChatting();
    removeActiveClass();
    
    if (!globalClicked) {
        showGlobalContent.style.display = 'flex';
        showMessages.style.display = 'none'; 
        showChatContent.style.display = 'none';
        showCreate.style.display = 'none';
        globalClicked = true;
        messageClicked = false; 

        document.querySelector('.chats-selector .messages:nth-child(2)').classList.add('active-chat');
    } else {
        showGlobalContent.style.display = 'none';
        showGlobalChat.style.display = 'none';
        GContentClicked = true;
        globalClicked = false;
    }
}
// GLOBAL LIST HIDER

// MESSAGE LIST HIDER
const showMessages = document.querySelector('#personal-messages');
let messageClicked = false;

let showMessage = function() {
    removeChatting();
    removeActiveClass();
    if (!messageClicked) {
        showMessages.style.display = 'flex';
        showGlobalContent.style.display = 'none'; 
        showGlobalChat.style.display = 'none';
        showCreate.style.display = 'none';
        GContentClicked = true;
        messageClicked = true;
        globalClicked = false; 
        
        document.querySelector('.chats-selector .messages:nth-child(1)').classList.add('active-chat');
    } else {
        showMessages.style.display = 'none';
        showChatContent.style.display = 'none';
        messageClicked = false;
    }
}
// MESSAGE LIST HIDER



// STORY SLIDER
const slider = () => {
    const storyList = document.querySelector(".stories");
    const sliderButtons = document.querySelectorAll(".left-arrow, .right-arrow");


    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "last-slide" ? 1 : -1; 
            const scrollAmount = storyList.clientWidth * direction / 2;
            storyList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

};

slider();
// STORY SLIDER


//FRIEND ADDLIST HIDER
function hideFriendCard(element) {
    element.closest('.addfriends-card').style.display = 'none';
}

//FRIEND ADDLIST HIDER


// FRIENDS SLIDER
const friendslider = () => {
    const storyList = document.querySelector(".addfriends-slider");
    const sliderButtons = document.querySelectorAll(".left-arrow, .right-arrow");


    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "friendlast-slide" ? 1 : -1; 
            const scrollAmount = storyList.clientWidth * direction / 2;
            storyList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

};

friendslider();
// FRIENDS SLIDER


//DISAPPEAR SLIDER WHEN NO MORE LIST
function hideFriendCard(button) {
    button.closest('.addfriends-card').style.display = 'none';
    checkCardsVisibility();
}

function checkCardsVisibility() {
    const addfriendsCards = document.querySelectorAll('.addfriends-card');
    let anyVisible = false;
    addfriendsCards.forEach(card => {
        if (card.style.display !== 'none') {
            anyVisible = true;
            return; 
        }
    });
    const slider = document.querySelector('.addfriends');
    if (!anyVisible) {
        slider.style.display = 'none';
    }
}

//DISAPPEAR SLIDER WHEN NO MORE LIST



// HEART REACT POST
const heartIcons = document.querySelectorAll('.left-reacts .reacts i.fa-heart');

heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('fa-regular');
        this.classList.toggle('fa-solid');

        const counter = this.closest('.post').querySelector('.counter p:first-child');

        // Update the counter
        const count = parseInt(counter.textContent.replace(',', '')); 
        if (this.classList.contains('fa-regular')) {

            counter.textContent = addCommas(count - 1);
        } else {

            counter.textContent = addCommas(count + 1);
        }
    });
});

// Function to add commas to a number for displaying in counter
function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// HEART REACT POST


//SAVE REACTION
const saveIcons = document.querySelectorAll('.react-buts .reacts i.fa-bookmark');


saveIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      
        this.classList.toggle('fa-regular');
        this.classList.toggle('fa-solid');
    });
});
//SAVE REACTION



//PROFILE FILTER 
document.addEventListener('DOMContentLoaded', function() {
    const navPosts = document.getElementById('nav-posts');
    const navVideos = document.getElementById('nav-videos');
    const navArchived = document.getElementById('nav-archived');
    const navSaved = document.getElementById('nav-saved');
    const profileGallery = document.getElementById('profile-gallery');
    const profileVideos = document.getElementById('profile-videos');
    const profileArchived = document.getElementById('profile-archived');
    const profileSaved = document.getElementById('profile-saved');
    const postNavs = document.querySelectorAll('.post-nav');

    function setActiveNav(clickedNav) {
        postNavs.forEach(nav => {
            nav.classList.remove('active-post');
        });
        clickedNav.classList.add('active-post');
    }

    navPosts.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveNav(navPosts);
        profileGallery.classList.add('flex');
        profileVideos.classList.remove('flex');
        profileArchived.classList.remove('flex');
        profileSaved.classList.remove('flex');
        profileGallery.style.display = 'flex';
        profileVideos.style.display = 'none';
        profileArchived.style.display = 'none';
        profileSaved.style.display = 'none';
    });

    navArchived.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveNav(navArchived);
        profileGallery.classList.remove('flex');
        profileVideos.classList.remove('flex');
        profileArchived.classList.add('flex');
        profileSaved.classList.remove('flex');
        profileGallery.style.display = 'none';
        profileVideos.style.display = 'none';
        profileArchived.style.display = 'flex';
        profileSaved.style.display = 'none';
    });

    navSaved.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveNav(navSaved);
        profileGallery.classList.remove('flex');
        profileVideos.classList.remove('flex');
        profileArchived.classList.remove('flex');
        profileSaved.classList.add('flex');
        profileGallery.style.display = 'none';
        profileVideos.style.display = 'none';
        profileArchived.style.display = 'none';
        profileSaved.style.display = 'flex';
    });

    navVideos.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveNav(navVideos);
        profileGallery.classList.remove('flex');
        profileVideos.classList.add('flex');
        profileArchived.classList.remove('flex');
        profileSaved.classList.remove('flex');
        profileGallery.style.display = 'none';
        profileVideos.style.display = 'flex';
        profileArchived.style.display = 'none';
        profileSaved.style.display = 'none';
    });

    // Initialize with the gallery showing
    profileGallery.style.display = 'flex';
});

//PROFILE FILTER REACTION



//LOCAL STORAGE

const data = {username : "eternalrinn", password: "cel12345" }
localStorage.setItem('userdata', JSON.stringify(data))

function Login(){
    var userInput = document.getElementById('userBox').value
    var userPassword = document.getElementById('passBox').value
    var userData = localStorage.getItem('userdata')
    var user_Data = JSON.parse(userData)

    console.log(userInput + userPassword)

    if (user_Data.username === userInput && user_Data.password === userPassword){
        document.getElementById('login-form').setAttribute('action', 'Admin HTML/admin.html');
    }
    else{
        document.getElementById('login-form').setAttribute('action', 'User HTML/home.html');
    }
}


//LOCAL STORAGE



//SIGNUP AND LOGIN
document.addEventListener("DOMContentLoaded", function() {
    const createAccountLink = document.getElementById("createAccountLink");
    const loginLink = document.getElementById("loginLink");
    const loginForm = document.getElementById("login-form");
    const signUpForm = document.getElementById("sign-up");

    createAccountLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        signUpForm.style.display = "flex";
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        signUpForm.style.display = "none";
        loginForm.style.display = "flex";
    });
});

//SIGNUP AND LOGIN



