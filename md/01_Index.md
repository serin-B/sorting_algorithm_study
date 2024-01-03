[정렬!정렬!정렬!] 01. 정렬을 왜 배워야 할까?

알고리즘을 공부하다보면, 자연스럽게 만나게 되는 **정렬**

![](https://velog.velcdn.com/images/serin13/post/e3f125fd-e0a2-4567-8b06-81dfe8f08a31/image.jpg)
_( + `정렬` 하니까 `열정`이 생각나고, `열정` 하니까 `열정!열정!열정!`짤이 생각나서 표지를 이렇게 그려보았다._ 😎 _)_

버블 정렬, 선택 정렬, 삽입 정렬, 합병 정렬, 퀵 정렬, 기수 정렬 등등 다양한 종류의 정렬 알고리즘에 대해 공부한 내용을 내재화하기 위해 **`정렬!정렬!정렬!`** 시리즈를 기획하게 되었다. 🔥 열정 넘치는 마음가짐으로, 나만의 언어로 정렬을 정리해보고자 한다!!

첫 시작으로, 오늘은 **_정렬이 뭔지, 정렬 알고리즘을 왜 배워야 하는지_** 에 대해 간략하게 정리해보고자 한다.

## 정렬이란?

> 👉 **특정 기준**에 따라 요소들을 순서대로 **나열**하는 것!

예를 들어 아래와 같이 무작위로 있는 배열을

```js
[6, 4, 7, 9, 2, 3, 5, 1, 8];
```

오름차순으로 정렬하거나 _(기준=> 낮은 순서대로!)_

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9];
```

내림차순으로 정렬할 수 있다 _(기준 => 높은 순서대로!)_

```js
[9, 8, 7, 6, 5, 4, 3, 2, 1];
```

`정렬` 이라는 단어가 수학에서 쓸 것 같고, 몹시 낯설게 느껴질 수도 있다. 하지만 사실 `정렬`은 일상 생활에서도 쉽게 볼 수 있다. 예를 들어, 쇼핑을 위해 검색할 때 '인기순', '최신순', '판매량순', '낮은 가격순', '높은 가격순'으로 목록을 볼 수 있다.

![네이버 쇼핑](https://velog.velcdn.com/images/serin13/post/ad319f68-e84d-49a4-8409-1a32a0a97e81/image.png)

이것이 바로 특정 기준으로 데이터들을 정렬하여 보여주는 것이다! 덕분에 우리는 같은 데이터들을 우리가 원하는 순서대로 볼 수 있다.

## 정렬을 왜 배워야 할까?

그렇다면 우리는 왜 정렬을 배우고 공부해야할까?

### 첫째, 데이터를 다룰 때, 정렬은 중요하다.

**알고리즘은 문제를 해결하는 과정**이다.
문제를 해결하기 위해 우리는 **입력값을 받고, 특정 로직에 따라 결과값을 도출**해낸다.

이때, 입력값과 결과값, 그리고 로직 내부에서 사용되는 대부분의 것은 결국 **데이터**이다. 그리고 이 **데이터들을 사용하거나 저장할 때, 특정 기준을 세우고 기준에 따라 사용 혹은 저장**하게 된다. _(무작위로 해도 되는 경우도 있을 수 있지만, 그렇지 않은 경우가 훨씬 많다.) _

**즉, 데이터를 다루기 위해서 정렬은 필수적이다.**

### 둘째, 효율적으로 정렬하는 것은 중요하다.

알고리즘을 고안할 때 중요하게 생각해야 하는 것 중 하나는 **효율성**이다. 정렬 알고리즘에서도 마찬가지이다.

```js
[6, 4, 7, 9, 2, 3, 5, 1, 8];
```

이 숫자를 오름차순으로 정리하는 방법은 무궁무진하다. _(우리는 인간이기 때문에 나와있는 숫자들이 1~9라는 것을 알고 한 번에 정렬할 수 있지만, 컴퓨터는 그렇지 못하다.)_

배열의 길이만큼 반복하면서 정렬되지 않은 숫자 중 가장 작은 숫자를 맨 왼쪽으로 가져오는 방식으로 정렬을 할 수도 있고, 두 요소를 비교하면서 숫자가 작으면 왼쪽으로 보내는 것을 반복하는 방식으로 정렬을 할 수도 있다.

이러한 방법은 쉽지만 시간 복잡도가 O(n^2)이다. 데이터가 커질수록 데이터를 정렬하기 위한 시간이 제곱으로 많이 걸리게 된다는 것이다!

다행스럽게도 똑똑하신 선배 개발자분들이 고안하신 더 빠른 정렬 알고리즘이 존재한다. 앞으로 살펴볼 정렬의 종류 중에서 시간 복잡도가 O(n log n)인 알고리즘들도 있다.

또한 데이터가 얼마나 정렬되어 있는지 등 상황에 따라 효율적인 알고리즘이 다르다. 따라서 상황에 맞는 효율적인 알고리즘을 선택하는 것은 몹시 중요하다. 그리고 당연하게도 **효율적인 방법을 알아야 선택할 수 있다.**

### 셋째, 문제를 해결하는 사고력을 기르는 것은 중요하다.

이것은 우리가 알고리즘을 공부하는 이유이기도 하다!

결국, 우리가 알고리즘을 공부하는 이유는 **'문제를 더 잘 해결하기 위해서'** 다. 정렬 알고리즘도 같은 맥락이다.

하나의 문제를 다양한 방법으로 해결해보는 것, 그 안에서 가장 효율적이고 효과적인 방법을 찾는 연습을 하는 것은 문제해결력과 사고력을 높이는 데 큰 도움이 된다!

> 우리가 정렬을 공부해야 하는 이유를 극단적이게 요약하면,
>
> **데이터를 다룰 때 필수적인 정렬을 효율적으로 해내는 방법을 배워 문제를 해결하는 사고력을 높이기 위함이다.**

이 정도면 정렬을 공부해야겠다는 동기부여가 충분히 되었으리라 믿는다!
이어지는 글에서는 정렬 알고리즘 종류 중 일부를 하나씩 다뤄볼 예정이다.