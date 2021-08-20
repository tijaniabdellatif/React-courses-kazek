import React from 'react';



export const Card = () => {

    return(

    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">

<img src="" className="block h-auto w-full" />

        </a>
        <header className="flex items-center justify-between p-2 md:p-4">

            <h1 className="text-lg">
                <a className="no-underline hover:underline" style={{color:'red'}}>Titre 1</a>
            </h1>
            <p className="text-gray-darker text-sm">
                date
            </p>
        </header>
        <footer className="flex items-center justify-between p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black">
                <img className="block rounded-full" src="" />
                <p className="ml-2 text-sm">
                    Le nom de l'auteur
                </p>


                <p className="ml-2 text-sm">
                    Price : <span className="text-red-800"
                      style={{margin:'0.75rem',marginTop:"0.25rem"}}
                    ></span>
                </p>
            </a>

            <a className="no-underline text-gray-darker hover:text-red-dark">
            <span>
                Font Awseome Like
            </span>
            </a>

            <a className="no-underline text-gray-darker hover:text-red-dark">
            <span>
                Font Awseome Shoppin cart
            </span>
            </a>
            
        </footer>

        <div className="text-center my-7">

            <button className="bg-white hover:bg-gray-100 py-2 px-4 border-gray-400 rounded shadow">
             
             Add to Cart <span>

                 FontAwesome Shoppng Cart
             </span>

            </button>


        </div>
    </div>


    </div>
    );

}