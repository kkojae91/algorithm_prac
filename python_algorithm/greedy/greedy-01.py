# 카운터에는 거스름돈으로 사용할 500, 100, 50, 10 동전 무한히 존재한다 가정,
# 손님에게 거슬러줘야할 돈이 N원 일때, 거슬러 주어야 할 동전의 최소개수를 구하시오.
# 단, 거슬러줘야 할 돈 N은 항상 10배수 입니다.
# 가장 큰 단위의 돈부터 거슬러주면 된다.
# N = 1260원 일 경우 예시를 확인해보자.

def greedy(array, count, n):
    for coin in array:
        count += n // coin
        n = n % coin

    return count

n = int(input())
count = 0
array = [500, 100, 50, 10]

print(greedy(array, count, n))