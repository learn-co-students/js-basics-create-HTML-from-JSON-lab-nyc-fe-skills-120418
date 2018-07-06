# Creating HTML With JSON Lab

## Problem Statement

Let's say you want to look up a movie on [IMDB](http://www.imdb.com/):
you enter the title into a search bar, find the movie in the results and open
up a page that contains content unique to that specific movie. The page
includes the movie's description, the director, the stars, trailers, etc... its
all there! Each movie you navigate to has its own content, all displayed in a
consistent structure.

There are, however, thousands upon thousands of movies on IMDB. Creating a
unique HTML page for each movie would be absurd! Aside from how endlessly time
consuming it would be to create a separate webpage for every movie ever, what
would happen if you wanted to go back and make an change to the layout?

For this lab, we will be exploring the use of dynamic content, filling in a text
on a website using JSON data. Your task is to access the provided JSON data and
use it to populate a webpage using JavaScript and DOM manipulation.

## Objectives

* Retrieve data from a JSON file using JavaScript
* Use DOM manipulation to add HTML content to a page

## Retrieve Data From JSON

Many modern websites are built to display dynamic, rather than static content.
This means that a site will have some basic HTML skeleton, but the actual text
and images displayed are not hardcoded. Instead, specific content is sent
separately based on what you want to look at, and when it arrives,
JavaScript is used to add this content to the page.

The standard way we send this data is with JavaScript Object Notation, or JSON
for short. JSON data is sent as a long string to your browser, but the actual
content looks like a set of objects and arrays.  For instance, if you go to a
recipe website that uses JSON and click on a particular recipe, the data
received for the recipe would look something like this:

```
`{
  "recipeTitle": "Grilled Cheese",
  "description": "Cheese, inside of two pieces of bread, grilled with butter",
  "ingredients": [
    {
      "name": "bread",
      "quantity": 2,
      "units": "slices"
    },
    {
      "name": "cheddar cheese",
      "quantity": 1,
      "units": "cup"
    },
    {
      "name": "butter",
      "quantity": "1/2",
      "units": "cup"
    }
  ],
  "directions": "Grease griddle or frying pan with butter, etc... "
  ...
  }`
```

JavaScript is used to request this JSON string based on what you've clicked.
When it is received, it is converted into a set of nested objects and arrays,
which JavaScript can then read and use to fill in the content.

Many of the most popular websites around are built using JSON to deliver
their content. In fact, many of your favorite phone apps are too!
Understanding how to take data in JSON format and convert it to HTML content is
a critical skill in modern web development.

## Instructions

For this lab, we will use data for a movie as an example, creating our own
version of an IMDB page. A movie page has an assortment of related content: a
title, a director, a description, a list of stars, a rating, an image of the
poster, reviews, etc... You task is to get all the JSON content into
`index.html` using JavaScript.

The basic HTML page is provided this time, as your focus should be on the
handling the data.

#### Parsing JSON data

To get started, take a look at the files `index.js` and `movies.json`. All of
our data is in a separate file from our JavaScript. Since it is a local file,
the easiest way to get access to it would be to include an HTML script tag
within `index.html`. Add the following to the file, just before adding a`index.js`
script tag:

```html
<script type="text/javascript" src="movies.json"></script>
<script type="text/javascript" src="index.js"></script>
```

Now, since `movies.json` is loaded up first, we should have access to the JSON
content as the `movies` variable.

With the script tags in place, if you open up `index.html` in your browser and
look at the console, you should see the data output.

#### Deliverables

The way you choose to write your code is up to you. Use the provided
`window.addEventListener` as a starting point. Use test errors as guidance on
what to do next. Your app should do the following:

* Use the HTML ids to populate content from our JSON data with the appropriate
HTML elements

* On opening, replace any filler content with all of the data related to 'Titanic'

* Use the provided buttons to switch display content to 'Terminator' data and back


#### Suggested Work Flow

Assign the 'Titanic' data to `index.html` using DOM manipulation.  Each
key/value pair in the data corresponds to an element on the webpage, so you'll
need to write code that can append all of them.  The steps involved will change
for different values (i.e. you will need to use loops for the cast and reviews
data).

*Note:* when manipulating the DOM, use `innerHTML` instead of `innerText`.
