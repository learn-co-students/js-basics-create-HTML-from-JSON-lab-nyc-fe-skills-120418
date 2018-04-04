describe("index.html", function() {
    it("displays the correct JSON data ", () => {
      expect(document.getElementById("title").innerHTML).toEqual("Titanic")
      expect(document.getElementById("director").innerHTML).toEqual("James Cameron")
      expect(document.getElementById("genre").innerHTML).toEqual("Drama")
      expect(document.getElementById("filmRating").innerHTML).toEqual("PG-13")
    });

    it("displays the correct image ", () => {
      expect(document.getElementById("poster").src).toEqual("https://curriculum-content.s3.amazonaws.com/web-development/cruise-ship.jpg")
    });

    it("creates separate elements for each cast member ", () => {
      console.log(document.getElementById("cast").childNodes)
      expect(document.getElementById("cast").childNodes.length).toEqual(4)
    });

    it("creates separate elements for each review ", () => {
      console.log(document.getElementById("reviews").childNodes)
      expect(document.getElementById("reviews").childNodes.length).toEqual(3)
    });
})
