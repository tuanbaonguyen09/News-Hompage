import './MainNew.scss'
import MainLandingDesktop from '../../assets/images/image-web-3-desktop.jpg'
import MainLandingMobile from '../../assets/images/image-web-3-mobile.jpg'
const MainNew = () => {


    return (
        <>
            <section id='MainNew'>
             
                <img 
                    id='desktop' src={MainLandingDesktop} alt='Main Landing Desktop'/>
                <img 
                    id='mobile' src={MainLandingMobile} alt='Main Landing Mobile'/>

                <div className='content'>
                    <div className='title'>
                        The Bright Future of Web 3.0?
                    </div>

                    <div className='description'>
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?
                        </p>
                        <button>
                            Read more
                        </button>
                    </div>
                </div>


            </section>
        </>
    )
}

export default MainNew