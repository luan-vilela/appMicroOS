var $table = $('#table')

$table.click(() => {
  let obj  = $table.bootstrapTable('getSelections');
  obj = obj[0];
  
  
  let link = obj.id +''+obj.name +'' +obj.aparelho;

  if(window.confirm("Deseja abrir OS #" +obj.id)){
    window.location = 'ordem/'+obj.id
  }
});



