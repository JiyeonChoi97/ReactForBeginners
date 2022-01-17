<h1>ReactJS로 영화 웹 서비스 만들기</h1>

<pre><script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script></pre>
React js : element 생성하고 event listener를 더하는 것을 도와줌

</br>

<pre><script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script></pre>
React DOM : React element들을 가져와서 HTML로 변경 

</br>

<pre><script src="https://unpkg.com/@babel/standalone/babel.min.js"></script></pre>
Babel : JSX 코드를 HTML 코드로 이해시켜서 실행시킴

<h1></h1>

JSX
- JavaScript 확장 문법
- React 요소 만들 수 있게 해줌
- HTML과 생긴게 비슷


</br>

State
- 데이터가 저장되는 곳 
- React.useState 사용시 배열 생성되는데 첫번째 요소는 초기값, 두번째 요소는 data값을 바꾸는 함수


</br>

Props
- 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법
- Object 형식으로 유일한 인자


</br>

React Memo
- (Memorize)
- 이 컴포넌트가 다시 그려지기를 원치 않음을 명시
- React.memo()
