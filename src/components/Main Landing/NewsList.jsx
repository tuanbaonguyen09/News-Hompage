import './NewsList.scss'

const NewsList = () => {
    const newsList = [
        {
            title: 'Hydrogen VS Electric Cars',
            description: 'Will hydrogen-fueled cars ever catch up to EVs?',
        },
        {
            title: 'The Downsides of AI Artistry',
            description: 'What are the possible adverse effects of on-demand AI image generation?',
        },
        {
            title: 'Is VC Funding Drying Up?',
            description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        }
    ]

    return (
        <>
            <section id='NewsList'>
                <div className='main-title'>
                    New 
                </div>
                <div className='news'>
                    {newsList.map( (current, index) => {
                        return (
                            <div className='new' key={index}>
                                <div className='title'>
                                    {current.title}
                                </div>
                                <div className='description'>
                                    {current.description}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default NewsList