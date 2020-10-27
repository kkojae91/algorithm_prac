# A,B 두 사람이 볼링을 치고 있습니다. 두사람은 서로 무게가 다른 볼링공을 고르려고 합니다.
# 볼링공은 총 N개가 있으며 각 볼링공마다 무게가 적혀있고, 공의 번호는 1번부터 순서대로 부여됩니다.
# 또한 같은 무게의 공이 여러 개 있을 수 있지만, 서로 다른 공으로 간주합니다. 볼링공의 무게는 1부터 M까지의 자연수 형태로 존재합니다.
# eg. N=5 M=3 각각의 무게가 차례대로 1,3,2,3,2 일 때 각 공의 번호가 차례대로 1번 부터 5번까지 부여됩니다.
# 이때 두 사람이 고를 수 있는 볼링공 번호의 조합을 구하면 다음과 같습니다.
# (1,2), (1,3), (1,4), (1,5), (2,3), (2,5),(3,4),(4,5)
# 결과적으로 두 사람이 공을 고르는 경우의 수는 8가지 입니다. N개의 공의 무게가 각각 주어질 때,
# 두 사람이 볼링공을 고르는 경우의 수를 구하는 프로그램을 작성하시오.

# 공의 번호는 무시해도 될거 같은데?

# 내가 해본 풀이법
def main():
    n,m = map(int, input().split())
    ball_list = list(map(int, input().split()))

    count = 0
    for i in range(len(ball_list)):
        for j in range(i+1, len(ball_list)):
            if ball_list[i] == ball_list[j]:
                continue
            # print(ball_list[i], ball_list[j])
            count += 1
    print(count)

main()

# 책에서 나온 풀이법
def main2():
    n,m = map(int, input().split())
    ball_list = list(map(int, input().split()))

    # 같은 무게의 위치에 몇게의 공이 있는지 check하기 위함.
    weight = [0] * (m+1)
    for i in ball_list:
        weight[i] += 1
    # print(weight)

    # 1~m 까지의 각 무게에 대한 처리
    count = 0
    for i in range(1, m+1):
        # 무게가 i 인 볼링공의 개수(A가 선택할 수 있는 개수) 를 빼준다. 남아 있는 n이 B가 선택할 수 있는 경우의 수.
        n = n - weight[i]
        # (A가 선택할 수 있는 경우의 수(weight[i]) * (n)B가 선택할 수 있는 경우의 수)의 누적합
        count = count + (weight[i]*n)

    print(count)

main2()