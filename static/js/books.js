$(function () {
 
    var loadForm = function() {
      var btn = $(this);
      $.ajax({
        url: btn.attr("data-url"),
        type: 'get',
        dataType: 'json',
        beforeSend: function () {
          $("#modal-book").modal('show');
        },
        success: function (data) { console.log(data.html_form);
          $("#modal-book .modal-content").html(data.html_form);
        }
      });
    }
    var saveForm =  function () {
      var form = $(this);
      console.log('url');
      $.ajax({
        url: form.attr("action"),
        
        data: form.serialize(),
        type: form.attr("method"),
        dataType: 'json',
        success: function (data) {
          if (data.form_is_valid) {
            $("#book-table tbody").html(data.html_book_list);
            $("#modal-book").modal('hide');
          }
          else {
            alert('error');
            $("#modal-book .modal-content").html(data.html_form);
          }
        }
      });
      return false;
    }; 
    // Create book 
    $(".js-create-book").click(loadForm);
    $("#modal-book").on("submit", ".js-book-create-form", saveForm);

    // Update book
    $("#book-table").on("click", ".js-update-book", loadForm);
    $("#modal-book").on("submit", ".js-book-update-form", saveForm)

    //Delete book
    $("#book-table").on("click", ".js-delete-book", loadForm);
    $("#modal-book").on("submit", ".js-book-delete-form", saveForm);

});