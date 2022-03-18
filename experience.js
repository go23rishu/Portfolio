$(document).on(
  "click",
  ".whereWorked .whereWorkedMenu .leftMenu .left ",
  function () {
    var show = $(this).data("show");
    $(show).removeClass("hide").siblings().addClass("hide");
  }
);
