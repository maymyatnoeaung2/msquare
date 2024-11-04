// {
//     "browsers": {
//       "firefox": {
//         "name": "Firefox",
//         "pref_url": "about:config",
//         "releases": {
//           "1": {
//             "release_date": "2004-11-09",
//             "status": "retired",
//             "engine": "Gecko",
//             "engine_version": "1.7"
//           }
//         }
//       }
//     }
//   }
  
const cities = [
    {
    name :"Yangon",
    population:"6 millions",
    region:"Asia",
    isCapital:false,
},{
    name :"Yangon",
    population:"6 millions",
    region:"Asia",
    isCapital:false,
}
]

// const convertedJSONString = JSON.stringify(city);
// localStorage.setItem("city",convertedJSONString)

// console.log(typeof convertedJSONString);

// const cityFromLocalStorage = localStorage.getItem("city");
// console.log(cityFromLocalStorage.length);

// const cityAsJSObj = JSON.parse(cityFromLocalStorage);

// console.log(cityAsJSObj);

const convertedJSONString  = JSON.stringify(cities);
localStorage.setItem("cities",convertedJSONString)
const cityFromLocalStorage = localStorage.getItem("cities")
const cityAsJSArr = JSON.parse(cityFromLocalStorage)
console.log(cityAsJSArr);
console.log(cityAsJSArr[1].name);
