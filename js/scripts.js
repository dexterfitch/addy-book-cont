var fullAddress

$(document).ready(function() {
  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputFirstName = $('input#new-first-name').val();
    var inputLastName = $('input#new-last-name').val();
    var inputStreet = $('input#new-street').val();
    var inputCity = $('input#new-city').val();
    var inputState = $('input#new-state').val();
    var inputZip = $('input#new-zip').val();

    var newAddress = { street: inputStreet,
                       city: inputCity,
                       state: inputState,
                       zip: inputZip,
                       streetAddress: function() {
                         return this.street;
                       },
                       cityStateZipAddress: function() {
                         return this.city + ", " + this.state + " " + this.zip;
                       }
                     };
    var newContact = { firstName: inputFirstName,
                       lastName: inputLastName,
                       streetAddress: newAddress.streetAddress(),
                       cityStateZipAddress: newAddress.cityStateZipAddress()
                       };

    $('ul#contacts').append('<li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-user" aria-hidden="true"></span> <span class="contact">' + newContact.firstName + " " + newContact.lastName + '</span></li>');

    $('input#new-first-name').val("");
    $('input#new-last-name').val("");
    $('input#new-street').val("");
    $('input#new-city').val("");
    $('input#new-state').val("");
    $('input#new-zip').val("");


    $('.contact').last().click(function() {
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.firstName + " " + newContact.lastName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $('.street').text(newContact.streetAddress);
      $('.city-state-zip').text(newContact.cityStateZipAddress);

    });
  });
});
