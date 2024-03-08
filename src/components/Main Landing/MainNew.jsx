import './MainNew.scss'
import MainLanding from '../../assets/images/image-web-3-desktop.jpg'
const MainNew = () => {


    return (
        <>
            <section id='MainNew'>
                <img src={MainLanding} alt='Main Landing'/>
                <div className='content'>
                    <div className='title'>
                        The Bright Future of Web 3.0?
                    </div>

                    <div className='description'>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?
                    </div>
                </div>

                <button>
                    Read more
                </button>
            </section>
        </>
    )
}

export default MainNew