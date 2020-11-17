# 엘리스씨는 1원 5원 10원 100원 짜리 동전이 무한개! 존재하는 가게에서 근무한다.
# 손님이 계산을 하고 난 후, 거스름돈을 돌려줘야하는데 가능한 적은 수의 동전을 돌려주고 싶다.
# 예를 들어, 7원을 돌려줘야 한다면, 1원을 7개 돌려줄 수도 있지만,
# 그것보다는 5원 1개, 1원 2개를 돌려주는 것이 적은 수의 동전을 돌려주는 것이므로, 이것이 더 좋은 경우이다.
# 거스름돈 n원을 돌려줘야할 때, 돌려줘야하는 동전 개수의 최솟값을 출력하는 프로그램을 작성하시오.
# 7
# 3
# 103
# 4
# 돌려줘야하는 거스름돈은 최대 100,000,000입니다.

def change(money_list, target_money):
    count = 0
    for money in money_list:
        # print(type(money))
        if target_money // money >= 1:
            count += target_money // money
            target_money = target_money % money

    return count

money_list = [100, 50, 10, 5, 1]
target_money = int(input())

print(change(money_list, target_money))