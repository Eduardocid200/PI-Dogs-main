import React from 'react';
import './pagination.css'




export default function Pagination({dogsPerPage, allDogs, pagination, currentPage}) {
    const pageNumbers = [] //declaro arreglo vacio

    for (let i = 1; i <=Math.ceil(allDogs/dogsPerPage); i++) { //todos los perros dividido perros por pagina
        pageNumbers.push(i)  //pusheo en el arreglo
       
    }
   
    return (
     
        //     <nav className ={ "nav-container"}>
        //     <ul className= {'pagination'}>  
        //     {pageNumbers.map(number => (
                     
        //              <button onclick={()=> pagination(number)} key={number} className={"pagination-"+(currentPage === number ? 'active': '')}>
        //              <span>{number}</span>
        //    </button>            
        //         )) }
        //       </ul>
        //     </nav>
  
    // )

    <nav>
    <div className='pagination_container'> 
        { pageNumbers && pageNumbers.map((number, i) => (
             <button key={i} onClick={() => pagination(number)} className={'pagination'+ (currentPage === number ? '-active' : '')}  >{number} </button>
        ))}
    </div>

</nav>
    )
}