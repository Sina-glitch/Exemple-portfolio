import linkPicture from '../../../assets/images/link.png'
import dataPortfolio from '../../../assets/portfolioDB.json'

const Portfolio = () => {
    const data = dataPortfolio.portfolio
    return (
        <div className="Portfolio container">
            <h2>Portfolio</h2>
            <ul className="portfolio-container">
                {data.map((item) => (
                    <li className="portfolio-item">
                        <h3>{item.title}</h3>
                        <ul className="portfolio-techno-list">
                            {item.technologiesDevIconsClass.map((techno) => (
                                <li className="portfolio-techno-item">
                                    <i className={techno}></i>
                                </li>
                            ))}
                        </ul>
                        <ul className="portfolio-link-list">
                            <li>
                                <a rel="noreferrer" href={item.github} target="_blank" > <i class="devicon-github-original"></i><i class="fa fa-external-link" aria-hidden="true"></i></a>
                            </li>
                            {item.link !== 0 ? <li>
                                <a rel="noreferrer" href={item.link} target="_blank"><img src={linkPicture} alt="link" /><i class="fa fa-external-link" aria-hidden="true"></i></a>
                            </li> : null}
                        </ul>
                        <p>{item.year}</p>
                    </li>
                ))
                }
            </ul >
        </div >
    )
}

export default Portfolio