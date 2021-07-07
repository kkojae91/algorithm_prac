def maxSubArray(nums):
    max_values = [0] * (len(nums)+1)
    # max_result = 0

    idx = 0
    # for문 돌면서 max_values에 차례로 지금까지의 숫자와 현재 숫자를 비교후 둘중 큰 값을 저장해준다.
    for num in nums:
        idx += 1
        max_values[idx] = num

        if max_values[idx] < max_values[idx-1] + num:
            max_values[idx] = max_values[idx-1] + num

        # if max_result < max_values[idx]:
        #     max_result = max_values[idx]
    
    # [1:] 하는 이유는 음수로만 구성된 값들이 들어왔을땐 초기값 때문에 0이 출력된다.
    return max(max_values[1:]), max_values
        # num
        # max_values[idx-1] + num

print(maxSubArray([-1, 4, -2, 6, -10]))