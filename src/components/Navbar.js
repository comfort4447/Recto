import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faSearch, faCartShopping, faHeart, faBars, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { home } from '../Helpers/CarouselData';
import { CardData } from '../Helpers/CardData';
import { AboutData } from '../Helpers/AboutData';
import { MenuData } from '../Helpers/MenuData';
import { Review } from '../Helpers/Review';


function Navbar() {
    const autoscroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const [currImg, setCurrImg] = useState(0)
    
    const sliderLength = home.length

    const nextSlide = () => {
        setCurrImg(currImg === sliderLength - 1 ? 0 : currImg + 1)
    }

    const prevSlide = () => {
        setCurrImg(currImg === 0 ? sliderLength - 1 : currImg - 1)
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrImg(0);
    }, []);

    useEffect(() => {
        if (autoscroll) {
            auto();
            return () => clearInterval(slideInterval)
        }
    }, [currImg]);

    const [showLinks, setShowLinks] = useState(false)
    
    return (
        <>
            
            <div className='Navbar'>
                <div className='left-side'>
                    <h2><a href='#slider'><FontAwesomeIcon className='utensils' icon={faUtensils}/></a></h2>
                    <h2><a href='#slider'>RECTO</a></h2>
                </div>
                <div className='middle-side'>
                    <div className='links' id={showLinks ? "hidden" : ""}>
                        <a href='#slider'>Home</a>
                        <a href='#dishes'>Dishes</a>
                        <a href='#About'>About</a>
                        <a href='#menu'>Menu</a>
                        <a href='#review'>Review</a>
                    </div>
                    <button onClick={() => setShowLinks (!showLinks)}>
                        <FontAwesomeIcon size='2x' icon={faBars}/></button>
                </div>
                <div className='right-side'>
                        <a><FontAwesomeIcon icon={faSearch}/></a>
                        <a><FontAwesomeIcon icon={faHeart}/></a>
                        <a><FontAwesomeIcon icon={faCartShopping}/></a>
                </div>
            </div>
        <div className='container'>
            <div className='slider' id='slider'> 
            <h2><FontAwesomeIcon className='arrow' icon={faAngleRight} onClick={nextSlide}/></h2>
            {home.map((slide, index) => {
                return (
                    <div className={index === currImg ? "slide current" : "slide"} key={index}>
                        {index === currImg && (
                            
                                <div className='slidecontent'>
                                    
                                    <div className='H-img'>
                                        <img className='hd-img' src={slide.img} alt="" />
                                    </div>
                                    <div className='slide-content'>
                                        <p className='p-1'>{home[currImg].Header}</p>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.subtitle}</p>
                                        <div className='btnSlider'>
                                            <button className='center-btn'>Order Now</button>
                                        </div>
                                    </div>
                                </div>
                        )}
                    </div>
                )
            })}
            <h2><FontAwesomeIcon className='arrow' icon={faAngleLeft} onClick={prevSlide}/></h2>
        </div>
    <div className='center' id='dishes'> 
            <div className='dishes'>
                <div className='dishes-title'>
                    <p>Our Dishes</p>
                    <h1>Popular Dishes</h1>
                </div>
                <div className='overflow'>
                <div className='cards'>
                    {CardData.map(post => {
                        return(
                            <div className='card'>
                                <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className='img'>
                                    <img src={`../images/${post.img1}`} className='card-img' />
                                    <p className='card-title'>{post.dishes}</p>
                                </div>
                                <div className='card-description'>
                                    <p className='card-price'>{post.price}</p>
                                    <button className='card-btn'>{post.btn}</button>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
            </div>

            <div className='AboutUs' id='About'>
                <div className='about-title'>
                    <p>About Us</p>
                    <h1>WHY CHOOSE US?</h1>
                </div>
                <div className='About'>
                {AboutData.map(item => {
                    return (
                        <div className='about'>
                            <div className='img1'>
                            <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500">
                                <img className='about-img' src={`../Images/${item.img}`}/>
                            </div>
                            </div>
                            <div className='about-us'>
                            <div data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500">
                                <h1>{item.header}</h1>
                                <p>{item.details}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>

        <div className='menu' id='menu'>
            <div className='dishes-title'>
                <p>Our Menu</p>
                <h1>TODAY'S SPECIALITY</h1>
            </div>
            <div className='overflow'>
                <div className='cards-menu'>
                    {MenuData.map(posts => {
                        return(
                            <div className='Menu'>
                                <div data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                <div className='img2'>
                                    <img src={`../images/${posts.img1}`} className='menu-img' />
                                    <h1 className='card-title'>{posts.dishes}</h1>
                                    <p className='details'>{posts.details}</p>
                                </div>
                                <div className='card-description'>
                                    <button className='card-btn'>{posts.btn}</button>
                                    <p className='card-price'>{posts.price}</p>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
        </div>


        <div className='reviews' id='review'>
                <div className='REVIEW-title'>
                    <p>Customer's Review</p>
                    <h1>WHAT THEY SAY</h1>
                </div>
                <div className='overflow'>
                <div className='review'>
                    {Review.map(postr => {
                        return(
                            <div className='review-card'>
                                <div className='card-review'>
                                    <img src={`../images/${postr.img1}`} className='rev-img' />
                                    <h1 className='card-title'>{postr.dishes}</h1>
                                </div>
                                <div className='review-de'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>

    
        <footer className='grid-container'>
        <div className='location'>
            <h1>Locations</h1>
            <p>India</p>
            <p>Span</p>
            <p>Russia</p>
            <p>USA</p>
            <p>France</p>
        </div>
        <div className='quick'>
                <h1>Quick Links</h1>
            <div className='quick1'>
                <p><a href='#'>Home</a></p>
                <p><a href='#'>Dishes</a></p>
                <p><a href='#'>About</a></p>
                <p><a href='#'>Menu</a></p>
                <p><a href='#'>Review</a></p>
            </div>
        </div>
        <div className='contact'>
            <h1>Contact Info</h1>
            <p>+234 814 589 8631</p>
            <p>+234 806 251 4206 </p>
            <p>tayoabisola44@gmail.com</p>
            <p>tayoabisola44@gmail.com</p>
        </div>
        <div className='follow'>
            <h1>Follow Us</h1>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
        </div>
        
        </footer>
        <div className='copy'>
            <p>Copyright @ 2021 By <span>Tayo Comfort</span></p>
        </div>
    </div>
</>
        
    )
}

export default Navbar;