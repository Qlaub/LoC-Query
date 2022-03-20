# Unit 06 Mini-Project: Library of Congress Search Tool

In this activity, you will work with a group to build an application that searches and displays results from the Library of Congress API.

## Instructions

The completed application should meet the following criteria:

- As a user, I can submit a search query from the application to request data and receive a response from the Library of Congress.

- As a user, I can either perform a generic search for data in all formats or I can select a format in the form to help filter results.

- As a user, I can conduct additional searches after results are listed on the page.

To learn about how to use this API, check out the Requests section of the Library of Congress API documentation[🥸](https://libraryofcongress.github.io/data-exploration/).

### The Tasks

The html page (`index.html`) should have and do the following:

- Read the documentation to understand the values need for the dropdown of the given html page.

- Take the query parameters and use them in a request URL to fetch data from the Library of Congress API.

- If there is a value for the format query parameter, use the format endpoint to search for something based on the chosen format. For more information, see the Library of Congress API documentation on the format endpoint[🥸](https://libraryofcongress.github.io/data-exploration/requests.html#format).

- If there is no value for the format query parameter, use the search endpoint to search for all types of data. For more information, see the Library of Congress API documentation on the search endpoint[🥸](https://libraryofcongress.github.io/data-exploration/requests.html#search).

- The response from the API request will then be displayed on the page. It is up to you and your team to determine which data should be displayed from the overall `response` object, but you must use data from the `results` property in the `response` object. For more information, see the Library of Congress API documentation on responses[🥸](https://libraryofcongress.github.io/data-exploration/responses.html).

## Assets

The following image demonstrates the homepage's appearance and functionality:

![The search results page displays results from a search conducted in the form on the left side of the page.](./Images/02-search-results-page.png)

---

## 💡 Hints

Will every result have the same data? If not, how will we handle printing it to the page? Can the form design and functionality from the homepage be reused for the search results page?

## 🏆 Bonus

- How can we build this application using our knowledge in Git collaboration?

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
