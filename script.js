let students = [
    {id: 0, name: 'Gabo MAnsanas', program: 'Bachelor of Science in Information technology'},
    {id: 1, name: 'Mamang Kiko', program: 'Bachelor of Science in Pilot Flying'},
    {id: 2, name: 'Piolo Mangangaso', program: 'Bachelor of Science in Computer Engineering'},
    {id: 3, name: 'Naruto Uzumaki', program: 'Bachelor of Science in Konohagakure'},
    {id: 4, name: 'Sasuke Uchiha', program: 'Bachelor of Science in RASENNGAN'},
    {id: 5, name: 'Mike MangGagahasa', program: 'Bachelor of Science in RAPIST'}
];


const createStudent = (name, program) =>{
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    h2.innerHTML = name;
    p.innerHTML =  program;
    button.innerHTML = "Delete";

    article.append(h2);
    article.append(p);
    article.append(button);

    article.classList.add("list-item");

    return article;
}

const studentList = students.map((s) =>{
    return createStudent(s.name, s.program)
});

const listContainer = document.querySelector("#listContainer")
studentList.forEach ((s)=>{
    listContainer.append(s);
});