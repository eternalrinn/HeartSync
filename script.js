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
        document.getElementById('login-form').setAttribute('action', 'Admin HTML/adminpanel.html');
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

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        signUpForm.style.display = "none";
        loginForm.style.display = "flex";
    });
    
    createAccountLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        signUpForm.style.display = "flex";
    });

});

//SIGNUP AND LOGIN

//SHOW MENU BAR
const showMenu = document.querySelector('#menu-bar');
let menuClicked = true;


let showMenuBar = function(){
    if (menuClicked){
        showMenu.style.display = 'flex';
        menuClicked = false;
        
    }
    else{
        showMenu.style.display = 'none';
        menuClicked = true;
    }
}
//SHOW MENU BAR

//SHOWREMOVE 
const showRemoveUser = document.querySelector('#popup');
let removeClicked = true;

let showRemove = function(){
    if (removeClicked){
        showRemoveUser.style.display = 'flex';
        showViewUser.style.display = 'none';
        removeClicked = false;
    }
    else{
        showRemoveUser.style.display = 'none';
        removeClicked = true;
    }
}
//SHOWREMOVE 


//SHOWBIO 
const showBio = document.querySelector('#popBio');
let bioClicked = true;

let showBioUser = function(){
    if (bioClicked){
        showBio.style.display = 'flex';
        showeditProfile.style.display = 'none';
        bioClicked = false;
    }
    else{
        showBio.style.display = 'none';
        bioClicked = true;
    }
}
//SHOWBIO 

//SHOWEDITPOFILE 
const showeditProfile = document.querySelector('#popeditProfile');
let editprofClicked = true;

let showProfileEdit = function(){
    if (editprofClicked){
        showeditProfile.style.display = 'flex';
        showBio.style.display = 'none';
        editprofClicked = false;
    }
    else{
        showeditProfile.style.display = 'none';
        editprofClicked = true;
    }
}
//SHOWEDITPOFILE 


//SHOWVIEW 
const showViewUser = document.querySelector('#popView');
let viewClicked = true;

let showUserProfile = function(){
    if (viewClicked){
        showViewUser.style.display = 'flex';
        showRemoveUser.style.display = 'none';
        viewClicked = false;
    }
    else{
        showViewUser.style.display = 'none';
        viewClicked = true;
    }
}
//SHOWVIEW 

//SHOWBAN 
const showBanUser = document.querySelector('#popBan');
let BanClicked = true;

let showuserBan = function(){
    if (BanClicked){
        showBanUser.style.display = 'flex';
        showRemoveAct.style.display = 'none';
        showViolate.style.display = 'none';
        BanClicked = false;
    }
    else{
        showBanUser.style.display = 'none';
        BanClicked = true;
    }
}
//SHOWBAN 

//SHOWREMOVE 
const showRemoveAct = document.querySelector('#popRemove');
let ActClicked = true;

let showactRemove = function(){
    if (ActClicked){
        showRemoveAct.style.display = 'flex';
        showBanUser.style.display = 'none';
        showViolate.style.display = 'none';
        ActClicked = false;
    }
    else{
        showRemoveAct.style.display = 'none';
        ActClicked = true;
    }
}

//SHOWREMOVE 

//SHOWSUSPEND 
const showSuspend = document.querySelector('#popSuspend');
let suspendClicked = true;

let suspendShow = function(){
    if (suspendClicked){
        showSuspend.style.display = 'flex';
        showBanUser.style.display = 'none';
        showRemoveAct.style.display = 'none';
        showViolate.style.display = 'none';
        suspendClicked = false;
    }
    else{
        showSuspend.style.display = 'none';
        suspendClicked = true;
    }
}

//SHOWSUSPEND 

//SHOWVIOLATE 
const showViolate = document.querySelector('#violation');
let violateClicked = true;

let violateShow = function(){
    if (violateClicked){
        showViolate.style.display = 'flex';
        showBanUser.style.display = 'none';
        showRemoveAct.style.display = 'none';
        violateClicked = false;
    }
    else{
        showViolate.style.display = 'none';
        violateClicked = true;
    }
}

//SHOWVIOLATE 

//SHOWUPDATE 
const showUpdate = document.querySelector('#popUpdate');
let UpdClicked = true;

let showUpdatePrompt = function(){
    if (UpdClicked){
        showUpdate.style.display = 'flex';
        showRevert.style.display = 'none';
        UpdClicked = false;
    }
    else{
        showUpdate.style.display = 'none';
        showUpdateLogs.style.display = 'none';
        UpdClicked = true;
    }
}

//SHOWUPDATE 

//SHOWREVERT 
const showRevert = document.querySelector('#popRevert');
let revClicked = true;

let showRevertPrompt = function(){
    if (revClicked){
        showRevert.style.display = 'flex';
        showUpdate.style.display = 'none';
        revClicked = false;
    }
    else{
        showRevert.style.display = 'none';
        showUpdateLogs.style.display = 'none';
        revClicked = true;
    }
}

//SHOWREVERT 


//CHANGE EMAIL HIDER
const showChangem = document.querySelector('#change-email');
let emailClicked = true;

let showChangeEmail = function(){
    if (emailClicked){
        showChangem.style.display = 'flex';
        showPassChange.style.display = 'none';
        showUsername.style.display = 'none';
        showNickname.style.display = 'none';
        showDeact.style.display = 'none';
        showBday.style.display = 'none';
        showVerCode.style.display = 'none';
        emailClicked = false;
    }
    else{
        showChangem.style.display = 'none';
        emailClicked = true;
    }
}
//CHANGE EMAIL HIDER

//CHANGE PASS HIDER
const showPassChange = document.querySelector('#change-password');
let passClicked = true;

let showChangePass = function(){
    if (passClicked){
        showPassChange.style.display = 'flex';
        showChangem.style.display = 'none';
        showUsername.style.display = 'none';
        showNickname.style.display = 'none';
        showDeact.style.display = 'none';
        showsendCode.style.display = 'none';
        showBday.style.display = 'none';
        showVerCode.style.display = 'none';
        passClicked = false;
    }
    else{
        showPassChange.style.display = 'none';
        passClicked = true;
    }
}
//CHANGE PASS HIDER

//CHANGE DEACT HIDER
const showDeact = document.querySelector('#deact-ac');
let deactClicked = true;

let showDeactAccount = function(){
    if (deactClicked){
        showDeact.style.display = 'flex';
        showUsername.style.display = 'none';
        showNickname.style.display = 'none';
        showChangem.style.display = 'none';
        showPassChange.style.display = 'none';
        showsendCode.style.display = 'none';
        showVerCode.style.display = 'none';
        deactClicked = false;
    }
    else{
        showDeact.style.display = 'none';
        deactClicked = true;
    }
}
//CHANGE DEACT HIDER

//CHANGE USERNAME HIDER
const showUsername = document.querySelector('#change-username');
let cusernameClicked = true;

let showeditUsername = function(){
    if (cusernameClicked){
        showUsername.style.display = 'flex';
        showNickname.style.display = 'none';
        showDeact.style.display = 'none';
        showChangem.style.display = 'none';
        showPassChange.style.display = 'none';
        showsendCode.style.display = 'none';
        showBday.style.display = 'none';
        showVerCode.style.display = 'none';
        cusernameClicked = false;
    }
    else{
        showUsername.style.display = 'none';
        cusernameClicked = true;
    }
}
//CHANGE USERNAME HIDER

//CHANGE NICKNAME HIDER
const showNickname = document.querySelector('#change-nickname');
let cnicknameClicked = true;

let showeditNickname = function(){
    if (cnicknameClicked){
        showNickname.style.display = 'flex';
        showUsername.style.display = 'none';
        showDeact.style.display = 'none';
        showChangem.style.display = 'none';
        showPassChange.style.display = 'none';
        showsendCode.style.display = 'none';
        showBday.style.display = 'none';
        showVerCode.style.display = 'none';
        cnicknameClicked = false;
    }
    else{
        showNickname.style.display = 'none';
        cnicknameClicked = true;
    }
}
//CHANGE NICKNAME HIDER

//CHANGE BDAY HIDER
const showBday = document.querySelector('#change-bday');
let cbdayClicked = true;

let showeditBday = function(){
    if (cbdayClicked){
        showBday.style.display = 'flex';
        showUsername.style.display = 'none';
        showNickname.style.display = 'none';
        showDeact.style.display = 'none';
        showChangem.style.display = 'none';
        showPassChange.style.display = 'none';
        showsendCode.style.display = 'none';
        showVerCode.style.display = 'none';
        cbdayClicked = false;
    }
    else{
        showBday.style.display = 'none';
        cbdayClicked = true;
    }
}
//CHANGE BDAY HIDER

//CHANGE SENDCODE HIDER
const showsendCode = document.querySelector('#change-code');
let ccodeClicked = true;

let showSendCode = function(){
    if (ccodeClicked){
        showsendCode.style.display = 'flex';
        showUsername.style.display = 'none';
        showNickname.style.display = 'none';
        showDeact.style.display = 'none';
        showPassChange.style.display = 'none';
        showBday.style.display = 'none';
        showVerCode.style.display = 'none';
        ccodeClicked = false;
    }
    else{
        showsendCode.style.display = 'none';
        ccodeClicked = true;
    }
}
//CHANGE SENDCODE HIDER

//CHANGE VERIFY CODE HIDER
const showVerCode = document.querySelector('#verify-code');
let cverCode = true;
  
let showVerifyCode = function(){
    if (cverCode){
        showVerCode.style.display = 'flex';
        showUsername.style.display = 'none';
        showNickname.style.display = 'none';
        showDeact.style.display = 'none';
        showPassChange.style.display = 'none';
        showBday.style.display = 'none';
        cverCode = false;
    }
    else{
        showVerCode.style.display = 'none';
        cverCode = true;
    }
}
//CHANGE VERIFY CODE HIDER

//CHANGE UPDATE HIDER
const showUpdateLogs = document.querySelector('#popUpdateUI');
let cupdateClicked = true;

let showLogs = function(){
    if (cupdateClicked){
        showUpdateLogs.style.display = 'flex';
        cupdateClicked = false;
    }
    else{
        showUpdateLogs.style.display = 'none';
        cupdateClicked = true;
    }
}
//CHANGE UPDATE HIDER


//CHANGE SWITCH HIDER
const showSwitch = document.querySelector('#switching');
let cswitchClicked = true;

let showswitchACc = function(){
    if (cswitchClicked){
        showSwitch.style.display = 'block';
        cswitchClicked = false;
    }
    else{
        showSwitch.style.display = 'none';
        cswitchClicked = true;
    }
    
}
//CHANGE SWITCH HIDER

//CHANGE SENTCODE HIDER
const showSentCode = document.querySelector('#popSentCode');
let cSentClicked = true;

let showCodeSent = function(){
    if (cSentClicked){
        showSentCode.style.display = 'flex';
        cSentClicked = false;
    }
    else{
        showSentCode.style.display = 'none';
        cSentClicked = true;
    }
    
}
//CHANGE SENTCODE HIDER

//CHANGE SUCCESS PASS HIDER
const showSuccessPassword = document.querySelector('#popNewPass');
let cPChangeClicked = true;

let showPassChanged = function(){
    if (cPChangeClicked){
        showSuccessPassword.style.display = 'flex';
        cPChangeClicked = false;
    }
    else{
        showSuccessPassword.style.display = 'none';
        cPChangeClicked = true;
    }
    
}
//CHANGE SUCCESS PASS HIDER


//CHANGE SHARE PASS HIDER
const showSharing = document.querySelector('#clickshare');
let cShareClicked = true;

let showShared = function(){
    if (cShareClicked){
        showSharing.style.display = 'flex';
        cShareClicked = false;
    }
    else{
        showSharing.style.display = 'none';
        cShareClicked = true;
    }
    
}
//CHANGE SHARE PASS HIDER


document.addEventListener('DOMContentLoaded', function() {
    const submitToRecoverButton = document.getElementById('submitToRecover');
    const goLoginNowButton = document.getElementById('goLoginNow');
  
    if (submitToRecoverButton) {
      submitToRecoverButton.addEventListener('click', function() {
        window.location.href = 're-enterpassword.html';
      });
    } else {
      console.error('Element with ID submitToRecover not found.');
    }
  
    if (goLoginNowButton) {
      goLoginNowButton.addEventListener('click', function() {
        window.location.href = 'index.html';
      });
    } else {
      console.error('Element with ID goLoginNow not found.');
    }
  });
  


//CHOOSE 
document.addEventListener('DOMContentLoaded', () => {
    const hobbies = document.querySelectorAll('.hob');
    let chosenCount = 0;
    let maxSelections = 5;

    // Determine the maximum selections based on the page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'personality2.html') {
        maxSelections = 1;
    }

    hobbies.forEach(hobby => {
        hobby.addEventListener('click', () => {
            if (hobby.classList.contains('hob-chosen')) {
                hobby.classList.remove('hob-chosen');
                chosenCount--;
            } else {
                if (chosenCount < maxSelections) {
                    hobby.classList.add('hob-chosen');
                    chosenCount++;
                } else {
                    alert(`You can only select ${maxSelections}`);
                }
            }
        });
    });
});
//CHOOSE 

//EDITPROFILE
 document.addEventListener('DOMContentLoaded', function() {
    const chooseButtons = document.querySelectorAll('.stats-container.choose .stats');

    chooseButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('stats-chose');
        });
    });


    const removeButtons = document.querySelectorAll('.stats-container.remove .stats');

    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.display = 'none';
        });
    });
});
//EDITPROFILE


//DISAPPEAR NAV BAR
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

function handleNavbarDisplay() {
    if (window.innerWidth > 933) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';  // Ensures the navbar is visible initially if below 933px
        // Scroll event listener will handle further hiding/showing
    }
}

window.addEventListener('scroll', function() {
    if (window.innerWidth <= 933) {
        let scrollTop = window.scrollY;

        if (scrollTop > 100) {
            if (scrollTop > lastScrollTop) {
                navbar.style.display = 'none';
            } else {
                navbar.style.display = 'flex';
            }
        } else {
            navbar.style.display = 'flex';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    } else {
        navbar.style.display = 'none';
    }
});

// Initial check when the script runs
handleNavbarDisplay();

// Add resize event listener to handle window resizing
window.addEventListener('resize', handleNavbarDisplay);
//DISAPPEAR NAV BAR


// Function to enable dark mode
function enableDarkMode() {
    updateStylesheet('themes', '../darkmodecss.css');
    updateStylesheet('purpMode', ''); // Deactivate purpMode stylesheet
    localStorage.setItem('mode', 'dark'); // Store dark mode state in local storage

    updatePlayforDefault();
    updateLogoforDefault();
}

// Function to enable default mode
function enableDefaultMode() {
    updateStylesheet('themes', '../style.css');
    updateStylesheet('purpMode', ''); // Deactivate purpMode stylesheet
    localStorage.setItem('mode', 'default'); // Store default mode state in local storage

    updatePlayforDefault();
    updateLogoforDefault();
}

// Function to enable Weverse mode
function enableWeverseMode() {
    updateStylesheet('themes', '../weverse.css');
    updateStylesheet('purpMode', ''); // Deactivate purpMode stylesheet
    localStorage.setItem('mode', 'weverse'); // Store Weverse mode state in local storage

    // Update logo image and play button when in Weverse mode
    updateLogoForWeverse();
    updatePlayButtonForWeverse();
}

// Function to enable purp mode
function enablePurpMode() {
    updateStylesheet('themes', '../gradientpurp.css'); // Deactivate themes stylesheet
    updateStylesheet('purpMode', ''); // Activate purpMode stylesheet
    localStorage.setItem('mode', 'purp'); // Store purp mode state in local storage

    updatePlayforPurp();
    updateLogoforPurp();
    updateCreatePurp()
}

// Function to update logo image for Weverse mode
function updateLogoForWeverse() {
    var logoImage = document.querySelector('.logo img');
    var logoMobile = document.querySelector('.msearch-logo img')
    if(logoMobile) {
        logoMobile.src = '../Assets/logo-weverse.png'
    }
    if (logoImage) {
        logoImage.src = '../Assets/logo-weverse.png';
    }
}

// Function to update play button image for Weverse mode
function updatePlayButtonForWeverse() {
    var playButton = document.querySelector('.match-start img');
    if (playButton) {
        playButton.src = '../Assets/play-blue.png';
    }
    var logoImage = document.querySelector('.global-play img');
    if (logoImage) {
        logoImage.src = '../Assets/play-blue.png';
    }
    var logoImage = document.querySelector('.global-x img');
    if (logoImage) {
        logoImage.src = '../Assets/x-blue.png';
    }
    var logoImage = document.querySelector('.global-messages .chat .chat-img-container img');
    if (logoImage) {
        logoImage.src = '../Assets/create-blue.png';
    }
    var logoImage = document.querySelector('.create-content .divider img');
    if (logoImage) {
        logoImage.src = '../Assets/create-blue.png';
    }
}

// Function to update logo image for Default mode
function updateLogoforDefault() {
    var logoImage = document.querySelector('.logo img');
    var logoMobile = document.querySelector('.msearch-logo img')
    if(logoMobile) {
        logoMobile.src = '../Assets/logo.png'
    }
    if (logoImage) {
        logoImage.src = '../Assets/logo.png';
    }
}

// Function to update play button image for Default mode
function updatePlayforPurp() {
    var playButton = document.querySelector('.match-start img');
    if (playButton) {
        playButton.src = '../Assets/play-purple.png';
    }
}

// Function to update logo image for Default mode
function updateLogoforPurp() {
    var logoImage = document.querySelector('.logo img');
    var logoMobile = document.querySelector('.msearch-logo img')
    if(logoMobile) {
        logoMobile.src = '../Assets/logo-purple.png'
    }
    if (logoImage) {
        logoImage.src = '../Assets/logo-purple.png';
    }
}

// Function to update logo image for Default mode
function updateCreatePurp() {
    var logoImage = document.querySelector('.create-content .divider img');
    if (logoImage) {
        logoImage.src = '../Assets/create-purple.png';
    }
    var logoImage = document.querySelector('.global-play img');
    if (logoImage) {
        logoImage.src = '../Assets/play-purple.png';
    }
    var logoImage = document.querySelector('.global-x img');
    if (logoImage) {
        logoImage.src = '../Assets/x-purple.png';
    }
    var logoImage = document.querySelector('.global-messages .chat .chat-img-container img');
    if (logoImage) {
        logoImage.src = '../Assets/create-purple.png';
    }
}

// Function to update play button image for Default mode
function updatePlayforDefault() {
    var playButton = document.querySelector('.match-start img');
    if (playButton) {
        playButton.src = '../Assets/play.png';
    }
}
// Function to update stylesheet href
function updateStylesheet(id, href) {
    var linkElements = document.querySelectorAll('link[rel="stylesheet"]');
    linkElements.forEach(function(link) {
        if (link.getAttribute('id') === id) {
            link.href = href;
        }
    });
}

// Check local storage on page load to maintain mode state
window.addEventListener('load', function() {
    var mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        enableDarkMode();
    } else if (mode === 'weverse') {
        enableWeverseMode();
    } else if (mode === 'purp') {
        enablePurpMode();
    } else {
        enableDefaultMode();
    }
});

// Attach click event listeners to mode buttons
document.getElementById('darkMode').addEventListener('click', enableDarkMode);
document.getElementById('defaultMode').addEventListener('click', enableDefaultMode);
document.getElementById('weverseMode').addEventListener('click', enableWeverseMode);
document.getElementById('purpMode').addEventListener('click', enablePurpMode);
