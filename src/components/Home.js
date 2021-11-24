import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const Home = () => {
    useEffect(() => {
        getArticle();
    },)
    const [articles, setArticles] = useState([]);
    const getArticle = () => {
        axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=AN6Kt73vyIjJDxdhQjnUYp94zchrdMME")
            .then((res) => {
                setArticles(res.data.results);
                console.log(articles);
            }).catch((err) => console.error(err));
    }
    return (
        <>
            <div className="container" >
                {
                    articles.map((article) =>
                    (
                        <div className="row" key={article.id}>
                            <div className="col-2">
                                <div className="circle">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="article">
                                    <h3>{article.title}</h3>
                                    <p>{article.abstract}</p>
                                    <span><i className="fa fa-calendar" aria-hidden="true"></i> {article.published_date}</span>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="right_angle">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </>
    )
}
