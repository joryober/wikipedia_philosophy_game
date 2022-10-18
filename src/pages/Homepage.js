import React from "react";

const Homepage = () => {
  return (
    <div>
      <main>
        <h1>Wikipedia Philosophy Game</h1>
        <p>
          Enter a Wikipedia article title, and this program will check if
          repeatedly clicking the first link not in italics or parentheses will
          eventually lead to the article for Philosophy. (
          <a href="https://en.wikipedia.org/wiki/Wikipedia:Getting_to_Philosophy">
            What is this?
          </a>
          )
        </p>
        <form action="">
          <label htmlFor="article">Article:</label>{" "}
          <input type="text" id="article" name="article" />{" "}
          <input type="submit" value="Go!" /> <br /> <br />
          <input type="submit" value="Start with a random article?" /> <br />
          <br />
        </form>
      </main>
    </div>
  );
};

export default Homepage;
