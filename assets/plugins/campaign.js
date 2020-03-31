
	document.addEventListener('DOMContentLoaded', initPopups());

	function initPopups() {
  	const queryString = document.location.search;
  	const hasPopupClosed = document.cookie.indexOf('CLASSIFIED-5042-Show-Modal=no') !== -1;

  	if (hasPopupClosed) {
    	// return;
  	}
  	const hasRedirectParam = hasQueryParam(queryString, 'show_modal=yes');

	  if (hasRedirectParam) {
	    setCookie('CLASSIFIED-5042-Show-Modal', 'yes', 3);
	  }

	  const hasCookieShowModal = document.cookie.indexOf('CLASSIFIED-5042-Show-Modal=yes') !== -1;

	  if (!hasCookieShowModal) {
	    // return;
	  }

	  const welcomeText = `During these hard convid19 times we would like to support all ecommerce businesses with a free 90 days onboarding package to our search|hub service.`;
	  const returnText = `Thank you for your interest. One of our frindly teammates will contact you soon.`;

	  document.querySelector('.welcome-popup__text').innerText = welcomeText;
	  document.querySelector('.return-popup__text').innerText = returnText;

	  const welcomeBtn = document.querySelector('.welcome-popup__button');
	  const returnBtn = document.querySelector('.return-popup__button');

	  welcomeBtn.onclick = function(e) {
	    e.stopPropagation();
	    togglePopup('.welcome-popup');
	    togglePopup('.return-popup');
	    return false;
	  };

	  returnBtn.onclick = function(e) {
	    e.stopPropagation();
	    togglePopup('.return-popup');
	    setCookie('CLASSIFIED-5042-Show-Modal', 'no', 3);
	    return false;
	  };

	  togglePopup('.welcome-popup');
	}

	function togglePopup(popupClass) {
	  const popup = document.querySelector(popupClass);
	  popup.classList.toggle('_hidden');
	}

	function setCookie(name, value, expireTimeInDays) {
	  const interval = expireTimeInDays * 24 * 60 * 60 * 1000;
	  const currentTime = new Date().getTime();
	  const newDate = new Date(currentTime + interval).toUTCString();
	  document.cookie = `${name}=${value}; expires=${newDate};`;
	}

	function hasQueryParam(queryString, paramString) {
	  if (!queryString && queryString.length === 0) {
	    return false;
	  }

	  const pairs = queryString.substring(1).split('&');
	  const paramIndex = pairs.indexOf(paramString);

	  return paramIndex !== -1 && pairs[paramIndex] === paramString;
}
