import './buttons.css';

export default function Buttons({currentPage, changePage, pageNumber}) {
    const prevPage = currentPage -1;
    const nextPage = currentPage +1;

    const handleClick = (newPage) =>{
        changePage(newPage);
    }


    return(
        <div >
        {
          currentPage > 1 &&
  
          (<button className='botonDespl' onClick={() => handleClick(1)} >
            {"<<"}
          </button>)
        }
  
        {
          currentPage > 1 &&
  
          (<button className='botonDespl' onClick={() => handleClick(prevPage)} >
            {"  <  "}
          </button>)
        }
  
        
  
        <button className='botonDespl'>
          {currentPage}
        </button>
  
        
        {
          currentPage < pageNumber &&
  
          (<button className='botonDespl' onClick={() => handleClick(nextPage)} >
            {"  >  "}
          </button>)
        }
  
        {
          currentPage < pageNumber &&
  
          (<button className='botonDespl' onClick={() => handleClick(pageNumber)} >
            {">>"}
          </button>)
        }
      </div>
    );
}