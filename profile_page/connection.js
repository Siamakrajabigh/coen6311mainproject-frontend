// fetch('https://coen6311-380422.nn.r.appspot.com/rateAServiceProvider')
//       .then(response => response.json())
//       .then(json => console.log(json))

const data = {

"email" : "Mitrash@gmail.com"
};

const url = 'https://coen6311-380422.nn.r.appspot.com/findAUser'

fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(responseData => {
// Do something with the response data
console.log(responseData)
console.log(responseData.firstName)
// const name = responseData.name
// console.log(name)
})
.catch(error => {
// Handle any errors that occur during the API request
});
