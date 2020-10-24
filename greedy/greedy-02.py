# 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 합니다.
# 단, 두번째 연산은 N이 K로 나누어 떨어질 때만 선택할 수 있습니다.
# 1. N에서 1을 뺍니다.
# 2. N을 K로 나눕니다.
# N이 17, K 4로 가정, 1 -> 2 -> 2  N이 1이된다. 실행한 횟수는 3 N을 1로 만드는 최소 횟수 이다.
# N과 K가 주어질때 N 이 1이 될때까지, 1번 혹은 2번의 과정을 수행해야하는 최소 횟수를 구하는 프로그램을 작성하시오.

def greedy(n, k, count):
    while True:
        if n == 1:
            return count

        if n % k == 0:
            n = n // k
            count += 1

        else:
            n = n - 1
            count += 1
        # print(n)
    
n = int(input())
k = int(input())
count = 0
print(greedy(n, k, count))