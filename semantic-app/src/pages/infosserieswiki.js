import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

var ulr = document.URL.split('/')
const endpointUrl = 'https://query.wikidata.org/sparql';
const sparqlQuery = `#Series
SELECT DISTINCT ?item ?itemLabel WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE], en". }
  {
    SELECT DISTINCT ?item WHERE {
      ?item p:P136 ?statement0.
      ?statement0 (ps:P136/(wdt:P279*)) `+ ulr[7] + `.
    }
    LIMIT 10
  }
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

function InfosSeriesWiki() {
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
          <Link className="link" to="/">Menu</Link>
          <h2>Your series :</h2>
          {listItems.map((film) => (
        <h3 className='filmseries'> - {film} - </h3>
      ))}
        </div>
    );
}

export default InfosSeriesWiki;