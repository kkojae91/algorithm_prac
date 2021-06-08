"""
chapter03 그리디 02번 문제 큰 수의 법칙
'큰 수의 법칙'은 일반적으로 통계 분야게서 다루어지는 내용이지만 
동빈이는 본인만의 방식으로 다르게 사용하고 있다.
동빈이의 큰 수의 법칙은 다양한 수로 이루어진 배열이 있을 때 
주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙이다.
단, 배열의 특정한 인덱스(번호)에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 이 법칙의 특징이다.

예를 들어 순서대로 2,4,5,4,6으로 이루어진 배열이 있을 때 M이 8이고, K가 3이라고 가정하자.
이 경우 특정한 인덱스의 수가 연속해서 세 번까지만 더해질 수 있으므로 큰 수의 법칙에 따른 결과는
6+6+6+5+6+6+6+5=46
단, 서로 다른 인덱스에 해당하는 수가 같은 경우에도 서로 다른 것으로 간주한다.
예를 들어 순서대로 3,4,3,4,3으로 이루어진 배열이 있을 때 M이 7이고, K가 2라고 가정하자.
이 경우 두 번째 원소에 해당하는 4와 네 번째 원소에 해당하는 4를 번갈아 두번씩 더하는 것이 가능하다.
결과적으로 4+4+4+4+4+4+4+4=28이 도출된다.
배열의 크기 N, 숫자가 더해지는 횟수 M, 그리고 K가 주어질 때 동빈이의 큰 수의 법칙에 따른 결과를 출력하시오.

첫째 줄에 N(2<=N<=1,000), M(1<=M<=10,000), K(1<=K<=10,000)의 자연수가 주어진다.
둘째 줄에 N개의 자연수가 주어진다. 각 자연수는 공백으로 구분한다. 단, 각각의 자연수는 1이상 10,000이하의 수로 주어진다.
입력으로 주어지는 K는 항상 M보다 작거나 같다.

첫쩨줄에 동빈이의 큰 수의 법칙에 따라 더해진 답을 출력한다.
5 8 3
2 4 5 4 6

46
"""
from sys import stdin

# 수학적 접근을 한다. 순열이 어떻게 반복 되는지 확인..
# 나머지, 몫 연산으로 많은 것을 도출해낼 수 있다.
def solution2(n, m, k, n_list):
  n_list.sort(reverse=True)
  first = n_list[0]
  second = n_list[1]
  # 가장 큰 수가 몇 번 반복하는지 몫과 나머지를 활용해 구해준다.
  first_count = (m//(k+1))*k
  first_count += m % (k+1)
  # 두번째로 큰 수가 몇 번 반복하는지 구해준다. 전체 총 길이 - first_count
  second_count = m - first_count
  answer = first_count * first + second_count * second
  return answer
  

# 내가 푼 solution 이렇게 접근한다면 n의 갯수가 100억 10억 커졌을 경우 시간 초과를 당한다.
def solution(n, m, k, n_list):
  n_list.sort(reverse=True)
  # print(n_list)
  idx = 0
  answer = 0
  while True:
    if idx >= m:
      return answer
    for _ in range(k):
      answer += n_list[0]
      idx += 1
      if idx >= m:
        return answer
    answer += n_list[1]
    idx += 1

def init():
  N, M, K = map(int, stdin.readline().split())
  n_list = list(map(int, stdin.readline().split()))
  # print(N, M, K, n_list)
  # print(solution(N, M, K, n_list))
  print(solution2(N, M, K, n_list))

init()