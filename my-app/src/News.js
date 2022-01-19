import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'

export class News extends Component {
    articles = [
       {"source":{"id":null,"name":"CBS Sports"},"author":"Tyler Sullivan","title":"Rams vs. Cardinals score: Live updates, game stats, highlights, TV, live stream for NFC wild card showdown - CBSSports.com","description":"The Rams and Cardinals meet for a third time this season with a trip to Tampa on the line","url":"https://www.cbssports.com/nfl/news/rams-vs-cardinals-score-live-updates-game-stats-highlights-tv-live-stream-for-nfc-wild-card-showdown/live/","urlToImage":"https://sportshub.cbsistatic.com/i/r/2020/07/21/ccd468f9-3f4b-4c7b-b4a2-abb86f6c8b78/thumbnail/1200x675/ade6c711820f0074cf815c1e4897c26f/mcay.jpg","publishedAt":"2022-01-18T02:37:00Z","content":"We've seen a number of blowouts over the course of Super Wild Card Weekend and it appears like we're in the midst of another. As the Rams and Cardinals hit the locker room at halftime, it has been a … [+1117 chars]"},
       {"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Damage in tsunami-hit Tonga hampering relief efforts - Reuters","description":"Significant damage was reported along the western coast of Tonga's main island and outer islands on Tuesday following a massive <a href=\"https://www.reuters.com/business/environment/impact-assessment-aid-efforts-underway-world-responds-tonga-tsunami-2022-01-1…","url":"https://www.reuters.com/world/significant-damage-reported-tongas-main-island-after-volcanic-eruption-2022-01-17/","urlToImage":"https://www.reuters.com/resizer/fgQTBhihG_z27p8GaQBfjJgn-No=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GUJPPCBDEFJBJPKN2HUSQAGUJQ.jpg","publishedAt":"2022-01-18T02:00:00Z","content":"SYDNEY/WELLINGTON, Jan 18 (Reuters) - Significant damage was reported along the western coast of Tonga's main island and outer islands on Tuesday following a massive volcanic eruption and tsunami, bu… [+4288 chars]"},
       {"source":{"id":null,"name":"NBC Chicago"},"author":"NBC Chicago","title":"Omicron, Flu, Allergies: How Can You Tell the Difference in Symptoms? - NBC Chicago","description":"If you're wondering whether that runny nose, sore throat or sneeze is simply allergies, just a cold, or possibly early signs of COVID-19 or the flu, you're not…","url":"https://www.nbcchicago.com/news/coronavirus/omicron-flu-allergies-how-can-you-tell-the-difference-in-symptoms/2730115/","urlToImage":"https://media.nbcchicago.com/2022/01/GettyImages-1084312966.jpg?quality=85&strip=all&resize=1200%2C675","publishedAt":"2022-01-18T01:47:04Z","content":"If you're wondering whether that runny nose, sore throat or sneeze is simply allergies, just a cold, or possibly early signs of COVID-19 or the flu, you're not alone. \r\nWith many experiencing cold-li… [+5867 chars]"},
       {"source":{"id":"financial-times","name":"Financial Times"},"author":null,"title":"Live news: Combined flu and Covid vaccine available in 2023, says Moderna chief - Financial Times","description":"","url":"https://www.ft.com/content/7d0364cf-dde6-4c7c-a14a-461f73894b19","urlToImage":"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fcc8a176f-88a7-447a-b351-6b1a2cb93f25.jpg?source=next-opengraph&fit=scale-down&width=900","publishedAt":"2022-01-18T00:45:13Z","content":"A ramp agent enters a cargo plane operated by UPS Airlines, one of the letter’s signatories © Jon Cherry/Getty Images\r\nThe imminent rollout of high-speed 5G telecoms services could ground flights acr… [+1536 chars]"},
       {"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"Ann E. Marimow","title":"Texas's six-week abortion ban remains in effect after federal appeals court ruling - The Washington Post","description":"The U.S. Court of Appeals for the 5th Circuit rejected a request from abortion providers to send the case back to a trial court judge who previously blocked the law.","url":"https://www.washingtonpost.com/politics/courts_law/texas-abortion-law/2022/01/17/d18b848a-7256-11ec-b202-b9b92330d4fa_story.html","urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB3QPGCTBMI6ZA6S3HNLBYR3PY.jpg&w=1440","publishedAt":"2022-01-18T00:30:59Z","content":"The courts majority said its decision was consistent with the Supreme Courts ruling last month and necessary to avoid creating needless friction with the state court over interpretation of the Texas … [+5006 chars]"},
       {"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Activision Blizzard fires more people in sexual harassment probe - Reuters","description":"Activision Blizzard Inc <a href=\"https://www.reuters.com/companies/ATVI.O\" target=\"_blank\">(ATVI.O)</a> said on Monday it has fired or pushed out more than three dozen employees and disciplined another 40 since July to address allegations of sexual harassment…","url":"https://www.reuters.com/business/activision-blizzard-fires-more-people-sexual-harassment-probe-report-says-2022-01-17/","urlToImage":"https://www.reuters.com/resizer/U0ag0LUzo7ZBf2wtWjQz6LAHOao=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/A57OSOXINRIETIJCV5OYBO65LM.jpg","publishedAt":"2022-01-18T00:30:00Z","content":"NEW YORK, Jan 17 (Reuters) - Activision Blizzard Inc (ATVI.O) said on Monday it has fired or pushed out more than three dozen employees and disciplined another 40 since July to address allegations of… [+2129 chars]"},
       {"source":{"id":"cnn","name":"CNN"},"author":"Dan Merica and Eva McKend, CNN","title":"Virginia's new GOP governor meets resistance from some school districts planning to keep mask requirements - CNN","description":"Newly inaugurated Virginia Gov. Glenn Youngkin has been in office for mere days, but the Republican is already rolling back the priorities of his Democratic predecessors and running into opposition from counties he lost months earlier, specifically on the hot…","url":"https://www.cnn.com/2022/01/17/politics/glenn-youngkin-virginia-school-mask-requirements-republicans/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/220117171805-02-glenn-youngkin-0117-super-tease.jpg","publishedAt":"2022-01-18T00:17:00Z","content":"(CNN)Newly inaugurated Virginia Gov. Glenn Youngkin has been in office for mere days, but the Republican is already rolling back the priorities of his Democratic predecessors and running into opposit… [+6801 chars]"},
       {"source":{"id":"cbs-news","name":"CBS News"},"author":null,"title":"Djokovic could be barred from French Open for refusing COVID vaccine, too - CBS News","description":"French officials say a new law requiring COVID vaccination for anyone entering sports venues will apply to athletes, without exceptions.","url":"https://www.cbsnews.com/news/novak-djokovic-news-french-open-france-covid-vaccine-mandate/","urlToImage":"https://cbsnews3.cbsistatic.com/hub/i/r/2022/01/17/c82e8d95-679f-45bd-a7b6-f4bef9591662/thumbnail/1200x630g2/1f913de960859d1f0627062dfc25f97e/djokovic-ap22017421364313.jpg","publishedAt":"2022-01-17T23:57:00Z","content":"Novak Djokovic could be barred from the French Open later this year because he's not vaccinated against COVID-19, a possibility that raised the stakes for the tennis star just hours after he was depo… [+2176 chars]"},
       {"source":{"id":null,"name":"Vulture"},"author":"Jennifer Zhan","title":"Rachel Zegler Apologizes for Monologuing Britney Spears’ Tweet - Vulture","description":"“This is not a situation to be taken lightly, and we should all be lifting Britney up in this pivotal time.”","url":"http://www.vulture.com/2022/01/rachel-zegler-apologizes-britney-spears-tweet-monologue.html","urlToImage":"https://pyxis.nymag.com/v1/imgs/847/78a/f0cb1f3418204a89c7eb8a69d0598f0fe7-rachelzegler.1x.rsocial.w1200.jpg","publishedAt":"2022-01-17T23:55:52Z","content":"Rachel Zegler has apologized for using Britney Spearsfeud with her sister, Jamie Lynn Spears, as material for a monologue. Anyone who knows me knows how much I love Britney and am rooting for her alw… [+1574 chars]"},
       {"source":{"id":null,"name":"Page Six"},"author":"Evan Real","title":"Betty White's assistant shares 'one of the last' pics of her on 100th birthday - Page Six","description":"“It was taken on 12/20/21,” the late Hollywood icon’s assistant wrote of the photo on Facebook. “She was radiant and beautiful and as happy as ever.”","url":"https://pagesix.com/2022/01/17/betty-whites-assistant-shares-one-of-last-pics-of-late-icon/","urlToImage":"https://pagesix.com/wp-content/uploads/sites/3/2022/01/betty-white-last-portrait-02.jpg?quality=90&strip=all&w=1200","publishedAt":"2022-01-17T23:42:00Z","content":"Betty Whites assistant celebrated what would have been Whites 100th birthday by sharing one of the final photos taken of the late icon.\r\nHello Everyone! Its Kiersten. Bettys assistant, she wrote on M… [+1390 chars]"},
       {"source":{"id":null,"name":"KTLA Los Angeles"},"author":"Tracy Bloom","title":"‘Near-Earth’ asteroid twice as big as Empire State Building to pass by Tuesday; how to track, view it - KTLA Los Angeles","description":"An asteroid classified by NASA as a “Near-Earth object” will make its closest approach to our planet for the next 200 years on Tuesday. The asteroid, known as 7482 (1994 PC1), is set to fly by the planet at 1:51 p.m. PT, traveling at a speed of about 43,754 m…","url":"https://ktla.com/news/nationworld/near-earth-asteroid-twice-as-big-as-empire-state-building-to-pass-by-tuesday-how-to-track-view-it/","urlToImage":"https://ktla.com/wp-content/uploads/sites/4/2021/08/AP21223731730772.jpg?w=1280","publishedAt":"2022-01-17T23:33:41Z","content":"An asteroid classified by NASA as a “Near-Earth object” will make its closest approach to our planet for the next 200 years on Tuesday. \r\nThe asteroid, known as 7482 (1994 PC1), is set to fly by the … [+1363 chars]"},
       {"source":{"id":null,"name":"ESPN"},"author":"Paul Gutierrez","title":"GM Mike Mayock fired by Las Vegas Raiders after three seasons - ESPN","description":"The Raiders have fired general manager Mike Mayock after three tumultuous seasons.","url":"https://www.espn.com/nfl/story/_/id/33087691/gm-mike-mayock-fired-las-vegas-raiders-three-seasons","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0105%2Fr958224_1296x729_16%2D9.jpg","publishedAt":"2022-01-17T23:22:54Z","content":"HENDERSON, Nev. -- Mike Mayock has been fired as general manager of the Las Vegas Raiders after three tumultuous seasons that produced a combined record of 25-24, the team's first playoff appearance … [+4161 chars]"},
       {"source":{"id":"abc-news","name":"ABC News"},"author":"The Associated Press","title":"Mexico news photographer killed; reporter slain last week - ABC News","description":"","url":"https://abcnews.go.com/International/wireStory/mexican-journalist-criticized-authorities-dies-82314263","urlToImage":"https://s.abcnews.com/images/US/220117_vod_onlocation_hpMain_16x9_992.jpg","publishedAt":"2022-01-17T23:03:45Z","content":"MEXICO CITY -- A news photographer was killed in the Mexican border city of Tijuana on Monday, the same day press groups said a reporter had been killed in the Gulf coast state of Veracruz last week.… [+1904 chars]"},
       {"source":{"id":null,"name":"New York Daily News"},"author":"Brian Niemietz","title":"Nurse dies in hospital where she worked after random attack - New York Daily News","description":"Sandra Shells had served for 38 years in the hospital where she died","url":"https://www.nydailynews.com/news/crime/ny-nurse-los-angeles-bus-stop-attack-20220117-3sq4mgfgzvfmdhvyyufvtjq3fi-story.html","urlToImage":"https://www.nydailynews.com/resizer/BUngzem1sppqnmWfOG0pyBLU6QY=/1200x0/center/middle/cloudfront-us-east-1.images.arcpublishing.com/tronc/EJKLA3T4WVBULJML3NYP3RVP7Y.jpg","publishedAt":"2022-01-17T23:01:00Z","content":"A 70-year-old nurse who was attacked while waiting for a bus in downtown Los Angeles last week has reportedly died in the hospital where shed worked for nearly four decades.\r\nSandra Shells, whod spen… [+1769 chars]"},
       {"source":{"id":"the-verge","name":"The Verge"},"author":"Jay Peters","title":"Google changed the Assistant’s white noise sound, and many aren’t happy about it - The Verge","description":"Google changed the white noise ambient sound that’s available from the Google Assistant, and many people have expressed frustration with the update.","url":"https://www.theverge.com/2022/1/17/22888423/google-assistant-white-noise-sound-changed","urlToImage":"https://cdn.vox-cdn.com/thumbor/iSuTKLMNSTlQTpg1rtv0KQNk8h0=/0x358:4990x2971/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21935899/dseifert-nest-audio-4225-9.0.jpeg","publishedAt":"2022-01-17T22:57:57Z","content":"Somebody has already reuploaded the original\r\nSome Nest customers are unhappy with Googles changes.\r\nPhoto: Dan Seifert / The Verge\r\nGoogle offers many ambient sounds from the Google Assistant, inclu… [+1148 chars]"},
       {"source":{"id":"cnn","name":"CNN"},"author":"Eric Levenson, CNN","title":"What it was like inside the Colleyville, Texas, synagogue during the 11-hour hostage standoff - CNN","description":"It started like most any Saturday for members of Congregation Beth Israel.","url":"https://www.cnn.com/2022/01/17/us/inside-texas-synagogue-hostage-standoff/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/220116222953-02-hostage-congregation-beth-israel-colleyville-texas-super-tease.jpg","publishedAt":"2022-01-17T22:23:00Z","content":"(CNN)It started like most any Saturday for members of Congregation Beth Israel.\r\nFamilies of the Reform Jewish synagogue just outside Dallas-Fort Worth had gathered -- in person and online -- to part… [+11393 chars]"},
       {"source":{"id":"cnn","name":"CNN"},"author":"Ashley Strickland, CNN","title":"Ancient life may be just one possible explanation for Mars rover's latest discovery - CNN","description":"Sediment collected by the Curiosity rover on Mars revealed the presence of carbon, accordingt to a new analysis. The possible existence of ancient life on the red planet is just one of three potential explanations for why it may be there.","url":"https://www.cnn.com/2022/01/17/world/mars-curiosity-rover-carbon-scn/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/220117145008-03-curiosity-rover-mars-carbon-super-tease.jpg","publishedAt":"2022-01-17T22:09:00Z","content":null},
       {"source":{"id":null,"name":"Newsday"},"author":null,"title":"Report: Kids hospitalized at greater rate during first month of omicron surge - Newsday","description":"","url":"https://projects.newsday.com/gdpr/","urlToImage":null,"publishedAt":"2022-01-17T22:09:00Z","content":"It appears that you are trying to access our website from a location in the European Union, which enforces the General Data Protection Regulation (GDPR). Unfortunately,\r\n because of this regulation w… [+70 chars]"},
       {"source":{"id":"politico","name":"Politico"},"author":"Meridith McGraw","title":"Trump superfans dream of a run again, and of JFK Jr. on the ticket - POLITICO","description":"The former president did his first rally of 2022 and left no doubt about the base he wants to build","url":"https://www.politico.com/news/2022/01/17/trump-rally-arizona-2024-527253","urlToImage":"https://static.politico.com/a4/ce/7de850c6431dbce7706a7ab3136e/trump.Rally.PetersonSecondary11.jpeg","publishedAt":"2022-01-17T21:56:12Z","content":"If Kallatsa was worried about sounding too conspiratorial, he shouldnt have been. He was not alone among the crowd in believing that JFK Jr. is not only still alive but is also a secret Trump support… [+6120 chars]"},
       {"source":{"id":"the-wall-street-journal","name":"The Wall Street Journal"},"author":"Margot Patrick, Emily Glazer","title":"Credit Suisse’s António Horta-Osório Lost Board Support Over Covid-19 Rules Breach - The Wall Street Journal","description":"The chairman’s jet use also raised concerns, with some board members fearing he lacked credibility to fix what had come to be seen as the bank’s broken culture","url":"https://www.wsj.com/articles/credit-suisses-antonio-horta-osorio-lost-board-support-over-covid-19-rules-breach-11642451146","urlToImage":"https://images.wsj.net/im-468967/social","publishedAt":"2022-01-17T21:54:00Z","content":"He came to fix\r\nCredit Suisse Group AGs\r\nbroken culture. Then he became part of the problem. \r\nAntónio Horta-Osório\r\nwas hoping for a slap on the wrist Sunday from the\r\nCredit Suisse\r\n CS 0.38%\r\nboar… [+6776 chars]"}
    ]
    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }
    constructor(){
        super();
        this.state={ articles : this.articles, 
            page : 1
        }
    }
    previousClick= async ()=>{
        console.log("previous clicked")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9fb11ea2d0804f019a3632b78bd71eae&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
    })
}
    nextClick = async ()=>{
        console.log("next clicked")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9fb11ea2d0804f019a3632b78bd71eae&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);  
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
    }
    
}
    async componentDidMount(){
        let urll = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9fb11ea2d0804f019a3632b78bd71eae&page=1pageSize=${this.props.pageSize}`
        let data = await fetch(urll);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }
    render() {
        return (
            <div>
                <div className='container my-4'>
        <h2>Top news headlines</h2>
        
                    <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-4">
                        <Newsitems key={element.url} title = {element.title?element.title:""} description={element.description?element.description:"No description found!"} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
        })}
                        
                    </div>
      </div>
      <div className="container d-flex justify-content-between"><button type="button" onClick={this.previousClick} class="btn btn-dark">&larr;  Previous</button><button type="button" class="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button></div>
            </div>
        )
    }
}

export default News