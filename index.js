 //alert("hey");
 
fetch('https://fakestoreapi.com/products')
.then(data=>data.json())
.then(data=>{
    console.log(data[0].title);
    let tableData="";
    data.map((values)=>{
        tableData+=` <tr>
        <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      <td><img src="${values.image}"</td>
    </tr>`;
    });
    document.getElementById("table-body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err)
})
