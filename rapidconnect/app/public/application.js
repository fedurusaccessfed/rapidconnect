$(document).ready(function() {

  $('.delete-target').on('click', function() {
    var btn = $(this);
    var type = btn.data('type');
    bootbox.dialog('Are you sure you wish to delete this '+type+'?',
    [{
      'label' : 'Delete '+type,
      'class' : 'btn-danger',
      'callback': function() {
        $('#'+btn.data('target')).submit();
      }
    },
    {
      'label' : 'Cancel',
      'class' : 'btn',
      'callback': function() {
      }
    }]);
  });

  $('.toggle-target').on('click', function() {
    var btn = $(this);
    var type = btn.data('type');
    bootbox.dialog('Are you sure you wish to change the state of this application to '+type+'?',
    [{
      'label' : 'Set as '+type,
      'class' : 'btn-info',
      'callback': function() {
        $('#'+btn.data('target')).submit();
      }
    },
    {
      'label' : 'Cancel',
      'class' : 'btn',
      'callback': function() {
      }
    }]);
  });

});
