
const content = document.querySelector('.content');
const request= new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        data.forEach(element => {
            let parag = document.createElement('p');
            parag.innerText += `<p>name: ${element.name} surname: ${element.surname}  age: ${element.age}  salary: ${element.salary}</p>`;  
            content.append(parag);
        });
    }
});

request.open('GET', 'task_1.json');
request.send();












