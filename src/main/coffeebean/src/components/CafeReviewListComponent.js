import React, { Component} from 'react';

import "./CafeReviewListComponent.css";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

class CafeReviewListComponent extends Component
{
    constructor ( props){
        super(props);

        this.state= {
            reviews: [],
            message:null
        }
    }

    componentDidMount(){
        this.reloadReviewList();
    }

    reloadReviewList = () =>{

        fetch("http://localhost:8082/cafe_list/1/review_list")
            .then((response) => response.json())
            .then( response => {
                this.setState({
                    reviews: response
                })
            })

            .catch(err => {
                console.log('reloadReviewList() Error!',err);
            })
    }

    reviewDetail = (code) => {
        window.localStorage.setItem("review_code",code);
        this.props.history.push('/cafe-review-detail');
    }

    reviewWrite = (code) => {
        window.localStorage.setItem("review_code",code);
        this.props.history.push('/cafe-review-write');
    }   // 0218 추가

    render(){

        return(
            <div>
                <div className="tableBox">
                    <table className="reviewList">
                        <thead>
                        <tr>
                            <th>리뷰번호</th><th>리뷰제목</th><th>작성자번호</th><th>리뷰작성날짜</th>
                        </tr>
                        </thead>
                        {this.state.reviews.map ( review =>
                            <tbody>
                            <tr>
                                <td>{review.review_code}</td><td><Button onClick={() => this.reviewDetail(this.state.review_code)} >{review.review_title}</Button></td>
                                <td>{review.user_code}</td><td>{review.review_time}</td>
                            </tr>
                            </tbody>
                        )}
                    </table>
                    <div className="reviewWrite-button">
                        <CardActions>
                            <Button type="submit" size="small" color="primary" onClick={() => this.reviewWrite(this.state.review_code)}>
                                리뷰 작성하기
                            </Button>
                        </CardActions>
                    </div>
                </div>
            </div>
        )
    }
}

export default CafeReviewListComponent;