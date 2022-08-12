// const data = [
//   {
//     img: "https://cdn.pixabay.com/photo/2019/04/14/14/09/fantasy-4126847_960_720.jpg",
//     title: "The woman that kills..",
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2014/08/22/09/36/auto-424119_960_720.jpg",
//     title: "The man that heals..",
//   },
// ];

const data=[]

const options = {
  method: 'GET'
};

fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies', options)
.then(response => response.json())
.then(response => {
  data.push(...response)
  // console.log(response)
})
.catch(err => console.error(err));

console.log(data)

// const API_KEY = "api_key=7380f64fcc60d4bb01b52233539dc6d2"
// const BASE_URL = "https://api.themoviedb.org/3/"
// const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
// console.log(API_URL)
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// const searchURL = BASE_URL + '/search/movie?'+API_KEY;

export default data;
