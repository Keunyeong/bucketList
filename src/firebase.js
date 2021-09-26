//firebase.js
import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyAiZIf0V23_vhEP43svOJVYrhlyEp04-Ao",
  authDomain: "sparta-react-5b7ac.firebaseapp.com",
  projectId: "sparta-react-5b7ac",
  storageBucket: "sparta-react-5b7ac.appspot.com",
  messagingSenderId: "946450049196",
  appId: "1:946450049196:web:4f177d996daf53e8185709",
  measurementId: "G-7W1E43XF0S"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();


// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };