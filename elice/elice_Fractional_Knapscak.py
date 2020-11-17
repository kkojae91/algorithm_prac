# n개의 물건이 있고, 각 물건은 무게w와 가치 c를 갖는다. 이제 물건들을 배낭에 넣으려 한다.
# 이 배낭은 무게 m까지 버틸 수 있다.
# 한 가지 재미있는 사실은, 물건을 쪼갤 수 있다는 것이다. 물론, 물건을 쪼개게 되면 무게가 줄지만,
# 가치도 줄게 된다. 예를들어, 물건을 절반으로 줄이면 가치 역시도 절반으로 줄어들게 된다.
# 배낭이 버틸 수 있는 무게 m과 n개의 물건의 정보가 주어질 때, 배낭이 담을 수 있는 가치의 최댓값을
# 소숫점 넷째자리에서 반올림하여 출력하는 프로그램을 작성하세요.
# 입력에 첫줄에는 물건의 개수 n과 배낭이 버틸수 있는 무게 m이 입력된다.
# 이후 n개의 줄에 대하여 각 물건의 무게w 와 가치 c가 주어진다.
# 4 10
# 3 10
# 2 7
# 4 9
# 5 13
# 30.000

def knapsack(stuff_list, stuff_weight):
    weight = 0
    value = 0
    for stuff_w, stuff_v in stuff_list:
        """
        1. 물건을 넣었는데 가방의 공간이 빌때.
        2. 물건을 넣었는데 가방이 꽉 찾을때.
        3. 물건을 넣을 수 없어서 물건을 나눠야할때.
        각 경우의수 별로 가방에 물건을 담아 준다.
        """
        if weight+stuff_w < stuff_weight:
            weight += stuff_w
            value += stuff_v

        elif weight+stuff_w == stuff_weight:
            weight += stuff_w
            value += stuff_v

            return value

        else:
            temp = stuff_weight - weight
            value += temp*(stuff_v/stuff_w)

            return value

    return value

num, stuff_weight = map(int, input().split())

stuff_list = []
# stuff_list[0] = 무게, stuff_list[1] = 가치
for i in range(num):
    stuff_list.append(list(map(int, input().split())))

# 무게 대비 가치가 높은 순으로 정렬 
stuff_list = sorted(stuff_list, key= lambda x: x[1]/x[0], reverse=True)
print("%.3lf"%(knapsack(stuff_list, stuff_weight)))