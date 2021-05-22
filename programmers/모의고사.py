# 문제 설명
# 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

# 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
# 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
# 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

# 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

# 제한 조건
# 시험은 최대 10,000 문제로 구성되어있습니다.
# 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
# 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

# 입출력 예
#  answers   return
# [1,2,3,4,5] [1]
# [1,3,2,4,2] [1,2,3]

# 입출력 예 설명
# 입출력 예 #1

# 수포자 1은 모든 문제를 맞혔습니다.
# 수포자 2는 모든 문제를 틀렸습니다.
# 수포자 3은 모든 문제를 틀렸습니다.
# 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

# 입출력 예 #2

# 모든 사람이 2문제씩을 맞췄습니다.

def solution(answers):
    one = [1, 2, 3, 4, 5]
    two = [2, 1, 2, 3, 2, 4, 2, 5]
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
#     answers의 길이보다 one two three의 길이를 길게 만들어 준다.
    if len(one) < len(answers):
        one = one*(len(answers) // 2 +1)
    if len(two) < len(answers):
        two = two*(len(answers) // 2 +1)
    if len(three) < len(answers):
        three = three*(len(answers) // 2 +1)
    
    count_list = [0, 0, 0]
    
    for idx in range(len(answers)):
        if one[idx] == answers[idx]:
            count_list[0] += 1
        if two[idx] == answers[idx]:
            count_list[1] += 1
        if three[idx] == answers[idx]:
            count_list[2] += 1
    
    answer = []
    max_num = 0
    for idx in range(len(count_list)):
        if max_num > count_list[idx] :
            pass
        elif max_num < count_list[idx]:
            max_num = count_list[idx]
            answer = [idx+1]
        else:
            answer.append(idx+1)    
    
    return answer

def init():
  answers = list(map(int, input().split()))
  print(solution(answers))

init()