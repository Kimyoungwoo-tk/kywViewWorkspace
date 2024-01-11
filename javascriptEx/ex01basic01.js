console.log('test');
//주석처리 자바랑 같음


/*
변수 선언하기
자바 로컬 변수 vs 자바스크립트 변수
반드시 초기값 필요      초기값 없으면 undefined
변수에 자료형 존재      변수에 자료형 없음/값에는 자료형이 있다


기본형 타입             let, const(final: 상수), var
int, 
boolean, 
double,
char, 
string

*/

let num; // int num;
console.log( typeof num)
num = 10;
console.log(typeof num)
num = "test";
console.log(typeof num)
num = true;
console.log(typeof num)
num = 10.1234;
console.log(typeof num)

const name = '박연미';
console.log(typeof name);
// name = '오은영'  const 자바에서 키워드 final과 동일하다

//변수 이름 : naming conventions : 네이밍 컨벤션

/**
 * 변수 이름 지을때
 * 1. 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자 모두 사용 가능
 * 2. 특수기호는 언더스코어 _ 와 달러$를 사용할 수 있다.
 * 3. 숫자로 이름을 시작할 수 없다
 *   ==>1Name  2Hello
 * 4.키워드 변수명으로 사용할 수 없다
 *    var const = 'var;
 */
// let num = 10;

age =100; // let 키워드 생략 가능
console.log(age);
