
let mainColor = localStorage.getItem("current-color");

if (mainColor !== null){

    document.documentElement.style.setProperty('--main--color' , mainColor );

       //remove active class from all lis
       document.querySelectorAll(".settings-box ul li").forEach(li => {
        li.classList.remove("active");

        if(li.dataset.color === mainColor){
            li.classList.add("active");
        }
    })

}

//start function of  settings
document.querySelector(".settings .icon i").onclick = function(){
    //rotation of icon
    this.classList.toggle("fa-spin");

    //make settings box appear
    document.querySelector(".settings").classList.toggle("open");
}



//change website main color
let myLis = document.querySelectorAll(".settings-box ul li");
//console.log(myLis)

myLis.forEach( li => {

    li.addEventListener("click" , (e) => {
        //console.log(e.target.dataset.color);

        //set color on root
        document.documentElement.style.setProperty('--main--color' , e.target.dataset.color );

        //set the color to local storage
        localStorage.setItem("current-color" , e.target.dataset.color);

        //remove active class from all lis
        myLis.forEach(li => {
            li.classList.remove("active");
        })

        //add active class to current li that we clicked
        e.target.classList.add("active");




    });
});

//random background
let randomBackground = document.querySelectorAll(".random-background span");
let randomBackgroundOption ;

let backgroundLocalItem = localStorage.getItem("background-option");

if(backgroundLocalItem !== null){

    if(backgroundLocalItem === true){

        randomBackgroundOption = true;
    }else{
        randomBackgroundOption = false;
    }

    randomBackground.forEach(span => {
        span.classList.remove("active");
    });

    if(backgroundLocalItem === "true"){
        document.querySelector(".random-background .yes").classList.add("active");
    }else{
        document.querySelector(".random-background .no").classList.add("active");

    }

}

let  backgroundInterval;
//console.log(randomBackground)

randomBackground.forEach( span => {

    span.addEventListener("click" , (e) => {
       

        //remove active class from all spans
       randomBackground.forEach(span => {
            span.classList.remove("active");
        })

        //add active class to current span that we clicked
        e.target.classList.add("active");


        if(e.target.dataset.background === "yes"){

                randomBackgroundOption = true

                randomBG();

                localStorage.setItem("background-option" , true);

        }else{
            randomBackgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background-option" , false);


        }




    });
});


//show bullets
let bulletsSpan = document.querySelectorAll(".settings-box.special .test span");
//console.log(bulletsSpan);

let navBullets = document.querySelector(".nav-bullets");
//console.log(navBullets);

let bulletLocalItem = localStorage.getItem("show-bullets");

if (bulletLocalItem != null){
    //console.log("LS not empty");

   bulletsSpan.forEach(bullet => {

    bullet.classList.remove("active");
   })

    if(bulletLocalItem === "block"){
        document.querySelector(".settings-box.special .test .yes").classList.add("active");
        navBullets.style.display = "block";
    }

    if(bulletLocalItem === "none"){
        document.querySelector(".settings-box.special .test .no").classList.add("active");
        navBullets.style.display = "none";
    }
    
}

bulletsSpan.forEach(span => {

    span.addEventListener("click" , (e) => {
        
        bulletsSpan.forEach(span => {
     
            span.classList.remove("active");

        });

        e.target.classList.add("active");


        if(span.dataset.display === "show"){

            navBullets.style.display = "block";

        localStorage.setItem("show-bullets" , "block");


        }else{

            navBullets.style.display = "none";

        localStorage.setItem("show-bullets" , "none");

        }


    });


});




//end function of  settings

//start function that change background image  dynamically every 5 seconds

let landing = document.querySelector(".landing");

let imgsArray = ["01.jpg" , "02.jpg" , "03.jpg" , "4.jpg", "05.jpg" ];




function randomBG(){

    if (randomBackgroundOption === true){
        backgroundInterval = setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            landing.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber] +'")';
        
        }, 5000);
    }
}

let linksLi = document.querySelectorAll(".landing ul li a");
// console.log(linksLi)

linksLi.forEach(li => {

    li.addEventListener("click" , (e) => {
        
        linksLi.forEach(myli => {
     
            myli.classList.remove("active");

        });

        e.target.classList.add("active");


    });


});






//end function that change background image  dynamically every 5 seconds



// start JS code of our skills section

let skills = document.querySelector(".skills");

let mySpans = document.querySelectorAll(".skill-progress span");

window.onscroll = function(){
    
    if(window.scrollY >= skills.offsetTop - 250 ){
        mySpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};




// end JS code of our skills section


// start JS code of gallery section


let gallery = document.querySelectorAll(".gallery .images-box img");

gallery.forEach(img => {

    img.onclick = function(){

        let popUP = document.createElement("div");

        popUP.className = "popup-overlay"

        document.body.appendChild(popUP);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        let popupImage = document.createElement("img");

        popupImage.src = img.src ;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        if(img.alt !== null){

            let heading = document.createElement("h3");

            heading.appendChild(document.createTextNode(img.alt))

            popupBox.prepend(heading)

            heading.style.textAlign = 'center';
            heading.style.marginBottom = '15px';
            heading.style.fontWeight = 'bold';
            heading.style.color = 'var(--main--color)';


        }

        let closeSpan = document.createElement("span");

        closeSpan.className = "close-span";

        let closeSpanContent = document.createTextNode("X");

        closeSpan.appendChild(closeSpanContent);

        popupBox.appendChild(closeSpan);


    }
});

//remove  popup box and popup overlay

document.addEventListener ("click" , (e) => {
    if (e.target.className == "close-span"){

        e.target.parentNode.remove();

       document.querySelector(".popup-overlay").remove();

    }

})





// end JS code of gallery section

//start nav bullets section

let allBullets = document.querySelectorAll(".nav-bullets .bullet");

//console.log(allBullets)



allBullets.forEach(bullet => {

    bullet.addEventListener("click" , (e) => {

        allBullets.forEach(bullet => {
            bullet.classList.remove("active");
        })

        e.target.classList.add("active");


      
        //console.log(e.target.dataset.section);

          document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : 'smooth'
        });


    });
});



//reset options



 document.querySelector(".reset").onclick = function() {
    //localStorage.clear(); //remove all data from local storage and this is bad practice

    //the second way is deleteing only one element from local storage and this is best practice
    localStorage.removeItem("show-bullets");
    localStorage.removeItem("current-color");
    localStorage.removeItem("background-option");


    //reload the padge
    window.location.reload();


}


//end nav bullets section

//start show burger icon in small and medium screens

let burgerIcon = document.querySelector(".landing .menu");
//console.log(burgerIcon);

let ulLanding = document.querySelector(".landing ul");
//console.log(ulLanding);

burgerIcon.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle("menu-active");

    ulLanding.classList.toggle("open");

}

ulLanding.onclick = function(e){
    e.stopPropagation();

}

//click anywhere to close the menu
document.addEventListener("click" , e => {

  if(burgerIcon.classList.contains("menu-active") && ulLanding.classList.contains("open")){

    if(e.target.classList.contains("open") == false && e.target.classList.contains("menu-active") == false){

        burgerIcon.classList.toggle("menu-active");

        ulLanding.classList.toggle("open");

    }
    
  }


})


//end show burger icon in small and medium screens


















