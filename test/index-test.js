describe("index.html", function() {

    it("displays the correct Titanic info from JSON", () => {

      expect(document.getElementById("title").innerHTML, "Title was not changed on page load").to.equal("Titanic")
      expect(document.getElementById("director").innerHTML, "Director was not changed on page load").to.equal("James Cameron")
      expect(document.getElementById("genre").innerHTML, "Genre was not changed on page load").to.equal("Drama")
      expect(document.getElementById("filmRating").innerHTML, "Film rating was not changed on page load").to.equal("PG-13")
    });


    it("displays the correct Titanic info from JSON", () => {

      const titanicCast = document.getElementById("cast").innerHTML
      const titanicReviews = document.getElementById("reviews").innerHTML
      document.getElementById('Terminator 2').click()
      expect(document.getElementById("title").innerHTML).to.equal("Terminator 2")
      expect(document.getElementById("cast").innerHTML).to.not.equal(titanicCast)
      expect(document.getElementById("genre").innerHTML).to.equal("Sci-fi")
      expect(document.getElementById("reviews").innerHTML).to.not.equal(titanicReviews)
      document.getElementById('Titanic').click()
      expect(document.getElementById("title").innerHTML).to.equal("Titanic")
      expect(document.getElementById("cast").innerHTML).to.equal(titanicCast)
      expect(document.getElementById("genre").innerHTML).to.equal("Drama")
      expect(document.getElementById("reviews").innerHTML).to.equal(titanicReviews)
    });

    it("displays the correct image ", () => {
      expect(document.getElementById("poster").src).to.equal("https://curriculum-content.s3.amazonaws.com/web-development/cruise-ship.jpg")
    });

    it("creates separate elements for each cast member ", () => {

      expect(document.getElementById("cast").childNodes.length).to.equal(4)
    });

    it("creates separate elements for each review ", () => {

      expect(document.getElementById("reviews").childNodes.length).to.equal(3)
      document.getElementById('Terminator 2').click()
      expect(document.getElementById("reviews").childNodes.length).to.equal(4)
    });
})
