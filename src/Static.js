import { useState } from "react";
let Static = function () {
  let [quotes, setquotes] = useState("Stay Motivated!!!");
  let [author, setauthor] = useState("");
  let [count, setcount] = useState(0);
  let strFormat = function (num, str) {
    if (num <= 1) {
      return num + " " + str;
    }
    return num + " " + str + "s";
  };
  let Quote = function () {
    const URL =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        let random = Math.floor(Math.random() * data.quotes.length);
        let randomQuote = data.quotes[random].quote;
        let randomAuthor = data.quotes[random].author;
        setcount(count + 1);
        setauthor(randomAuthor);
        setquotes(`"" ${randomQuote} ""`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="sm:w-2/3 w-full rounded shadow p-5 mx-auto sm:my-10 flex flex-col items-center">
      <p className="text-2xl font-pop capitalize text-center my-3">
        Random Quotes Generator
      </p>
      <div className="w-full rounded shadow p-3">
        <p className="font-pop font-medium text-base text-center">{quotes}</p>
      </div>
      <div className="text-left w-full mt-2 flex flex-row items-center justify-between">
        <p className="font-pop font-semibold text-xs">Author🖋🖋 : {author}</p>
        <div>
          {count === 0 ? (
            <div></div>
          ) : (
            <p className="flex flex-row items-center rounded p-1">
              <small className="font-pop font-semibold text-xs">Count :</small>
              <small className="font-pop font-semibold text-xs ml-1">
                {strFormat(count, "Quote")}
              </small>
            </p>
          )}
        </div>
      </div>
      <button
        type={"button"}
        className="py-3 px-5 rounded block mx-auto w-1/2 bg-black text-white font-pop font-semibold mt-3"
        onClick={() => Quote()}
      >
        Next
      </button>
    </div>
  );
};

export default Static;
