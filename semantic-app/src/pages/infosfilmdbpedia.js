import React, { useState, useEffect, useMemo } from 'react';
import { createPath, Link } from 'react-router-dom';

//Displaying page for the film from dbpedia

var ulr = document.URL.split('/')
var url = new URL("https://dbpedia.org/sparql");
  var params = {query:`PREFIX dbo: <http://dbpedia.org/ontology/> 
PREFIX foaf: <http://xmlns.com/foaf/0.1/> 
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 

SELECT DISTINCT ?film, ?number, ?abstract, (GROUP_CONCAT(DISTINCT ?starring; SEPARATOR="-") AS ?starring), ?name, (GROUP_CONCAT(DISTINCT ?subject; SEPARATOR="-") AS ?subjects)
                , ?cinematography, ?director, ?gross, (GROUP_CONCAT(DISTINCT ?producer; SEPARATOR="-") AS ?producer), ?language
WHERE
     {
        ?film dbo:wikiPageWikiLink dbr:`+ ulr[7] +` .
        ?film dbo:wikiPageID ?number .
        ?film dbp:starring ?starring .
        ?film rdfs:comment ?abstract .
        ?film dbp:name ?name .
        OPTIONAL { ?film dct:subject ?subject } .
        OPTIONAL { ?film dbo:cinematography ?cinematography } .
        OPTIONAL { ?film dbo:director ?director } .
        OPTIONAL { ?film dbo:gross ?gross } .
        OPTIONAL { ?film dbo:producer ?producer } .
        OPTIONAL { ?film dbp:language ?language } .


        FILTER ( LANG ( ?abstract ) = 'en' )
      }
LIMIT 10`};

function InfosFilmDb(){
  const [infoData, setInfoData] = useState(["error"]);
  url.search = new URLSearchParams(params).toString();
  const listItems = useMemo(() => infoData.map(({name}) => name ? name.value : undefined), [infoData]);

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/sparql-results+json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  useEffect(() => {
    function tryToDisplay() {
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => displayResult(result))
        .catch(error => displayError(error));
    }
    
    function displayError(error) {
      console.log(error);
    }
  
    function displayResult(data) {      
      setInfoData(data.results.bindings);
    }
    tryToDisplay();
  }, [])

  return (
    <div>
      <Link className="link" to="/">Menu</Link>
      <h2>Your film :</h2>
      {listItems.map((film) => (
        <h3 className='filmseries'> - {film} - </h3>
      ))}
    </div>
);
}


export default InfosFilmDb;