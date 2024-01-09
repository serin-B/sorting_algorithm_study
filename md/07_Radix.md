## 기수 정렬 (radix sort)

- 기수 정렬은 비교 정렬이 아닌 **정수 정렬**이다!
- **직접 데이터를 비교하지 않는다.** 즉, 이 숫자가 다음 숫자보다 큰지 작은지 비교하지 않는다!
- 그 대신 숫자 크기에 대한 정보를 **자릿수**로 인코딩 한다는 점을 활용한다. 이는 네자리 숫자가 두자리 숫자보다 크다는 것을 이용한다는 것이다. 우리는 두 수를 비교하지 않아도 자릿수가 많은 수가 더 크다는 것을 알 수 있다.
- ** 데이터가 정수로만 이루어진 경우에만 사용할 수 있는** 특수한 정렬 기법이다! (2진수 10진수 등 데이터를 정수화하여야만 사용할 수 있다!)
- 데이터 내에서 **가장 큰 자릿수만큼 연산을 반복**한다.

### 📍 기수 정렬 정의해보기

> 숫자를 서로 비교하는 것이 아니라, 각 자릿수의 숫자를 확인하여 정렬하는 방법!
> 0부터 9까지의 바구니가 있고, 각 숫자를 맨 끝자리(1의자리) 부터 해당하는 바구니에 넣어서 정렬하는 방법!
> _(예시 데이터가 10진수라서 0부터 9까지 10개의 바구니가 있는 것, 8진수면 0부터 7까지 8개의 바구니, 2진수면 0, 1 두개의 바구니가 있다고 볼 수 있다.)_

### ✏️ 기수 정렬 구현해보기

먼저 기수 정렬의 핵심은 각 숫자의 자릿수가 어떤 수인지 파악하는 것이다. 따라서 해당 위치의 수를 알수 있게 해주는 `getDigit` 함수를 먼저 작성해보자.

```js
function getDigit(number, index) {
  return Math.floor(Math.abs(number) / Math.pow(10, index)) % 10;
}
```

이때 `index`는 문자열처럼 앞에서부터 따지는 것이 아니라 맨 뒷쪽, 맨 오른쪽 1의 자리부터 0으로 센다. 따라서 ` getDigit(123456, 2)` 의 값은 `4`가 된다.

다음으로, 총 몇 번의 연산을 해야하는지 계산하기 위해서는 데이터들 중 가장 큰 자릿수가 몇인지 알아야 한다. 따라서 숫자의 자릿수를 반환해주는 함수 `digitCount` 와 최대 자릿수를 반환해주는 `maxDigits` 를 작성하면 아래와 같다.

```js
function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function maxDigits(array) {
  return Math.max(...array.map((num) => digitCount(num)));
}
```

기수 정렬의 구현은 아래와 같다.

```js
function radixSort(array) {
  const max = maxDigits(array);

  for (let k = 0; k < max; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      digitBuckets[getDigit(array[i], k)].push(array[i]);
    }
    array = [].concat(...digitBuckets);
  }

  return array;
}
```

### 🔫 기수 정렬 실행해보기

![](https://velog.velcdn.com/images/serin13/post/14894c2b-5e30-4425-a926-1ad49f34995c/image.gif)

- 기수 정렬의 시간복잡도는 O(nk)이다. (이때 n은 정렬할 데이터의 길이이고, k는 최대 자릿수이다.)
- (공식으적으로 인정되는 표기법은 아니지만, 자리수 k 가 길어질수록 시간복잡도에 영향을 미치기때문에 이와같이 표기하였다. 숫자가 아주아주 길다면 이 점도 고려해야 한다는 것이다.)

---

참조

- Udemy 강의`JavaScript 알고리즘 & 자료구조 마스터클래스` / Colt Steele / 2023.08.
- [Visualgo](https://visualgo.net/en)
- [Math.log10 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/log10)
