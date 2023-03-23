const counting = document.getElementById("counter");
const plusOne = document.getElementById("plus");
const minusOne = document.getElementById("minus");
const heart = document.getElementById("heart");
const pauseResume = document.getElementById("pause");
const likes = document.querySelector(".likes");
const list = document.querySelector(".list");
const commentForm = document.getElementById("comment-form");
counter = 0;


//counter every second unless otherwised paused
document.addEventListener("DOMContentLoaded", (e) =>{
    let perpetualInterval = setInterval(addByOne, 1000);


    //pause and resume button
    pauseResume.addEventListener("click", ()=> {
        if(pauseResume.innerText == "pause"){
            pauseResume.innerText = "resume";
            clearInterval(perpetualInterval);
        }else{
            pauseResume.innerText = "pause";
            perpetualInterval = setInterval(addByOne, 1000);;
        }
    });

    //add and subtract outside of each second interval
    plusOne.addEventListener("click", addByOne);
    minusOne.addEventListener("click", ()=>{
        counter--;
        counting.textContent=counter;
    });

    //liking a number will input an li if it is unique, if not it grabs the existing li and updates the number time it works
    let placeHolder = 0;
    let likeCounter = 1;
    heart.addEventListener("click", ()=>{
        let li = document.createElement("li");
        if (counter != placeHolder){
            placeHolder = counter;
            likeCounter=1;
            li.innerText= `${counter} is liked ${likeCounter} times.`;
            likes.appendChild(li);
        } else{
            const allLi = document.querySelectorAll("li");
            allLi.forEach(li =>{
                if (li.innerText ==`${counter} is liked ${likeCounter} times.`){
                    likeCounter++;
                    li.innerText=`${counter} is liked ${likeCounter} times.`;
                }
            })
        }
    });

    //leave a comment
    commentForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const p = document.createElement("p");
        p.innerText = document.getElementById("comment-input").value;
        commentForm.appendChild(p);
        document.getElementById("comment-input").value="";
    })
})

//counting addition
function addByOne(){
    counter++;
    counting.textContent=counter;
}


