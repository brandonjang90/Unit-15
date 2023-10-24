const $searchInput = $('#search');
const $outcomeDiv = $('#gif')

function createGif(res){
    let results = res.data.length;
    if (results) {
      let randomIdx = Math.floor(Math.random() * results);
      let $newColumn = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url,
        class: "w-80"
      });
      $newColumn.append($newGif);
      $outcomeDiv.append($newColumn);
    }
}

$('form').on('submit', async function (evt) {
    evt.preventDefault();

    let searchWord = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
        q: searchWord,
        api_key: "HTH0rlV5wVnr7uO5ABPXPiIT70TuDbgD"
      }
    });
    createGif(response.data);
});

    $('#delete').on('click', function() {
        $outcomeDiv.empty();
    });