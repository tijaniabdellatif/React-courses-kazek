import React from 'react';
import ReactDom from 'react-dom';
import {dataBook} from './data/data';
import { Books } from './components/Books';

import './index.css';

console.log(dataBook);


/**
 * 
 * un composant react doit absolument retourné du JSX
 * CamelCase ou KebabCase
 */
function BookList(){

         return (
           <>

           <section className="container mx-auto my-12 px-4">
              <Heading title="Book list" />
              <Books />
           </section>
          
           </>
         );
}


const Heading = (props) => {


 
  console.log(props);
   
  return(
    <h1 className="font-mono text-3xl font-extrabold text-center text-red-800">
      {props.title}
    </h1>
  );

}



ReactDom.render(<BookList />,document.getElementById('root'));


