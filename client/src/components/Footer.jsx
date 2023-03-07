import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <p className="NombreFooter">Pi-Dogs de Eduardo Cid</p>
            <p className="MailFooter">Email: eduardocid1986@gmail.com</p>
          </div>
          <hr></hr>
          <div class="col-md-4">
            <h4 className="Siguenos">Seguime en redes sociales</h4>
            <ul class="list-unstyled">
              <li>
                <a className="instagram" href="https://www.instagram.com/eduardocid200">
                  <i class="bi bi-instagram"></i>Eduardo Cid
                </a>
              </li>
             
              <li style={{ display: 'inline-block', margin: '0 0.4em  ', color: 'white', textDecoration:'none'}}>
                <a href="https://github.com/Eduardocid200">
                  <i class="bi bi-github">Eduardo Cid</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div class="row">
          <div class="col-md-6">
            <p className="copyright">&copy; 2023 Eduardo Cid. Todos los derechos reservados.</p>
          </div>
         </div>
      </div>
    </footer>
  )
}
