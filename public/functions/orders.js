var array2 =[
  
]
$.ajax({
  method:"GET",
  url:'https://reqres.in/api/users?page=2',
  success:function(response){
    array2 = response.data
    buildTable2(array2)
    console.log(array2)
  } 
})

function buildTable2(data){
  var table2 = document.getElementById("table-body2")
  table2.innerHTML = " "
  for(var i =0; i<data.length; i++){
    var row=`
    <tr>        
        <td>${data[i].first_name}</td>
        <td>${data[i].last_name}</td>
        <td>${data[i].email}</td>
        <td>${data[i].id}</td>
    </tr>
    `
    table2.innerHTML +=row
  }
}