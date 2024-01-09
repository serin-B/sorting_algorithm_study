## 퀵 정렬 (quick sort)

### 📍 퀵 정렬 정의해보기

> 임의로 요소를 골라 해당 요소의 정확한 위치(인덱스 자리)를 찾아주며, 각 요소 하나씩 정렬해나가는 방법!
> 임의로 요소를 골라, 해당 요소보다 작은 값의 숫자를 세서 정확한 위치를 먼저 찾고, 그 요소를 기점으로 다시 왼쪽과 오른쪽 배열에서 다시 임의로 요소를 골라 해당 요소의 위치를 찾아주는 방법!

### ✏️ 퀵 정렬 구현해보기

먼저 퀵 정렬의 핵심은 임의의 요소를 골라, 해당 요소의 정확한 자리, 즉 인덱스를 구하는 것이다. 이를 수행해줄 `pivot` 함수를 먼저 작성해보자.

_(임의의 요소는 첫번째 요소든, 마지막 요소든, 중간 요소든 아무거나 랜덤하게 골라도 상관없다. 최적화를 위해서는 값들의 중간 값을 고르는 것이 좋지만, 중간 값이 어느 인덱스에 있는지 우리는 알 수 없다. 따라서 이번 피벗 함수에서는 무조건 첫번째 요소를 고르기로 한다.)_

```js
function pivot(array, startIdx = 0, endIdx = array.length - 1) {
  const pivot = array[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i <= endIdx; i++) {
    if (array[i] < pivot) {
      swapIdx++;
      swapElement(array, swapIdx, i);
    }
  }

  swapElement(array, startIdx, swapIdx);
  return swapIdx;
}
```

**이 `pivot` 함수의 핵심은 바뀐 위치의 인덱스를 반환한다는 것이다!** 바뀐 위치의 인덱스는 우리가 임의로 뽑은 요소(첫번째 요소)의 정확한 인덱스를 말한다. 그리고 우리는 차후 이 인덱스 번호를 기점으로 왼쪽과 오른쪽을 나눠 다시 정렬을 시도할 수 있다. 즉, 이 pivot을 거쳐 바뀐 요소만이 정렬이 완료되는 것이다!

퀵 정렬의 구현은 아래와 같다.

```js
function quickSort(array, leftIdx = 0, rightIdx = array.length - 1) {
  if (leftIdx < rightIdx) {
    let pivotIdx = pivot(array, leftIdx, rightIdx);
    quickSort(array, leftIdx, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, rightIdx);
  }

  return array;
}
```

마지막으로 `pivot` 함수에서 사용하였던 요소의 인덱스를 변경해주슨 함수 `swapElement` 는 아래와 같다.

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

### 🔫 퀵 정렬 실행해보기

![](https://velog.velcdn.com/images/serin13/post/c9c5241b-e485-4a5b-b5ec-f9fc1c8d238d/image.gif)

- 퀵 정렬의 시간복잡도는 O(nlogn)이다.
- 그러나 피봇(임의로 정한 값)이 최솟값 또는 최댓값이라면 시간복잡도는 O(n^2)이 된다.
- 예를 들어, 거의 정렬된 배열 `[1, 2, 3, 4, 5, 6, 8, 7]` 이 있다고 가정해보자. 만약, 피봇을 맨 첫번째 값으로 설정한다면, 거의 계속하여 최솟값을 고르게 되므로 시간 복잡도는 O(n^2)가 되고, 효율성은 최악이 된다.
- 따라서 이를 방지하기 위해서는 중간값이나 랜덤한 값을 고르는 것이 좋다. 비록, 중간값이나 랜덤한 값이 최솟값, 최댓값일 확률이 있지만, 연속해서 고를 확률은 현저히 낮기 때문이다.

---

참조

- Udemy 강의`JavaScript 알고리즘 & 자료구조 마스터클래스` / Colt Steele / 2023.08.
- [Visualgo](https://visualgo.net/en)
