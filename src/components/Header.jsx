import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/68824824_10217005691912933_9008573695815319552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHcVn5T0GNGLJQYXcZ_bmUHRIZB6QNoxNFEhkHpA2jE0Rnp3NdzM7RWWaNwfbfxYlU&_nc_ohc=oxh7z0e__G4AX-6PvQP&_nc_ht=scontent-fra5-2.xx&oh=00_AfD_PRplbgDfk821HUd680fHwFgjowcQXxhggeBiJriUJg&oe=63CD3249"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/48415776_10215326901904232_8050525070860222464_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFf-RdflZluqGdNKiowu01UDul5nLeufeoO6Xmct6596uiSqBYUJu5M51CP7Ztf_Qw&_nc_ohc=u54pqB4TOBkAX-R6dli&_nc_ht=scontent-fra5-2.xx&oh=00_AfCx3mk1SPoSSc33Q317DMFP4o7sWn2mUUwoJwQHjP54vw&oe=63CD3C98"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/48415776_10215326901904232_8050525070860222464_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFf-RdflZluqGdNKiowu01UDul5nLeufeoO6Xmct6596uiSqBYUJu5M51CP7Ztf_Qw&_nc_ohc=u54pqB4TOBkAX-R6dli&_nc_ht=scontent-fra5-2.xx&oh=00_AfCx3mk1SPoSSc33Q317DMFP4o7sWn2mUUwoJwQHjP54vw&oe=63CD3C98"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;