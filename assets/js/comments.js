$(document).ready(function() {
  var baseUrl = "https://workwithswiftui.com/"

  if($("#comment_form_wrapper").length > 0) {
    $.ajax({
      url: baseUrl + "comments/",
      type: "GET",
      crossDomain: true,
      data: { url: window.location.pathname },
      dataType: "html",
      success: function (response) {
        $("#comments").html(response)
      },
      error: function (xhr, status) {
      }
    });
  }

  $("#comment_content").on("click", function(e) {
    $("#comment_additional").show()
  });

  $("#comment_form").on("submit", function(e) {
    e.preventDefault()
    $.ajax({
      url: baseUrl + "comments/",
      type: "POST",
      crossDomain: true,
      data: {
        url: window.location.pathname,
        comment_content: $("#comment_content").val(),
        comment_name: $("#comment_name").val(),
        comment_email: $("#comment_email").val(),
        comment_website: $("#comment_website").val(),
      },
      beforeSend: function() {
        $("#comment_form").css("opacity: 0.6;");
      },
      complete: function() {
        $("#comment_form").css("");
      },
      dataType: "html",
      success: function (response) {
        $("#comments").html(response)
        $("input[type='text']").val("")
        $("textarea").val("")
      },
      error: function (xhr, status) {
      }
    });
  })
})
