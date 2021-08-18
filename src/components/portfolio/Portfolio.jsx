import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
import {
featuredPortfolio,
webPortfolio,
} from "../../data"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setDdata] = useState([])
    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        
      ];

      useEffect(()=>{

        switch(selected){
            case "web":
                setDdata(webPortfolio);
                break;    
            case "featured":
                setDdata(featuredPortfolio);
                break;
            default:
                setDdata(featuredPortfolio);
        }   

      }, [selected])

    return (
        <div className="portfolio" id="portfolio"> 
            <h1>Portfolio</h1>
            <ul>
               {list.map(item=>(
                   <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
               ))}
            </ul>
            <div className="container">
                {data.map(d=>(

                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>Tour Places</h3>
                </div>
                ))}
            </div>
        </div>
    )
}