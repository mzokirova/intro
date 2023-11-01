import logo from './logo.svg';
import './App.css';
import './sass/style.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <div className="App">
       {/* navbar  */}
      <header>
        <nav class="flex-row wraper">
          <a class="logo flex-row" href="index.html"><img src="./images/Group 396.png" alt=""/>Artifivial Intelligence</a>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <button class="my-btn">Sign in</button>
        </nav>
        </header>
      {/* navbar ends here  */}
      
      {/* showcase */}
       <div class="showcase  wraper flex-row">
        <div class="shw-left flex-col">
          <h4>Next generation platform</h4>
          <h1>Artificial intelligence & Syber security</h1>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <div class="flex-row">
            <button>Get Started</button>
            <button>Watch Video</button>
          </div>
        </div>
        <div class="shw-right">
          <img src="./images/shwcase.png" alt=""/>
        </div>
        
      </div>
      <div class="partners wraper flex-row">
        <img src="./images/logo1.png" alt="" />
        <img src="./images/logo2.png" alt="" />
        <img src="./images/logo3.png" alt="" />
        <img src="./images/logo4.png" alt="" />
      </div>
{/* second */}
      <div class="showcase second wraper flex-row my-pad">
        <div class="shw-right">
          <img src="./images/about 4.png" alt="" />
        </div>

        <div class="shw-left flex-col">
          <h1>Apply AI, Deep Learning and Data Sciece to solve</h1>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <div class="flex-row">
            <button>Learn More</button>
          </div>
        </div>
       

      </div>
      
      <Swiper class="swiper my-pad"
        modules={[Navigation,Pagination,Scrollbar]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{draggable:true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide class="swiper-slide ">
          <img src='./images/icons/icon1.png' />
          <h3>Naxly as the Winners in Global Agency Awards</h3>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src='./images/icons/icon2.png' />
          <h3>Expert Prespective Agency Awards</h3>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src='./images/icons/icon3.png' />
          <h3>Business Prespective Global Agency Awards</h3>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>

        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src='./images/icons/icon4.png' />
          <h3>Business Prespective Global Agency Awards</h3>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>

        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src='./images/icons/icon1.png' />
          <h3>Business Prespective Global Agency Awards</h3>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>

        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src='./images/icons/icon2.png' />
          <h3>Business Prespective Global Agency Awards</h3>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>

        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src='./images/icons/icon3.png' />
          <h3>Business Prespective Global Agency Awards</h3>
          <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>

        </SwiperSlide>


        ...
      </Swiper>

      <div class="showcase second wraper flex-row my-pad">
      
        <div class="shw-left flex-col">
          <h1>What our clients say about our awesome solutions</h1>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <div class="flex-row">
            <button>Learn More</button>
          </div>
        </div>
        <div class="shw-right">
          <img src="./images/icons/about3 1.png" alt="" />
        </div>


      </div>
      
      {/* footer */}
      <footer class="my-pad">
        <div class="cols wraper flex-row">
          <div class="col flex-col">

            <img src="./images/Group 396.png" alt="logo" />
            <a href="index.html" class="logo">Artificial Intelligence</a>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
            <a class="flex-row" href="#email"><i class="fa-solid fa-envelope"></i>Company@gmail.com.com</a>
            <a class="flex-row"><i class="fa-solid fa-phone"></i>Phone: (064) 332-1233</a>
            <a class="flex-row"><i class="fa-solid fa-location-dot"></i>450 Wall Street, USA, New York</a>
          </div>

          <div class="col flex-col">
            <h3>information</h3>
            <ul class="flex-col">
              <li><a href="#">New Collection</a></li>
              <li><a href="#">about store</a></li>
              <li><a href="#">contact us</a></li>
              <li><a href="#">latest news</a></li>
              <li><a href="#">our sitemap</a></li>
              <li><a href="#">orders history</a></li>
            </ul>
          </div>

          <div class="col flex-col">
            <h3>footer menu</h3>
            <ul class="flex-col">
              <li><a href="#">instagram profile</a></li>
              <li><a href="#">new collection</a></li>
              <li><a href="#">contact us</a></li>
              <li><a href="#">latest news</a></li>
              <li><a href="#">terms & conditions</a></li>
              <li><a href="#">purchase theme</a></li>
            </ul>
          </div>

          <div class="col flex-col">
            <h3>useful links</h3>
            <ul class="flex-col">
              <li><a href="#">instagram profile</a></li>
              <li><a href="#">new collection</a></li>
              <li><a href="#">contact us</a></li>
              <li><a href="#">latest news</a></li>
              <li><a href="#">terms & conditions</a></li>
              <li><a href="#">purchase theme</a></li>
            </ul>
          </div>

          <div class="col flex-col">
            <h3>about the store</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print,
              and layouts and visual mockups.
            </p>
            <h4>www.company.com</h4>
            <div class="flex-row">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <select name="lang" id="lang">
              <option value="">English</option>
              <option value="">Russian</option>
              <option value="">Uzbek</option>
            </select>
          </div>
        </div>
      </footer>
      {/* footer ends */}
      {/* showcase ends here */}
    </div>
  );
}

export default App;
