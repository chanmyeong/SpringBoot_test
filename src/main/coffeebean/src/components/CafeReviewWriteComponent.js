import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import "./CafeReviewWriteComponent.css";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

// const browseBtn = document.querySelector('.browse-btn');
// const realInput = document.querySelector('#real-input');

// browseBtn.addEventListener('click',()=>{
//     realInput.click();
// });

// 0218 추가

class CafeReviewWriteComponent extends Component
{
    constructor (props){
        super(props);

        this.state= {
            file : '',
            previewURL : '',
            message:null
        }
    }

    componentDidMount(){
        this.reloadReviewWrite();

    }

    reloadReviewWrite = () =>{

        fetch("http://localhost:8080/cafe_list/1/review_list/review_write")
            .then((response) => response.json())
            .then( response => {
                let user = response;
                this.setState({
                    user_id: user.user_id,
                    user_code: user.user_code,
                })
            })

            .catch(err => {
                console.log('reloadReviewWrite() Error!',err);
            })
    }

    handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file : file,
                previewURL : reader.result
            })
        }
        reader.readAsDataURL(file);
    }

    render(){

        let profile_preview = null;
        if(this.state.file !== ''){
            profile_preview = <img width='300px' height='200px' object-fit='cover' className='profile_preview' src={this.state.previewURL}></img>
        }

        return(
            <div>
                <main>
                    <form action="cafe_list/review_list/review_write" method="post">
                    <div className={"before-rc"}>
                    <div className="review-container">
                        <div className="review-order">
                            <p>리뷰번호</p>
                        </div>
                        <div className="review-date">
                            <input type={'datetime-local'} id='revtime' name='review_time' />
                        </div>
                        <div className="review-title">
                            <input type='text' size='100' id='revtitle' name='review_title' placeholder='리뷰 제목'/>
                        </div>
                        {/*{this.state.user.map (*/}
                        <div className="review-userid">
                            {/*<p>{user.user_code} {user.user_id}</p>*/}
                        </div>
                        {/*)}*/}
                        <div className="review-content">
                            <textarea rows="13" cols="95" id='revcontent' name='review_text' placeholder={'리뷰를 작성해주세요.'}/>
                        </div>
                        <div className="review-picture">
                            {profile_preview}
                        </div>
                        <div className="review-buttonZip">
                            <input type="file" id="revimage" name='review_image' className="image_inputType_file" accept="img/*" required multiple
                                   onChange={this.handleFileOnChange} />
                            <button type="submit" className="browse-btn">리뷰사진 업로드</button>
                            <CardActions>
                                <Button type="submit" size="small" color="primary">
                                    리뷰 작성완료
                                </Button>
                            </CardActions>
                        </div>
                    </div>
                    </div>
                    </form>
                </main>
            </div>
        )
    }
}

export default CafeReviewWriteComponent;