// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import fire from './fire.svg';

// redux hook을 불러옵니다.
import { useSelector } from "react-redux";

const Progress = (props) => {
  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);

  let count = 0;

  let goal_per = bucket_list.map((l, idx) => {
    if(l.completed){
        count++;
    }
  });

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"}/>
      <img src={fire} style={{height:'40px', background:'red',borderRadius:'20px',marginLeft:'-40px'}}/>
      
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  display:flex;
  border-radius:20px;
  align-items:center;
`;

const HighLight = styled.div`
  background: red;
  width: ${(props) => props.width};
  height: 20px;
  transition: width 1s;
  padding-right:40px;
  border-radius:20px;
`;
export default Progress;