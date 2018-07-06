function handleJSON(movie) {

    let json = movies[movie]
    document.getElementById('title').innerHTML = json.title
    document.getElementById('director').innerHTML = json.director
    document.getElementById('genre').innerHTML = json.genre
    document.getElementById('filmRating').innerHTML = json.filmRating
    document.getElementById('poster').src=json.poster
    document.getElementById('description').innerHTML = json.description
    document.getElementById('audienceScore').innerHTML = json.audienceScore
    document.getElementById('cast').innerHTML = ""
    document.getElementById('reviews').innerHTML = ""
    json.cast.forEach(star => {
      let div = document.createElement('div')
      div.innerHTML = `<span>${star.actor}</span><span>${star.role}</span>`
      document.getElementById('cast').appendChild(div)
    })
    json.reviews.forEach(review => {
      let div = document.createElement('div')
      div.innerHTML = `<div>${review.content}</div><div>-${review.username}</div>`
      document.getElementById('reviews').appendChild(div)
    })
}

function handleButton(event) {
    handleJSON(event.target.id)
}


window.onload = () => {

  handleJSON("Titanic")

  let buttons = document.getElementsByTagName('button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButton)
  }
};
