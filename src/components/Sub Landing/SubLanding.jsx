import './SubLanding.scss'
import RetroPC from '../../assets/images/image-retro-pcs.jpg'
import Top10Laptop from '../../assets/images/image-top-laptops.jpg'
import GamingGrowth from '../../assets/images/image-gaming-growth.jpg'

const SubLanding = () => {
    const NewItems = [
        {
            num: '01',
            img: RetroPC,
            title: 'Reviving Retro PCs',
            description: 'What happens when old PCs are given modern upgrades?',
        },
        {
            num: '02',
            img: Top10Laptop,
            title: 'Top 10 Laptops of 2022',
            description: 'Our best picks for various needs and budgets.',
        },
        {
            num: '03',
            img: GamingGrowth,
            title: 'The Growth of Gaming',
            description: 'How the pandemic has sparked fresh opportunities.',
        }
    ]

    return (
        <>
            <section id='SubLanding'>
                {
                    NewItems.map((curr, index) => {
                        return (
                            <div className='item' key={index}>
                                <img className='image' src={curr.img}/>
                                <div className='num'>{curr.num}</div>
                                <div className='title'>{curr.title}</div>
                                <div className='description'>{curr.description}</div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default SubLanding