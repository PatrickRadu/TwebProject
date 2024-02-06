import axios from 'axios';

// let response = {};

// try {
//     response = await axios.get('http://localhost:5000/produse');
//     console.log(response);
// } catch (error) {
//     console.error('Error getting produse:', error);
// }

let srcimg = 'data:image/jpeg;base64,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';
const produse = [{imageSrc:srcimg, name:'Rosie', expirationDate:'2024-01-21', vegan:true, vegetarian:true, carnivor:true}, {imageSrc:srcimg, name:'Rosie', expirationDate:'2024-01-18', vegan:true, vegetarian:true, carnivor:false}, {imageSrc:srcimg, name:'Rosie', expirationDate:'2024-01-21', vegan:true, vegetarian:true, carnivor:false},];

// response = Array.from(response);
// console.log(response);

export default produse;