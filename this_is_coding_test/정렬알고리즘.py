def select_sort(array):
  for i in range(len(array)):
    min_idx = i
    for j in range(i+1, len(array)):
      if array[j] < array[min_idx]:
        min_idx = j
    array[i], array[min_idx] = array[min_idx], array[i]
  return array


def insert_sort(array):
  for i in range(1, len(array)):
    # 첫 번째 값과 바로 뒤의 값을 비교 후 작을 경우 계속해서 앞으로 이동
    for j in range(i, 0, -1):
      if array[j] < array[i]:
        array[i], array[j] = array[j], array[i]
      else:
        break
  return array

def quick_sort(array, start, end):
  # 종료 조건 원소가 1개인 경우 종료
  if start >= end:
    return

  pivot = start
  left = start + 1
  right = end

  # 엇갈릴때까지 반복 (right가 left보다 작거나 같아질 때까지)
  while left <= right:
    # 피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end) and (array[left] <= array[pivot]):
      left += 1
    # 피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start) and (array[right] >= array[pivot]):
      right -= 1
    if left > right:
      array[right], array[pivot] = array[pivot], array[right]
    else:
      array[left], array[right] = array[right], array[left]
    # 분할 이후 왼쪽 부분과 오른쪽 부분 각각 퀵 정렬 재귀적으로 수행
    quick_sort(array, start, right-1)
    quick_sort(array, right+1, end)
    
def quick_sort2(array):
  # 종료 조건 리스트가 하나 이하의 원소만을 담고 있다면 종료
  if len(array) <= 1:
    return array
    
  # 피벗은 첫 번째 원소
  pivot = array[0]
  # 피벗을 제외한 리스트
  tail = array[1:]

  # pivot보다 작은 값이 있다면 left_side 리스트에 담는다. (분할된 왼쪽 부분)
  left_side = [left for left in tail if left <= pivot]
  # pivot보다 큰 값이 있다면 right_side 리스트에 담는다. (분할된 오른쪽 부분)
  right_side = [right for right in tail if right > pivot]

  return quick_sort2(left_side) + [pivot] + quick_sort2(right_side)

def init():
  array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
  # print(select_sort(array))
  # print(insert_sort(array))
  # quick_sort(array, 0, len(array)-1)
  print(quick_sort2(array))

init()