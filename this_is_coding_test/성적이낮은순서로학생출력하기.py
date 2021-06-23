"""
chapter06 정렬 03번 성적이 낮은 순서로 학생 출력하기
n명의 학생 정보 -> 학색의 이름과 학생의 성적으로 구분된다.
각 학생의 이름과 성적 정보가 주어졌을 때 성적이 낮은 순서대로 학생의 이름을 출력하는 프로그램을 작성하시오.

첫 번째 줄에 학생의 수 n이 입력된다. (1<= n <= 100,000)
두 번째 줄부터 n+1 번째 줄에는 학생의 이름을 나타내는 문자열 a와 학생의 성적을 나타내는 정수 b가 공백으로 구분되어 입력된다.
1 <= a,b <= 100
2
홍길동 95
이순신 77

모든 학생의 이름을 성적이 낮은 순서대로 출력한다. 성적이 동일한 학생들의 순서는 자유롭게 출력해도 괜찮다.
이순신 홍길동
"""

from sys import stdin

def solution(n, student):
  sorted_list = sorted(student, key=lambda x : x[1])
  answer = []
  for i in sorted_list:
    answer.append(i[0])
  return " ".join(answer)

def init():
  n = int(stdin.readline().rstrip())
  student = []
  for i in range(n):
    name, score = stdin.readline().split()
    student.append([name, int(score)])  

  print(solution(n, student))

init()