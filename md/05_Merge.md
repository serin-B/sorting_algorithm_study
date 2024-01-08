### 합병 정렬 (merge sort)

#### 📍 합병 정렬 정의해보기

> **분할-> 정렬 -> 합병** 을 반복하는 방법!
> 요소가 1개만 남을때까지, 계속하여 절반으로 배열을 분할하고, 분할된 오른쪽 배열과 왼쪽 배열을 비교하여 하나의 정렬된 배열을 만든다. 이후 정렬된 배열을 합병하여 다시 정렬하여 정렬된 배열을 만든다.

#### ✏️ 합병 정렬 구현해보기

먼저 합병 정렬을 구현하기 전, 두 배열을 비교하여 하나의 정렬된 배열을 만드는 함수 `merge` 를 작성해보았다.

```js
function merge(left, right) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  for (let i = 0; i < left.length + right.length; i++) {
    if (
      (left[leftIdx] <= right[rightIdx] && leftIdx < left.length) ||
      rightIdx === right.length
    ) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else if (rightIdx < right.length || leftIdx === left.length) {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return result;
}
```

다음으로 재귀를 사용하여 합병 정렬을 구현해보았다.

```js
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}
```

#### 🔫 합병 정렬 실행해보기

![](https://velog.velcdn.com/images/serin13/post/d2089c8c-b016-4cdc-b623-f469f752b388/image.gif)

- 합병 정렬의 시간복잡도는 O(nlogn)이다.
- (기존에 다루었던 버블 / 선택 / 삽입 정렬보다 훨씬 빠르고 효율적!)

---

참조
[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
