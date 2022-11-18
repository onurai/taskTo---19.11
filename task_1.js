const employees=[
    {
        name:perviz,
        surname: qurbanov,
        age:25,
        salary:3100 
    },
    {
        name:cavid,
        surname: rehimov,
        age:28,
        salary:2800 
    },
    {
        name:kamran,
        surname: mustafayev,
        age:27,
        salary:3000 
    },
    {
        name:cavid,
        surname: rehimov,
        age:22,
        salary:2000 
    }
]

function getEmployee(surname){
   const currentEMp = employees.find(x=>x.surname===surname);
   currentEMp.surname;
}

const empSurname = prompt('please enter employee surname');
getEmployee(empSurname);

//bu tam deyil












