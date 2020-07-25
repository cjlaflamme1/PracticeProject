$('document').ready(function () {
const searchTermInput = $('');
const numRecordsRetrieve = $('');

let searchTerm = 'election'

var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=VGZwZNo5TbgkYdXmf6BZEsLOkiJ0Psae`;

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
        //   response.docs[i]
        var articleArray = $(response.docs);
        articleArray.forEach(function (index) {
            console.log(articleArray[index]);
        });
    });

});