# 만들수 없는 금액
# 동네 편의점의 주인인 동빈이는 N개의 동전을 가지고 있습니다. 이때 N개의 동전을 이용하여 만들 수 없는 양의 정수 금액 중 최솟값을 구하는 프로그램을 작성하시오.
# eg. N=5 이고, 각 동전이 각각 3원, 2원, 1원, 1원, 9원 짜리 동전이라고 가정하자.
# 이때 동빈이가 만들 수 없는 양의 정수 금액 중 최솟값은 8원 입니다.
# eg2. N = 3 이고, 각 동전이 각각 3원, 5원 7원 짜리 동전이라고 가정하자.
# 이때 동빈이가 만들 수 없는 양의 정수 금액 중 최솟값은 1원 입니다.
# 5
# 3 2 1 1 9
# 3
# 3 5 7


# 규칙... 알수 없음. 문제를 자주 접해 봐야하는 거 같다.
def main():
    n = int(input())
    coin_list = list(map(int, input().split()))
    # coin_list를 오름차순 정렬한다.
    coin_list.sort()
    # 1,1,2,3,9
    # 첫번째 타겟 1을 만들 수 있니?
    target = 1
    for cur_coin in coin_list: 
        if cur_coin > target:
            break
        else:
            target += cur_coin
    
    print(target)

main()