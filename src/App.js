import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { connect } from 'react-redux';
import { loadBucketFB, addBucketFB, deleteBucketFB, isLoaded } from "./redux/modules/bucket";
import Progress from "./Progress";
import Spinner from "./Spinner";

const mapStateToProps = (state) => {
  return {
    bucket_list : state.bucket.list,
    is_loaded : state.bucket.is_loaded
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    load : ()=>{
      dispatch(loadBucketFB());
    },
    create : (bucket)=>{
      dispatch(addBucketFB(bucket));
    },
    delete : (bucket)=>{
      dispatch(deleteBucketFB(bucket));
    },
    loaded : ()=>{
      dispatch(isLoaded());
    }
  }
}
// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }
  addBucketlist=()=>{
    const new_item = this.text.current.value;
    if(new_item !== ''){
      this.props.create(new_item);
      this.props.loaded();
    } else {
      window.alert('작성 후 추가 해주세요!');
    }
    
  };
  componentDidMount(){
    this.props.load();
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        {!this.props.is_loaded?(<Spinner/>) : (
          <React.Fragment>
            <Container>
              <Title >내 버킷리스트</Title>
              <Progress/>
              <Line/>
              <Switch>
                <Route path="/" 
                      exact 
                      render={(props)=> 
                        <BucketList history={this.props.history} list={this.props.bucket_list} />
                      }
                />
                <Route path="/detail/:index" component={Detail}/>
                <Route component={NotFound}/>
              </Switch>
            </Container>
            <Input>
              <input type="text" ref={this.text}/>
              <button onClick={this.addBucketlist}>추가하기</button>
            </Input>
          </React.Fragment> 
        )}
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #eee;
  display:flex;
  align-items:center;
  justify-content : space-between;
  & * {
    padding : 5px;
  }
  & input {
    width : 70%;
    &:focus {
      border : 5px solid red;
    }
  }
  & button {
    width : 25%;
    color : #fff;
    background : red;
    border : 1px solide red;
    border-radius : 20px;
  }
`;
const Container = styled.div`
  max-width: 350px;
  min-height: 73vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default connect(mapStateToProps,mapDispatchToProps)( withRouter(App)) ;