const Search = (search, styles, callback) => {
	var xhr = new XMLHttpRequest(); // new HttpRequest instance
	var theUrl = `https://m19dxw5x0q-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.13.1)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(4.42.0)%3B%20Vue%20(2.6.14)%3B%20Vue%20InstantSearch%20(4.3.3)%3B%20JS%20Helper%20(3.9.0)&x-algolia-api-key=c79b2e61519372a99fa5890db070064c&x-algolia-application-id=M19DXW5X0Q`;
	xhr.open("POST", theUrl);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	let facetFilters = `%5B%5B`;
	for (let index = 0; index < styles.length; index++) {
		facetFilters += `%22style%3A${styles[index]}%22`;
		if (index < styles.length - 1) {
			facetFilters += "%2C";
		}
	}
	facetFilters += "%5D%5D";
	xhr.send(
		`{"requests":[{"indexName":"fontawesome_com-splayed-6.1.1","params":"clickAnalytics=true&distinct=true&facetFilters=${facetFilters}&facets=%5B%22categories%22%2C%22style%22%2C%22is_free%22%2C%22is_new_in_v6%22%2C%22is_sponsored%22%2C%22is_staff_favorite%22%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&hitsPerPage=180&maxValuesPerFacet=100&page=0&query=${search}&tagFilters=&userToken=anonymous-1fbe45dc-4eaa-4c3d-aaed-9711d3bb4ff4"},{"indexName":"fontawesome_com-splayed-6.1.1","params":"analytics=false&attributesToHighlight=%5B%5D&attributesToRetrieve=%5B%5D&attributesToSnippet=%5B%5D&clickAnalytics=false&distinct=true&facetFilters=%5B%5B%22type%3Aicon%22%5D%5D&facets=style&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&hitsPerPage=1&maxValuesPerFacet=100&page=0&query=${search}&tagFilters=&userToken=anonymous-1fbe45dc-4eaa-4c3d-aaed-9711d3bb4ff4"}]}`
	);
	xhr.onload = () => {
		// print JSON response
		if (xhr.status >= 200 && xhr.status < 300) {
			// parse JSON
			const response = JSON.parse(xhr.responseText);
			callback(response);
		}
	};
};

export { Search };
