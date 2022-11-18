const content = document.querySelector('.content');
const request_1= new XMLHttpRequest();
request_1.addEventListener('readystatechange', () => {

    if(request_1.readyState === 4 && request_1.status === 200){
        const data = JSON.parse(request_1.responseText);
        console.log(data);
    }
});

request_1.open('GET', 'https://jsonplaceholder.typicode.com/posts');
request_1.send();

//At the first step I disappointed, then I improved by changing word 'stateChange' with 'readyState'. Now It is functioning

//-----------------------------------------------------------------------------------------------------------


// const getToDos = (callBack) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', () => {
//       if(request.readyState === 4 && request.status === 200){
//           const data = JSON.parse(request.responseText); 
//           callBack(undefined, data);
//       }
//       else if(request.readyState === 4) {
//           callBack('could not fetch data', undefined);
//       }
//   })
   
//   request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//   request.send();
// }

// getToDos((err, data) => {
//   console.log('callback is fired');
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log(data);
//   }
// })
  



























