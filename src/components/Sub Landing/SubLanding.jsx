import './SubLanding.scss'

const SubLanding = () => {
    const NewItems = [
        {
            num: '01',
            title: 'Reviving Retro PCs',
            description: 'What happens when old PCs are given modern upgrades?',
        },
        {
            num: '02',
            title: 'Top 10 Laptops of 2022',
            description: 'Our best picks for various needs and budgets.',
        },
        {
            num: '03',
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
                            <div key={index}>
                                <div>{curr.num}</div>
                                <div>{curr.title}</div>
                                <div>{curr.description}</div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default SubLanding