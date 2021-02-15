import React from 'react';
import "./Card.css"

const Card = ({details, pagination}) => {
    return (
        <div className="flex-cards">
            {
                    details && details !== undefined ?
                    <>
                    {/* <p dangerouslySetInnerHTML={{ __html: detail[0].data.selftext_html }} /> */}
                    {
                        details.slice(pagination.start, pagination.end).map((metadata, index) => {
                            return (
                                <div key={index}>
                                    <div className="card" style={{width: "18rem"}}>
                                        <div className="card-body">
                                            <h3 className="card-title">{metadata.data.title}</h3>
                                            <hr/>
                                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                            <a href={metadata.data.url} className="card-link">Link</a>
                                            <p>Score : {metadata.data.score}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </>
                    :
                    <h2>Loading...</h2>
                }
        </div>
    )
}

export default Card
