function extractContent(s) {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };
      
  alert(extractContent("The shipment is being brought to <a href='https://psf.dhl.com/?countrycode=DE&address=Herne Amalienstr. 1' class='arrowLink' target='_blank'><span class='arrow'></span>Filiale Herne Amalienstr. 1</a> for pick-up. The earliest time when it can be picked up can be found on the notification card."));

 
