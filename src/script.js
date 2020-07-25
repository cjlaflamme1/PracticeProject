$('document').ready(function () {
    // INPUTS
    const searchTermInput = $('search-term-input');
    const numRecordsRetrieve = $('number-records-retrieve');
    const startYear = $('start-year-input');
    const endYear = $('end-year-input');
    const searchBTN = $('');
    const clearResultsBtn = $('');
    //   DISPLAY
    const topArticlesDisplay = $('top-articles-display');


    // searchBTN.on('click', function () {
        let searchTerm = 'election'

        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=VGZwZNo5TbgkYdXmf6BZEsLOkiJ0Psae`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);

            var articleArray = $(response.response.docs);

            $.each(articleArray, function (article) {
                console.log(articleArray[article]);
            });

        });

    // });


});