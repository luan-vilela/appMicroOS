var $table = $('#table')

$table.click(() => {
  let obj  = $table.bootstrapTable('getSelections');
  obj = obj[0];
  
  
  let link = obj.id +''+obj.name +'' +obj.aparelho;

  if(window.confirm("Deseja abrir OS #" +obj.id)){
    window.location = 'ordem/'+obj.id
  }
});




 var $table = $('#tableADM')

function operateFormatter(value, row, index) {
  return [
    '<a class="abrir" href="javascript:void(0)" title="Abrir Ordem"> ',
    '<i class="fa fa-folder-open fa-2x"></i>',
    '</a>  ',
    '<a class="avisado" href="javascript:void(0)" title="Avisado">',
    '<i class="fa fa-check fa-2x"></i>',
    '</a>  ',
    '<a class="aguardando" href="javascript:void(0)" title="Aguardando">',
    '<i class="fa fa-clock-o fa-2x"></i>',
    '</a>  ',
    '<a class="cancelado" href="javascript:void(0)" title="Cancelado">',
    '<i class="fa fa-times fa-2x"></i>',
    '</a>  '
  ].join('')
}

window.operateEvents = {
  'click .abrir': function (e, value, row, index) {
    alert('You click like action, row: ' + JSON.stringify(row))
  },
  'click .remove': function (e, value, row, index) {
    $table.bootstrapTable('remove', {
      field: 'id',
      values: [row.id]
    })
  }
}