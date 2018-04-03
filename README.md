# Creating HTML With JSON Lab

## Objectives

* Retrieve data from a JSON file using JavaScript
* Use DOM manipulation to add HTML content to a page

## Background

Let's say you want to look up a movie on [IMDB](http://www.imdb.com/):
you enter the title into a search bar, find the movie in the results and open
up a page that contains content unique to that specific movie. The page
includes the movie's description, the director, the stars, trailers, etc... its
all there! Each movie you navigate to has its own content, all displayed in a
consistent structure.

There are, however, thousands upon thousands of movies on IMDB. Creating a
unique HTML page for each movie would be absurd! Aside from how endlessly time
consuming it would be to create a webpage for every movie ever, what would
happen if you wanted to go back and change the layout?

Many modern websites are built to display dynamic, rather than static content.
This means that a site will have some basic HTML skeleton, but the actual text
and images displayed are not hardcoded. Instead, specific content is sent
separately based on what you want to look at, and when it arrives,
JavaScript is used to add this content to the page.

The standard way we send this data is with JavaScript Object Notation, or JSON
for short. JSON data is sent as a string to your browser and then converted
into a set of nested objects and arrays, which JavaScript can read and use to
fill in the content.

Many of the most popular websites around are built using JSON to deliver
their content. In fact, many of your favorite phone apps are too!
Understanding how to take data in JSON format and convert it to HTML content is
a critical skill in modern web development, and in this lab, we will be doing
just that!

## Instructions

For this lab, your task is to access the provided JSON file and use it to
populate a webpage using JavaScript and DOM manipulation. The basic HTML page
is provided this time, as your focus should be on the handling the data.

Take a look at the file `movie.json` provided with this lab. For
this lab, we will use data for a movie as an example. A movie page has a
assortment of related content: a title, an author, a description, a list of
stars, a rating, an image of the poster, reviews, etc... You task is to get all
the content in `movie.json` into `index.html` using JavaScript.
