function handleJSON() {
    let json = JSON.parse(jsonData)
    $('#title').text(json.title)
    $('#director').text(json.director)
    $('#genre').text(json.genre)
    $('#filmRating').text(json.filmRating)
    $('#poster').attr('src', json.poster)
    $('#description').text(json.description)
    $('#audienceScore').text(json.audienceScore)
    json.cast.forEach(star => {
      $('#cast').append(`<div><span>${star.actor}</span><span>${star.role}</span></div>`)
    })
    json.reviews.forEach(review => {
      $('#reviews').append(`<div><div>${review.content}</div><div>-${review.username}</div></div>`)
    })
}

//this JSON data should not be altered during the lab
const jsonData = `{
  "title": "Titanic",
  "director": "James Cameron",
  "genre": "Drama",
  "filmRating": "PG-13",
  "poster":
    "https://curriculum-content.s3.amazonaws.com/web-development/cruise-ship.jpg",
  "audienceScore": 7.8,
  "description":
    "A blooming romance is tested when an unexpected event occurs. Jack and Rose are forced to work together and escape from Billy Zane.",
  "cast": [
    {
      "role": "Jack",
      "actor": "Leonardo DiCaprio"
    },
    {
      "role": "Rose",
      "actor": "Kate Winslett"
    },
    {
      "role": "Cal",
      "actor": "Billy Zane"
    },
    {
      "role": "The Titanic",
      "actor": "The Titanic"
    }
  ],
  "reviews": [
    {
      "username": "Thomas Andrews",
      "content": "great film. Didn't think the ship would sink, but it did!"
    },
    {
      "username": "Brock Lovett",
      "content": "I enjoyed the treasure hunting guy."
    },
    {
      "username": "Ruth Dewitt Bukater",
      "content": "Rose could have shared the space on that door."
    }
  ]
}`

window.addEventListener("load", () => {
  handleJSON()
});
