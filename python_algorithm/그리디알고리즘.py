# 그리디 알고리즘
# 지불할 돈 1000
# 구매가격 입력값 380
# 거슬러줄 돈 620
# price = int(input())
# charge_coin = 1000 - price
# coin_list=[500,100,50,10,5,1]
# result_coins_count = 0
# for coin in coin_list:
#     i = charge_coin // coin
#     charge_coin = charge_coin % coin
#     result_coins_count += i
# print(result_coins_count)
    
##########
# 재귀 함수로 만들어 보기.
# 재귀 함수는 탈출 조건이 있어야함.

price = int(input())
charge_coin = 1000 - price
coin_list=[500,100,50,10,5,1]

def calc_coin_count(idx, coin_list, charge_coin):
    if idx == len(coin_list):
        return 0

    result = charge_coin // coin_list[idx]
    charge_coin = charge_coin % coin_list[idx]
    idx += 1
    return result + calc_coin_count(idx, coin_list, charge_coin)


print(calc_coin_count(0, coin_list, charge_coin))