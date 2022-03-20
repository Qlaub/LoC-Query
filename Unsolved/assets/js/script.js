var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function searchApi(query, format) {
  // TODO: add a base URL for the query
  let apiUrl = 'https://www.loc.gov/';
  // TODO: add a conditional statement to check if the format was used
  if (format) {
    apiUrl += `${format}/?q=${query}&fo=json`;
    console.log(apiUrl);
  } else {
    apiUrl += `search/?q=${query}&fo=json`;
    console.log(apiUrl);
  }

  // TODO: fetch the query
  fetch(apiUrl).then(function(response) {
    return response.json();
  })
  .then(function(data) {
    resultTextEl.textContent = data.search.query;

    if (data.results.length === 0) {
      resultContentEl.innerHTML = '<h3>No results available</h3>';
      return;
    }
    
    for (let i=0; i < data.results.length; i++) {
      resultContentEl.textContent = '';
      const currentResult = data.results[i];
      printResults(currentResult);
    }
  })
  .catch('Could not reach the Library of Congress site. Please check your connection.');

  // TODO: add catch to handle error
}

function printResults(resultObj) {
  console.log(resultObj);

  // TODO: create wrapper element to hold content
  const containerWrapper = document.createElement('div');

  // TODO: create element to hold the body content
  const bodyContent = document.createElement('div');

  // TODO: add body element to wrapper element
  containerWrapper.appendChild(bodyContent);

  // TODO: create title element and add result title to it
  const titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title;

  // TODO: create body element to hold the date, subject if it exists, and description if it exists
  const bodyEl = document.createElement('p');
  bodyEl.innerHTML = `Date: ${resultObj.date}</br>`;
  if (resultObj.subject) {
    bodyEl.innerHTML += `Subject: ${resultObj.subject.join(', ')}<br>`
  }

  if (resultObj.description) {
    bodyEl.innerHTML += `Description: ${resultObj.description.join(', ')}<br>`
  }

  console.log(bodyEl);

  // TODO: create button element to redirect to read more about the content

  // TODO: add title element, body element, and button element to the body content holder element

  // TODO: add wrapper element to page

}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // TODO: get values from inputs on page
  const query = document.getElementById('search-input').value; 
  const format = document.getElementById('format-input').value;

  // TODO: conditionally return if there is not a search value
  if (!query) return alert('Please enter a search term');


  // TODO: send values to function to use for a search query
  searchApi(query, format);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);


