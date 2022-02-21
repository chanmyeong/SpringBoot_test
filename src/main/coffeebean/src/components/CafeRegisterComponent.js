import React, { Component } from 'react';

import "./CafeRegisterComponent.css";
import Button from "@material-ui/core/Button";

class CafeRegisterComponent extends Component
{
    render(){
        return(
            <div>
                <main>
                    <div className="beforeContainer">
                        <div></div>
                        <div>
                            <Button size="small" color="primary">
                                카페 등록
                            </Button>
                            <Button size="small" color="primary">
                                카페 수정
                            </Button>
                            <Button size="small" color="primary">
                                커피 등록
                            </Button>
                        </div>
                    </div>
                    <container className="cafeRegister">
                        <div className="cafeName">카페이름</div>
                        <div className="Box">
                            <input type='text' id='cafe_name' placeholder='카페이름을 입력하세요.'/>
                        </div>
                        <div className="coffeeName">커피이름</div>
                        <div className="Box">
                            <input type='text' id='coffee_name' placeholder='커피이름을 입력하세요.'/>
                        </div>
                        <div className="cafeLocation">위치</div>
                        <div className="Box">
                            <input type='text' id='cafe_location' placeholder='위치를 입력하세요.'/>
                        </div>
                        <div className="coffeeUsedBean">사용원두</div>
                        <div className="Box">
                            <input type='text' id='used_bean' placeholder='사용한 원두를 입력하세요.'/>
                        </div>
                        <div className="cafePhone">전화번호</div>
                        <div className="Box">
                            <input type='text' id='cafe_phone' placeholder='카페전화를 입력하세요.'/>
                        </div>
                        <div className="coffeePrice">커피가격</div>
                        <div className="Box">
                            <input type='text' id='coffee_price' placeholder='커피가격을 입력하세요.'/>
                        </div>
                        <div className="cafeWebsite">웹사이트</div>
                        <div className="Box">
                            <input type='text' id='website' placeholder='웹사이트 주소입력'/>
                        </div>
                        <div className="coffeeProcessMethod">가공방식</div>
                        <div className="Box">
                            <input type='text' id='process_method' placeholder='가공방식을 입력하세요.'/>
                        </div>
                        <div className="cafeTime">운영시간</div>
                        <div className="Box">
                            <input type='text' id='cafe_time' placeholder='운영시간 입력'/>
                        </div>
                        <div className="coffeePicture">커피사진</div>
                        <div className="Box">
                            <input type="file" id="real-input" className="image_inputType_file" accept="img/*" required multiple />
                            <Button size="small" color="primary">사진 업로드</Button>
                        </div>
                        <div className="cafePicture">카페사진</div>
                        <div className="Box">
                            <input type="file" id="real-input" className="image_inputType_file" accept="img/*" required multiple />
                            <Button size="small" color="primary">사진 업로드</Button>
                        </div>
                        <div className="coffeeList">등록커피목록</div>
                        <div className="Box"></div>
                    </container>
                </main>
            </div>
        )
    }
}

export default CafeRegisterComponent;