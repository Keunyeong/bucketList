import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteBucketFB, updateBucketFB } from './redux/modules/bucket';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Detail = (props)=>{
  const dispatch = useDispatch();
  const bucket_list = useSelector((state)=>state.bucket.list);
  const bucket_index = parseInt(props.match.params.index);
  return (
  <div>
    <h1>{bucket_list[bucket_index].text}</h1>
    <ButtonGroup variant="text" aria-label="text button group" style={{position:'fixed', bottom:'25%'}}>
      <Button 
        color="secondary"
        onClick={()=>{
        dispatch(deleteBucketFB(bucket_index));
        props.history.goBack();
      }}>삭제하기</Button>
      <Button onClick={()=>{
        dispatch(updateBucketFB(bucket_index));
        props.history.goBack();
      }}>완료하기</Button>
    </ButtonGroup>
  </div>
  );
}

export default  Detail;