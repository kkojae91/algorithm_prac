# 여러개의 숫자카드중에서 가장 높은 숫자의 카드를 뽑는 게임이다.
# 1. 숫자가 쓰인 카드들이 n x m 형태로 놓여있다. 이때 n은 행의 개수를 의미, m은 열을 의미
# 2. 먼저 뽑고자 하는 카드가 포함되어 있는 행을 선택
# 3. 그 다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야한다.
# 4. 따라서 처음에 카드를 골라낼 행을 선택할 때, 
#     이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여 
#     최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 새워야한다.

# 3, 1, 2
# 4, 1, 4
# 2, 2, 2 라고 할때 3번째 행의 2라는 카드를 뽑아야한다.
# 카드들이 n x m 형태로 놓여있을때, 게임의 룰에 맞게 카드를 뽑는 프로그램을 만드시오

# 3 3
# 3 1 2
# 4 1 4
# 2 2 2

# 2 4
# 7 3 1 8
# 3 3 3 4

def card_game(rows):
    target = rows[0]
    for item in rows[1:]:
        if target > item:
            target = item
    return target

row, column = map(int, input().split())
matric_list = []

for _ in range(row):
    matric_list.append(list(map(int, input().split())))


result_list = []
for row in matric_list:
    result_list.append(card_game(row))

print(max(result_list))