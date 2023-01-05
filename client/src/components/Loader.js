import gif_perro from '../images/gif_perro_sinfondo.gif';
import './loader.css';

export default function Loader() {
    return(
        <div className='fondo_1'>    
            <div className="loader">
            <img className='imgdog' src={gif_perro} alt="loading"/>
            <h3 className='loading'><strong>LOADING . . .</strong></h3>
            </div>
        </div>
    )
};
