console.log("hello");
// const sear=document.getElementById("search1");
// sear.addEventListener("click", search)
// function search(){
//     console.log("jnjjnj");
//     alert("hi");
// }




// access all the headings

// function under(){


// const underline=['padding-bottom: 7px;',
//                 'border-bottom-style: solid;',
//                 'border-bottom-width: 3.1px;',
//                 'width: fit-content;'
// ]
// for(var i in underline){
//     console.log(underline[i]);
// }
// }


let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}




// for discription bloack

// const discription=document.getElementById("discription-a1");
// const specification=document.getElementById("specification-a1");
// const warranty=document.getElementById("warranty-a1");
// const discussion=document.getElementById("discussion-a1");
// const other=document.getElementById("other-a1");


// const diss1_div=document.getElementById("diss1");
// const speci1_div=document.getElementById("speci1");
// const warrant1_div=document.getElementById("warranty");
// const discussion_div=document.getElementById("discussion1");
// const other_div=document.getElementById("other1");

// console.log(discription );
function display1() {

  const discription=document.getElementById("discription-a1");
  const specification=document.getElementById("specification-a1");
  const warranty=document.getElementById("warranty-a1");
  const videos=document.getElementById("videos-a1");
  const discussion=document.getElementById("discussion-a1");
  const other=document.getElementById("other-a1");
  
  
  const diss1_div=document.getElementById("diss1");
  const speci1_div=document.getElementById("speci1");
  const warrant1_div=document.getElementById("warranty");
  const videos1_div=document.getElementById("videos");
  const discussion_div=document.getElementById("discussion1");
  const other_div=document.getElementById("other1");
    
    diss1_div.setAttribute('style','display: block;');
    speci1_div.setAttribute('style','display: none;');
    warrant1_div.setAttribute('style','display: none;');
    videos1_div.setAttribute('style','display: none;');
    discussion_div.setAttribute('style','display: none;');
    other_div.setAttribute('style','display: none;');

    discription.setAttribute('style','font-weight: 900;');
    specification.setAttribute('style','font-weight: 300;');
    warranty.setAttribute('style','font-weight: 300;');
    videos.setAttribute('style','font-weight: 300;');
    discussion.setAttribute('style','font-weight: 300;');
    other.setAttribute('style','font-weight: 300;');

    discription.style.paddingBottom="7px";
    discription.style.borderBottomStyle="solid";
    discription.style.borderBottomWidth="3.1px";
    discription.style.width="fit-content";

    specification.style.textDecoration="none";
    warranty.style.textDecoration="none";
    discussion.style.textDecoration="none";
    other.style.textDecoration="none";
    

}
function speci1() {

const discription=document.getElementById("discription-a1");
const specification=document.getElementById("specification-a1");
const warranty=document.getElementById("warranty-a1");
const videos=document.getElementById("videos-a1");
const discussion=document.getElementById("discussion-a1");
const other=document.getElementById("other-a1");


const diss1_div=document.getElementById("diss1");
const speci1_div=document.getElementById("speci1");
const warrant1_div=document.getElementById("warranty");
const videos1_div=document.getElementById("videos");
const discussion_div=document.getElementById("discussion1");
const other_div=document.getElementById("other1");
    
    diss1_div.setAttribute('style','display: none;');
    speci1_div.setAttribute('style','display: block;');
    warrant1_div.setAttribute('style','display: none;');
    videos1_div.setAttribute('style','display: none;');
    discussion_div.setAttribute('style','display: none;');
    other_div.setAttribute('style','display: none;');
   
    discription.setAttribute('style','font-weight: 300;');
    specification.setAttribute('style','font-weight: 900;');
    warranty.setAttribute('style','font-weight: 300;');
    videos.setAttribute('style','font-weight: 300;');
    discussion.setAttribute('style','font-weight: 300;');
    other.setAttribute('style','font-weight: 300;');

    
    specification.style.paddingBottom="7px";
    specification.style.borderBottomStyle="solid";
    specification.style.borderBottomWidth="3.1px";
    specification.style.width="fit-content";
    
    
}
function warranty1() {

  const discription=document.getElementById("discription-a1");
  const specification=document.getElementById("specification-a1");
  const warranty=document.getElementById("warranty-a1");
  const videos=document.getElementById("videos-a1");
  const discussion=document.getElementById("discussion-a1");
  const other=document.getElementById("other-a1");
  
  
  const diss1_div=document.getElementById("diss1");
  const speci1_div=document.getElementById("speci1");
  const warrant1_div=document.getElementById("warranty");
  const videos1_div=document.getElementById("videos");
  const discussion_div=document.getElementById("discussion1");
  const other_div=document.getElementById("other1");

    diss1_div.setAttribute('style','display: none;');
    speci1_div.setAttribute('style','display: none;');
    warrant1_div.setAttribute('style','display: block;');
    videos1_div.setAttribute('style','display: none;');
    discussion_div.setAttribute('style','display: none;');
    other_div.setAttribute('style','display: none;');

    discription.setAttribute('style','font-weight: 300;');
    specification.setAttribute('style','font-weight: 300;');
    warranty.setAttribute('style','font-weight: 900;');
    videos.setAttribute('style','font-weight: 300;');
    discussion.setAttribute('style','font-weight: 300;');
    other.setAttribute('style','font-weight: 300;');

    warranty.style.paddingBottom="7px";
    warranty.style.borderBottomStyle="solid";
    warranty.style.borderBottomWidth="3.1px";
    warranty.style.width="fit-content";

   
}

function videos1() {

  const discription=document.getElementById("discription-a1");
  const specification=document.getElementById("specification-a1");
  const warranty=document.getElementById("warranty-a1");
  const videos=document.getElementById("videos-a1");
  const discussion=document.getElementById("discussion-a1");
  const other=document.getElementById("other-a1");
  
  
  const diss1_div=document.getElementById("diss1");
  const speci1_div=document.getElementById("speci1");
  const warrant1_div=document.getElementById("warranty");
  const videos1_div=document.getElementById("videos");
  const discussion_div=document.getElementById("discussion1");
  const other_div=document.getElementById("other1");

    diss1_div.setAttribute('style','display: none;');
    speci1_div.setAttribute('style','display: none;');
    warrant1_div.setAttribute('style','display: none;');
    videos1_div.setAttribute('style','display: block;');
    discussion_div.setAttribute('style','display: none;');
    other_div.setAttribute('style','display: none;');

    discription.setAttribute('style','font-weight: 300;');
    specification.setAttribute('style','font-weight: 300;');
    warranty.setAttribute('style','font-weight: 300;');
    videos.setAttribute('style','font-weight: 900;');
    discussion.setAttribute('style','font-weight: 300;');
    other.setAttribute('style','font-weight: 300;');

    videos.style.paddingBottom="7px";
    videos.style.borderBottomStyle="solid";
    videos.style.borderBottomWidth="3.1px";
    videos.style.width="fit-content";

   
}

function discussion1() {

  const discription=document.getElementById("discription-a1");
  const specification=document.getElementById("specification-a1");
  const warranty=document.getElementById("warranty-a1");
  const videos=document.getElementById("videos-a1");
  const discussion=document.getElementById("discussion-a1");
  const other=document.getElementById("other-a1");
  
  
  const diss1_div=document.getElementById("diss1");
  const speci1_div=document.getElementById("speci1");
  const warrant1_div=document.getElementById("warranty");
  const videos1_div=document.getElementById("videos");
  const discussion_div=document.getElementById("discussion1");
  const other_div=document.getElementById("other1");

    diss1_div.setAttribute('style','display: none;');
    speci1_div.setAttribute('style','display: none;');
    warrant1_div.setAttribute('style','display: none;');
    videos1_div.setAttribute('style','display: none;');
    discussion_div.setAttribute('style','display: block;');
    other_div.setAttribute('style','display: none;');

    discription.setAttribute('style','font-weight: 300;');
    specification.setAttribute('style','font-weight: 300;');
    warranty.setAttribute('style','font-weight: 300;');
    videos.setAttribute('style','font-weight: 300;');
    discussion.setAttribute('style','font-weight: 900;');
    other.setAttribute('style','font-weight: 300;');

    discussion.style.paddingBottom="7px";
    discussion.style.borderBottomStyle="solid";
    discussion.style.borderBottomWidth="3.1px";
    discussion.style.width="fit-content";

   
 
    
       
}
function other1() {

    
    const discription=document.getElementById("discription-a1");
    const specification=document.getElementById("specification-a1");
    const warranty=document.getElementById("warranty-a1");
    const videos=document.getElementById("videos-a1");
    const discussion=document.getElementById("discussion-a1");
    const other=document.getElementById("other-a1");
  
  
    const diss1_div=document.getElementById("diss1");
    const speci1_div=document.getElementById("speci1");
    const warrant1_div=document.getElementById("warranty");
    const videos1_div=document.getElementById("videos");
    const discussion_div=document.getElementById("discussion1");
    const other_div=document.getElementById("other1");


    diss1_div.setAttribute('style','display: none;');
    speci1_div.setAttribute('style','display: none;');
    warrant1_div.setAttribute('style','display: none;');
    videos1_div.setAttribute('style','display: none;');
    discussion_div.setAttribute('style','display: none;');
    other_div.setAttribute('style','display: block;');

    discription.setAttribute('style','font-weight: 300;');
    specification.setAttribute('style','font-weight: 300;');
    warranty.setAttribute('style','font-weight: 300;');
    videos.setAttribute('style','font-weight: 300;');
    discussion.setAttribute('style','font-weight: 300;');
    other.setAttribute('style','font-weight: 900;');

    other.style.paddingBottom="7px";
    other.style.borderBottomStyle="solid";
    other.style.borderBottomWidth="3.1px";
    other.style.width="fit-content";
 
}