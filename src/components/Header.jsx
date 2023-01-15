import Carousel from 'react-bootstrap/Carousel';
import { BsFacebook, BsInstagram, BsTelephone } from 'react-icons/bs';

function Header() {
  return (
    <>
      <Carousel fade className=' mb-5'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://debati.bg/wp-content/uploads/2020/07/Alaskapixar-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='carusel-h3'>Номер 1 в Авиобояджийските услуги</h3>
            <p>Ако имате нужда от професионалисти сте на правилното място</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.netinfo.bg/media/images/50258/50258657/745-425-kola.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='carusel-h3'>Всякакви автобояджийски услуги</h3>
            <p>Боядисване - Лакиране - Полиране</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.decor-dimotika.bg/wp-content/uploads/2020/02/lateks-cvetove-detska-staq-momche.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='carusel-h3'>Боядисване на Мебели</h3>
            <p>
              Свържи се с нас за повече информация
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ul className="nav align-items-center justify-content-center">
        <li className="nav-item">
          <a href="tel:+359889729510" className="nav-link px-2 link-secondary"><BsTelephone /> Телефон за връзка +359889729510</a>
        </li>
        <li className="nav-item">
          <span className="ms-3"><a href="https://www.facebook.com/sergei.sredkov" className="text-muted"><BsFacebook /></a></span>
        </li>
        <li className="nav-item">
          <span className="ms-3"><a href="https://www.instagram.com/sergey_sredkov/" className="text-muted"><BsInstagram /></a></span>
        </li>
      </ul>
    </>
  );
}

export default Header;