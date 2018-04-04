function handleJSON() {

  //All of your JavaScript should go within this function
  //handleJSON() is called when the window loads, so refresh your page to check tests

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
