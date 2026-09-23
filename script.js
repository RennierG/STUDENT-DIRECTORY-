const studentForm = document.getElementById("studentForm");

const studentName = document.getElementById("studentName");

const program = document.getElementById("program");

const studentList = document.getElementById("studentList");


studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = studentName.value;

    const programValue = program.value;


    
    const studentCard = document.createElement("article");

    studentCard.classList.add("student-card");


    
    studentCard.innerHTML = `
        <h3>${name}</h3>
        <p>Program: ${programValue}</p>
        <button class="remove-btn">Remove</button>
    `;


    
    studentList.appendChild(studentCard);


    
    const removeButton = studentCard.querySelector(".remove-btn");


    
    removeButton.addEventListener("click", function() {

        studentCard.remove();

    });


    studentForm.reset();

});