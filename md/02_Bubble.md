## 버블 정렬 (bubble sort)

### 📍 버블 정렬 정의해보기

> 두 개의 요소만 먼저 비교해서, 더 큰 값을 뒤로 보내는 방법!
> 가장 큰 값을 뒤로 계속 밀어내는 방법!
> 가장 큰 값이 배열 맨 뒤에부터 계속 쌓이는 방법!

\+ 거품이 물 위로 떠오르듯, 큰 수가 위로 떠오른다고 하여 이름이 버블정렬이라고 한다!

### ✏️ 버블 정렬 구현해보기

먼저 정렬의 핵심은 요소의 위치, 즉 인덱스를 변경하는 것이다! 요소의 인덱스 위치를 변경할 수 있는 방법은 아래 2가지 방법이 있다.

```js
const swapElement = (array, idx1, idx2) => {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

const swapElement2 = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};
```

버블 정렬의 기본 구현은 아래와 같다.

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swapElement(array, j, j + 1);
      }
    }
  }
  return array;
}
```

그러나 이는 일찍 정렬을 마쳤어도, 끝까지 연산을 수행한다. 따라서 `nonSwap` 변수를 통해 최적화를 해주면 아래와 같다.

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let nonSwap = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swapElement(array, j, j + 1);
        nonSwap = false;
      }
    }
    if (nonSwap) return array;
  }
  return array;
}
```

### 🔫 버블 정렬 실행해보기

![](https://velog.velcdn.com/images/serin13/post/3483979c-0bd1-43d8-8181-c68d9720e8cf/image.gif)

- 버블 정렬의 시간복잡도는 O(n^2)이다.
- **버블 정렬이 유리한 경우**
  - 정렬이 거의 잘 되어있을 경우

---

참조
[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
