function initMap() {
  var uluru = {
    lat: -25.363,
    lng: 131.044
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$(document).ready(setup);

function setup() {
  console.log('Inside_setup');
  $('#send').click(send_data);
}

function send_data() {
  console.log('Inside send_data');
  var name = $('#name').val();
  var email = $('#email').val();
  var comments = $('#comments').text();
  console.log('data: ' + name + ', ' + email + ', ' + comments);

}
