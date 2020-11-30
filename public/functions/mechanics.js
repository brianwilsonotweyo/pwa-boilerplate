   var array =[
  
  ]
  $.ajax({
    method:"GET",
    url:'https://reqres.in/api/users?page=1',
    success:function(response){
      array = response.data
      buildTable(array)
      console.log(array)
    } 
  })
 
  $('#search-input').on('keyup',function(){
    var value = $(this).val()
    console.log("value: ",value);
    var data= searchTable(value, array)
    buildTable(data)
  })
  buildTable(array)
  function searchTable(value, data){
    var filteredData =[]
    for(var i=0; i<data.length; i++){
      value = value.toLowerCase()  
      var name = data[i].first_name.toLowerCase()
      if(name.includes(value)){
        filteredData.push(data[i])
      }
    }
    return filteredData
  }
  function buildTable(data){
    var table = document.getElementById("table-body")
    table.innerHTML = " "
    for(var i =0; i<data.length; i++){
      var row=`
      <tr>
        <td>${data[i].id}</td>
        <td>${data[i].first_name}</td>
        <td>${data[i].last_name}</td>
        <td>${data[i].email}</td>
        <td><img class="rounded-circle" alt="80x80" src="${data[i].avatar}" data-holder-rendered="true"></td>
        <td>${data[i].CompanyName}</td>
        <td>${data[i].CompanyCOI}</td>
        <td>${data[i].TIN}</td>
      </tr>
      `
      table.innerHTML +=row
    }
  }