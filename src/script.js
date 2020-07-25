$('document').ready(function () {
    // INPUTS
    const searchTermInput = $('');
    const numRecordsRetrieve = $('');
    const startYear = $('');
    const endYear = $('');
    const searchBTN = $('');
    const clearResultsBtn = $('');
    //   DISPLAY
    const topArticlesDisplay = $('');


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

        // hi

    // });


});