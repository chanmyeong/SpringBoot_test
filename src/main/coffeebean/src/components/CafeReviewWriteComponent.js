import React, { Component } from 'react';
import "./CafeReviewWriteComponent.css";

class CafeReviewWriteComponent extends Component
{
    render(){
        return(
            <div>
                <main>
                    <div className="review-container">
                        <div className="review-order">
                            <p>리뷰번호</p>
                        </div>
                        <div className="review-date">
                            <p>리뷰작성날짜</p>
                        </div>
                        <div className="review-title">
                            <p>리뷰제목</p>
                        </div>
                        <div className="review-userid">
                            <p>작성자아이디</p>
                        </div>
                        <div className="review-content">
                            <p>리뷰내용</p>
                        </div>
                        <div className="review-picture">
                            <p>리뷰사진</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default CafeReviewWriteComponent;