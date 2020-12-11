

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);
  renderMathInElement(document.body);
  showcalculator();
};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    
    location.href = "end.html";
  }
  question_count++;
  show(question_count);
}




function previous() {

   
  // if the question is last then redirect to final page
  if (question_count == 0) {
    location.href = "index.html";
  }
  
  question_count--;
  show(question_count);
}


function show(count) {

  quiz_header.innerHTML=`<div class="quiz_user" style="padding-top: .8rem">
  <h3><strong>MCQ</strong></h3>
</div>
<div class="state">

</div>

    <div>
          <button onclick="showcalculator()" class="btn-next cal" id="myBtn">calculator</button>
          </div>
          `


  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  let sts=document.querySelector(".state");
  sts.innerHTML=`<h2>${count+1}/20</h2>`;
  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
  <p>
  <img src=${questions[count].queimg} alt="hu" onerror="this.style.display='none'"   style="width:50px;height:60px;">
</p>

   <ul class="option_group">
  <li class="option"><strong>${first}</strong></li>
  <li class="option"><strong>${second}</strong></li>
  <li class="option"><strong>${third}</strong></li>
  <li class="option"><strong>${fourth}</strong></li>
</ul> 
         <button class="btn-previous" onclick="previous()">Previous Question</button>
          <button class="btn-next" onclick="next()">Next Question</button>
<details>
<summary><strong>Explanation</strong></summary>
<h5>${questions[count].exp}</h5>
</details>

<p>
  <img src=${questions[count].img} alt=" " onerror="this.style.display='none'" style="width:500px;height:600px;">
</p>
  `;
  renderMathInElement(document.body);

  toggleActive();
}


function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("incorrect")) {
          option[i].classList.remove("incorrect");
        }
      }
     option[i].classList.add("incorrect");

      if(i==questions[question_count].answer-1){
        let x=document.querySelectorAll("li.option.incorrect");
        x[0].classList.remove("incorrect")
        x[0].classList.add("correct") 
      };

    };

  
  }
}

//calculator


dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function showcalculator() {
  var x = document.getElementById("mydiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}