# 순열이란, n개의 원소 중에서 r개를 나열하는 것을 의미합니다. 
# 예를 들어, 4개의 원소 중에서 2개를 나열한다고 하고, 
# 우리가 갖고있는 원소가 ‘a’, ‘b’, ‘c’, ‘d’라면, 
# 그 순열은 ‘ab’, ‘ac’, ‘ad’, ‘ba’, ‘bc’, ‘bd’, ‘ca’, ‘cb’, ‘cd’, ‘da’, ‘db’, dc’ 로써 
# 총 12개의 서로 다른 경우가 존재합니다.
# 입력으로 n과 r이 주어질 때, 
# n개의 원소 중에서 r개를 나열한 결과를 출력하는 프로그램을 작성하세요. 
# 단, 원소는 항상 ‘a’부터 시작하여 nn개의 알파벳이라고 가정합니다.
alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
            'q','r','s','t','u','v','w','x','y','z']

# ['a', 'b', 'c', 'd']

def permutation(now_idx, end_idx, alpha_list, result_list, check_list):
    # 기저조건 설정
    if now_idx >= end_idx:
        print(' '.join(map(str, result_list)))

    else:
        for i in range(1, len(alpha_list)+1):
            if check_list[i] == False:
                check_list[i] = True
                permutation(now_idx+1, end_idx, alpha_list, result_list+[alpha_list[i-1]], check_list)
                check_list[i] = False

n, r = map(int, input().split())

alpha_list = []
for idx in range(n):
    alpha_list.append(alphabet[idx])

now_idx = 0
end_idx = r
result_list = []
# 방문체크 리스트
check_list = [False] * (n+1)
permutation(now_idx, end_idx, alpha_list, result_list, check_list)