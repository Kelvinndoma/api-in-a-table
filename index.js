 //alert("hey");
 
fetch('https://fakestoreapi.com/products')
.then(data=>data.json())
.then(data=>{
    console.log(data[0].title);

})
