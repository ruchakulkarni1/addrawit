import './shop.css'
import products from '../products.json';

//../../images/001 - SNAPDEAL/A (08 X 14)/A01.jpg
function shop(props) {


    return (
        <div className="homeClass">
            <img src={"https://rukminim1.flixcart.com/image/416/416/kqv8vww0/painting/l/r/r/14-a-08-rutwij-creations-original-imag4rxubezvxzbs.jpeg?q=70"} alt={`Preview`} />
        {products.map(product => {
          return (
            <div key={product.id} className="imgClass">
              <img src="C:\Users\Rucha Kulkarni\Desktop\Rucha-PSU\AdDrawIt\addrawit\addrawit\src\images\A01.jpg" alt={`Preview of ${product.title}`} />
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          );
        })}
      </div>
    )
}

export default shop

