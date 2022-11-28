import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
const endpointUrl = 'https://query.wikidata.org/sparql';
const sparqlQuery = `#Films réalisés en 2017
SELECT DISTINCT ?item ?itemLabel WHERE {
  ?item wdt:P31 wd:Q11424.
  ?item wdt:P577 ?pubdate.
  FILTER((?pubdate >= "2010-01-01T00:00:00Z"^^xsd:dateTime) && (?pubdate <= "2012-12-31T00:00:00Z"^^xsd:dateTime))
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}`;

class getInfo {
	constructor( endpoint ) {
		this.endpoint = endpoint;
	}

	query( sparqlQuery ) {
		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( sparqlQuery );
		const headers = { 'Accept': 'application/sparql-results+json' };

		return fetch( fullUrl, { headers } ).then( body => body.json() );
	}
}

function Infos() {
  const [info, setInfo] = useState(["test"]);
  const [queryDispatcher] = useState(new getInfo( endpointUrl ));

  const listItems = useMemo(() => info.map(({itemLabel}) => itemLabel ? itemLabel.value : undefined), [info]);
  console.log(listItems);

  useEffect(() => {
  async function asyncCall() {
    
    const result = await queryDispatcher.query( sparqlQuery );
    setInfo(result.results.bindings);
    //console.log(info);
  }

  asyncCall();
  }, [])

    return (
        <div>
          <Link to="/">Clique pour retourner au menu</Link>
          <h2>Infos</h2>
          <h4>Film = {listItems}</h4>
        </div>
    );
}

export default Infos;