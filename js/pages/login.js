$(function() {
  $(".form-login").validator();
  if (
    navigator.userAgent.toLowerCase().match("android") ||
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  ) {
    $("#bannerBaixeApp").show();
  }

  $("#iconeEsconderBanner").click(function() {
    $("#bannerBaixeApp").hide();
  });

  $("#btnVerApp").click(function() {
    if (navigator.userAgent.toLowerCase().match("android")) {
      window.open(
        "https://play.google.com/store/apps/details?id=br.senai.sc.appespacoestudante",
        "_blank"
      );
    } else if (
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !window.MSStream
    ) {
      window.open("https://apps.apple.com/br/app/id1474992119", "_blank");
    }
  });
});

$(document).ready(function() {
  $('input[name="user"]').focus();
});
