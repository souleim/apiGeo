let zipCode = document.getElementById('zipCode');
let errorMessage = document.getElementById('error-message');
let ville = document.getElementById('ville');
let btn = document.getElementById('btn');

let testID = document.getElementById('testID');

let url = 'https://geo.api.gouv.fr/communes/';

let format = '&format=json';


zipCode.addEventListener('blur', () =>{
    let lecode = zipCode.value;
    let tabObj = [];
    fetch(url, {method:'get'})
    .then(resp =>{
        //console.log(resp);
        return resp.json();
    })
    .then(datas => {
        let datasTab = datas.filter(elt => {
                   return elt.code==='13003';
            });

        console.log(datasTab);

    })
    .catch(err => console.log(err.message))

})

function display(collection){
    
}
    ////////////////////////////////////////////////////////////////////////////////////

//let baseUrlApi = 'https://geo.api.gouv.fr/communes?codePostal=';

// let format = '&format=json'

// zipCode.addEventListener('blur', () => {
//     let code = zipCode.value;
//     let url = baseUrlApi+code+format;
//     fetch(url, {method:'get'})
//     .then(resp => {
//         return resp.ok ? resp.json() : Promise.reject(Error(resp.statusText))
//     })
//     .then(resultats =>{
//         let option = document.createElement('option');
//         if(resultats.length){
//             ville.remove(option);
//             resultats.forEach(element => {
//                 errorMessage.innerText = "";
//                 option.value = element.nom;
//                 option.text = element.nom;
//                 ville.add(option);
                
//             });
            
//         }else{
//             if(zipCode.value){
//                 errorMessage.innerText = "Votre code postal ne correspond pas à une commune";
//             }else{
//                 errorMessage.innerText = "Merci d'entrer un code postal pour trouver une commune"
//             }
//         }
//     })
//     .catch(err => {
//         console.log(err.message);
//     })
// });