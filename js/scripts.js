$(document).ready(function() {
  $('#add-address').click(function() {
    $('#new-addresses').append('<br><div class="new-address">' +
                                 '<div class="form-group-sm">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group-sm">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                  '</div>' +
                                  '<div class="form-group-sm">' +
                                    '<label for="new-state">State</label>' +
                                    '<input type="text" class="form-control new-state">' +
                                  '</div>' +
                                  '<div class="form-group-sm">' +
                                    '<label for="new-zip">Zip</label>' +
                                    '<input type="text" class="form-control new-zip">' +
                                  '</div>' +
                                '</div>');
  });

  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputFirstName = $('input#new-first-name').val();
    var inputLastName = $('input#new-last-name').val();

    var newContact = { firstName: inputFirstName,
                       lastName: inputLastName,
                       addresses: []
                       };

    $('.new-address').each(function() {
      var inputStreet = $(this).find('input.new-street').val();
      var inputCity = $(this).find('input.new-city').val();
      var inputState = $(this).find('input.new-state').val();
      var inputZip = $(this).find('input.new-zip').val();

      var newAddress = { street: inputStreet, city: inputCity, state: inputState, zip: inputZip };
      newContact.addresses.push(newAddress);
    });

    $('ul#contacts').append('<li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-user" aria-hidden="true"></span> <span class="contact">' + newContact.firstName + ' ' + newContact.lastName + '</span></li>');

    $('.contact').last().click(function() {
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.firstName + ' ' + newContact.lastName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $('ul#addresses').text("");
      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append('<li><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span><br>' + address.street + '<br>' + address.city + ', ' + address.state + ' ' + address.zip + '</li>');
      });
    });

    $('input#new-first-name').val('');
    $('input#new-last-name').val('');
    $('input.new-street').val('');
    $('input.new-city').val('');
    $('input.new-state').val('');
    $('input.new-zip').val('');

  });
});
