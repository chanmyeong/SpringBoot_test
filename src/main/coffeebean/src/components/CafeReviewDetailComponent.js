import React, { Component } from 'react';
import "./CafeReviewWriteComponent.css";


class CafeReviewWriteComponent extends Component
{
    constructor ( props){
        super(props);

        this.state= {
            reviews: [],
            message:null
        }
    }

    componentDidMount(){
        this.reloadReviewDetail();
    }

    reloadReviewDetail = () =>{

        fetch("http://localhost:8082/cafe_list/1/review_list/6/review_detail")
            .then((response) => response.json())
            .then( response => {
                this.setState({
                    reviews: response
                })
            })

            .catch(err => {
                console.log('reloadReviewDetail() Error!',err);
            })
    }

    render(){
        return(
            <div>
                <main>
                    {this.state.reviews.map ( review =>
                    <div className="review-container">
                            <div className="review-order">
                                <p>{review.review_code}</p>
                            </div>
                            <div className="review-date">
                                <p>{review.review_time}</p>
                            </div>
                            <div className="review-title">
                                <p>{review.review_title}</p>
                            </div>
                            <div className="review-userid">
                                <p>{review.user_code}</p>
                            </div>
                            <div className="review-content">
                                <p>{review.review_text}</p>
                            </div>
                            <div className="review-picture">
                                <p>{review.review_image}</p>
                            </div>
                    </div>
                    )}
                </main>
            </div>
        )
    }
}

export default CafeReviewWriteComponent;