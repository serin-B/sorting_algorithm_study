### 삽입 정렬 (insertion sort)

#### 📍 삽입 정렬 정의해보기

> 0부터 배열의 길이만큼 정렬된 부분을 조금씩 넓혀가는 정렬 방법!
> 정렬 되어 있는 부분에 다음 요소를 올바른 위치에 삽입하는 정렬 방법!
>
> _ ( 예를 들어, 맨 처음에는 정렬된 부분이 0이면, 1번째 요소는 자동적으로 첫 번째 요소가 된다. 이로써 정렬된 부분은 [첫번째 요소] 가 된다. 다음으로 두 번째 요소를 정렬된 부분 안에 넣기 위해서는 내부에서 비교를 통해 올바른 위치를 찾아줘야 한다. 만약 두 번째 요소가 첫번째 요소보다 작다면 [두번째 요소, 첫번째 요소] 가 정렬된 부분이 된다._

#### ✏️ 삽입 정렬 구현해보기

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curValue = array[i];
    for (let j = i - 1; j >= 0 && arr[j] > curValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curValue;
  }
}
```

#### 🔫 삽입 정렬 실행해보기

![](https://velog.velcdn.com/images/serin13/post/ff68a895-ec4c-4eb7-bb9c-bd33c81bc802/image.gif)

- 삽입 정렬의 시간복잡도는 O(n^2)이다.
- **삽입 정렬이 유리한 경우**
  - 배열이 거의 정렬되어 있을 경우
  - 실시간으로 들어오는 정보를 정렬된 배열에 추가해야 하는 경우 또는 계속해서 데이터를 정렬해야 할 경우

---

참조
[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
