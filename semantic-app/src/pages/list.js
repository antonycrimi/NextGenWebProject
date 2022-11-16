import React from 'react';

function List () {
    return (
        <div>
          <h2>List</h2>
          <a href={"/list/infos/"+"sf"}>SF</a><br/>
          <a href={"/list/infos/"+"horreur"}>Horreur</a><br/>
          <a href={"/list/infos/commedie"+"commedie"}>Commedie</a><br/>
          <a href={"/list/infos/drama"+"drame"}>Drama</a><br/>
        </div>
    );
}

export default List;