# 아래와 같이 계산 한다면,
# 가장 비싼날이 가장 싼 날보다 먼저이면 계산을 할 수 없는 상황이 옵니다.
# def maximizeProfit(nums):
#     min_price, max_price = min(nums), max(nums)
#     min_idx = nums.index(min_price)
#     max_idx = nums.index(max_price)
#     if min_idx >= max_idx:
#         return 0
#     best_price = max_price - min_price
#     return best_price

def maximizeProfit(nums):
    max_profit = 0
    min_price = nums[0]

    for i in range(1,len(nums)):
        # min_price부터 오늘 까지의 수익을 저장 후.
        profit = nums[i] - min_price
        # max_profit과 오늘까지의 수익을 비교해본다. 만약 오늘의 수익이 최대라면, max_profit 갱신
        if max_profit < profit:
            max_profit = profit
        # 만약 min_price 보다 더 작은 값이 나오면 min_price갱신
        if nums[i] < min_price:
            min_price = nums[i]

    return max_profit       

def main():
    print(maximizeProfit([10,1,4,3,5,9])) # 4
    print(maximizeProfit([1,2,3,4,5,6,7])) # 6
    print(maximizeProfit([7,6,5,4,3,2,1])) # 0
    print(maximizeProfit([1,2,3,4,3,2,1])) # 3
    print(maximizeProfit([2,8,19,37,4,5])) # 35

if __name__ == "__main__":
    main()