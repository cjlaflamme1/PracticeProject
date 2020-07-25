$('document').ready(function () {
  const searchTermInput = $('');
  const numRecordsRetrieve = $('');

  let searchTerm = 'election'

  var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=VGZwZNo5TbgkYdXmf6BZEsLOkiJ0Psae`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    //   response.docs[i]

    var articleArray = $(response.response.docs);

    $.each(articleArray,function(article){
      console.log(articleArray[article]);
    });

  });

});