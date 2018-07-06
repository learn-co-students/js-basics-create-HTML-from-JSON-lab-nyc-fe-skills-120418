
describe("index.html", function() {
    it("displays the correct JSON data ", () => {
      expect(document.getElementById("title").innerHTML).to.equal("Titanic")
      expect(document.getElementById("director").innerHTML).to.equal("James Cameron")
      expect(document.getElementById("genre").innerHTML).to.equal("Drama")
      expect(document.getElementById("filmRating").innerHTML).to.equal("PG-13")
    });

    it("displays the correct image ", () => {
      expect(document.getElementById("poster").src).to.equal("https://curriculum-content.s3.amazonaws.com/web-development/cruise-ship.jpg")
    });

    it("creates separate elements for each cast member ", () => {

      expect(document.getElementById("cast").childNodes.length).to.equal(4)
    });

    it("creates separate elements for each review ", () => {

      expect(document.getElementById("reviews").childNodes.length).to.equal(3)
    });
})
