import './App.css';
import logo from "./images/Earthly-Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiTwitter, SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si"
import green from "./images/green.png";
import leaf1 from "./images/leaf1.png";
import leaf2 from "./images/leaf2.png";
import kit from "./images/kit/kit.png";
import straw from "./images/kit/straw.png";
import cup from "./images/kit/mug.png";
import loofah from "./images/kit/loofah.png";
import eartips from "./images/kit/buds.png";
import brush from "./images/kit/brush.png";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div className="App">
      
      <Parallax pages={7} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={1}>
        <div className='nav_bar'>
        <div className='nav_title'>
          <img src={logo} className='logo'/>
          <h1 className='title'>Earthly</h1>
        </div>
        <div className='nav_menu'>
          <div className='nav_item'>
            <p className='nav_item_content' style={{ fontWeight: 'bold' }}><a href='#'>Home</a></p>
          </div>
          <div className='nav_item'>
            <p className='nav_item_content'><a href='#'>Shop</a></p>
          </div>
          <div className='nav_item'>
            <p className='nav_item_content'><a href='#'>Contact</a></p>
          </div>
        </div>
        <div className='cart'>
          <AiOutlineShoppingCart className='cart_icon'/>
          <p className='cart_label'>Cart</p>
        </div>
      </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2}>
      <img src={green} className='green'/>  
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
        <div className='main'>
        <div className='tag'>
          <h1 className='tagline1'>
            YOUR <br/>SUSTAINABLE<br/> LIVING
          </h1>
          <img src={leaf1} className='leaves'/>
        </div>
        <div className='tag tag1'>
          <img src={leaf2} className='leaves'/>
          <h1 className='tagline'>
            YOUR <br/>ART<br/> EXPERIENCE
          </h1>
        </div>
      </div>

        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
        <div className='product'>
        <img src={kit} className='product_image' />
        <div className='product_shop'>
          <h1>Sustainability Starter Kit</h1>
          <p>This starter kit is all you need to start the revolution.</p>
          <h3>€10.99</h3>
          <p>Quantity: 1</p>
          <button className='button-41' role='button'>Add to Cart</button>
          <div className='social'>
            <SiTwitter className='icon'/>
            <SiFacebook className='icon'/>
            <SiInstagram className='icon'/>
            <SiWhatsapp className='icon'/>
          </div>
        </div>
      </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.25}>
        <div className='product_item'>
        <h2 className='product_name'>
          Bamboo Straws
        </h2>
        <img src={straw} className='product_item_img' />
      </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.25}>
        <div className='product_item'>
        <img src={cup} className='product_item_img' />
        <h2 className='product_name pn2'>
          Plant Based Reusable Cup 
        </h2>
      </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.25}>
        <div className='product_item'>
        <h2 className='product_name'>
          Natural Loofah
        </h2>
        <img src={loofah} className='product_item_img' />
      </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.25}>
        <div className='product_item'>
        <img src={eartips} className='product_item_img' />
        <h2 className='product_name pn2'>
          Bamboo Cotton Eartips
        </h2>
      </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0.25}>
        <div className='product_item'>
        <h2 className='product_name'>
          Bamboo Toothbrush
        </h2>
        <img src={brush} className='product_item_img' />
      </div>
        </ParallaxLayer>
      </Parallax>
      

    </div>
  );
}

export default App;