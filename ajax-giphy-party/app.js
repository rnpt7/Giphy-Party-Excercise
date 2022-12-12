const $gifContainer = $("#gif-container");
const $search = $("#search");

function addGIF(res) {
  let $newGIF = $("<img>", {
    src: res.data.data[0].images.original.url,
    id: "gif",
  });
  $gifContainer.append($newGIF);
}

$("form").on("submit", async function (e) {
  e.preventDefault();

  let search = $search.val();
  $search.val("");

  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: search,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGIF(res);
});

$("#clear").on("click", function () {
  $gifContainer.empty();
});
