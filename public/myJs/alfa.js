var $table = $('#table')

$table.click(() => {

  let obj = JSON.stringify($table.bootstrapTable('getSelections'));
  console.log(obj)
  alert("Nome: " + obj)
  
});



