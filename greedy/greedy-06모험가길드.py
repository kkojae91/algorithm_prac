# 모험가 길드
# 한 마을에 모험가가 N명 있습니다. 모험가 길드에서는 N명의 모험가를 대상으로 "공포도"를 측정했는데, "공포도"가 높은 모험가는 쉽게 공포를 느껴
# 위험 상황에서 제대로 대처할 능력이 떨어집니다. 
# 모험가 길드장인 동빈이는 모험가 그룹을 안전하게 구성하고자, 공포도가 X인 모험가는 반드시 X명 이상으로 구성한 모험가 그룹에 참여해야 여행을 떠날 수 있도록 규정했습니다.
# 동빈이가 최대 몇개의 모험가 그룹을 만들 수 있는지 궁금합니다.
# 동빈이를 위해 N명의 모험가에 대한 정보가 주어졌을 때, 여행을 떠날 수 있는 그룹 수의 최댓값을 구하는 프로그램을 작성하시오.
# eg. N = 5 공포도는 2 3 1 2 2 라고 가정한다.
# 공포도가 3이면, 그룹원 수는 3명 이상, 공포도가 2이면 그룹원수는 2명 이상, 공포도가 1이면 혼자 그룹을 결성


# 복잡하게 생각하지 말고 항상 단순하게 생각해야한다.
def make_group(fear_list):
    result_group = 0
    member_count = 0
    # result_group과 member_count 변수를 초기화 해둔다.
    # for문을 돌면서 그때 그때의 공포도와 member_count를 비교해서 member_count와 공포도가 같거나 커지면 result_group을 추가해주고, member_count는 초기화.
    for i in fear_list:
        member_count += 1
        if member_count >= i:
            result_group += 1
            member_count = 0

    return result_group

def main():
    n = int(input())
    fear_list = list(map(int, input().split()))
    # 공포도리스트를 입력 받은후 오름차순 정렬을 통해 공포도가 낮은 순서대로 정렬을 한다.
    fear_list.sort()

    print(make_group(fear_list))

main()

