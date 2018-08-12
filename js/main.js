$(document).ready(function () {

  autoPlayYouTubeModal();

  /* activate the carousel */
  $("#modal-carousel").carousel({ interval: false });

  /* change modal title when slide changes */
  $("#modal-carousel").on("slid.bs.carousel", function () {
    $(".modal-title")
      .html($(this)
        .find(".active img")
        .attr("title"));
  });

  /* when clicking a thumbnail */
  $(".row #image-3").click(function () {
    var content = $(".carousel-inner");
    var title = $(".modal-title");

    content.empty();
    title.empty();

    var id = this.id;
    var repo = $("#img-repo .item");
    var repoCopy = repo.filter("#" + id).clone();
    var active = repoCopy.first();

    active.addClass("active");
    title.html(active.find("img").attr("title"));
    content.append(repoCopy);

    // show the modal
    $("#modal-gallery").modal("show");
  });

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-theVideo");
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);

      //Remove the video every time the modal is hidden
      $(theModal).on('hidden.bs.modal', function () {
        $(theModal + ' iframe').removeAttr('src');
      });
    });
  }

});