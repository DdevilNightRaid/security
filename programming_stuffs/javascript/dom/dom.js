// const handleClick= () => {
//     let clock = document.getElementById('clock');
//     clock.style.color = 'red'
//     clock.style.fontSize = '2rem'
//     console.log(clock);
    
// }
// Document Object Model [DOM]


function badhar(){
   let paragraph = document.getElementById('msg');
   paragraph.innerHTML = 'Yay the function ran.'
}


// json -> object

let sudentData = {
   username: 'Samira',
   fullname: 'Samira Thapa',
   age: 18,
   address: 'Sarangkot 18, Pokhara'
}

console.log(sudentData)
console.log(sudentData.fullname)
