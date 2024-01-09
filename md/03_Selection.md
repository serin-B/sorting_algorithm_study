### 선택 정렬 (seletion sort)

#### 📍 선택 정렬 정의해보기

> 가장 작은 '최솟값'을 고르고, 그 최솟값을 계속 앞쪽으로 변경하는 방법!
> 배열을 순회하며 매번 가장 작은 값을 고르고, 그 값을 순회한 횟수-1 인덱스로 변경하는 방법!

#### ✏️ 선택 정렬 구현해보기

```js
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swapElement(array, i, lowest);
  }
  return array;
}
```

요소를 변경하는 `swapElement` 는 아래와 같다.

```js
export const swapElement = (array, idx1, idx2) => {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

const swapElement2 = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};
```

#### 🔫 선택 정렬 실행해보기

![](https://velog.velcdn.com/images/serin13/post/f7eaa931-5040-45bc-bedf-0a9bdc8a182c/image.gif)

- 선택 정렬의 시간복잡도는 O(n^2)이다.

---

참조

- Udemy 강의`JavaScript 알고리즘 & 자료구조 마스터클래스` / Colt Steele / 2023.08.
- [Visualgo](https://visualgo.net/en)
