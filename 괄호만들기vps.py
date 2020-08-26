# 6
# (())())
# (((()())()
# (()())((()))
# ((()()(()))(((())))()
# ()()()()(()()())()
# (()((())()(

def make_vps(now_idx, open_cnt, close_cnt, vps_str):
    if open_cnt == 0 and close_cnt == 0 :
        print(''.join(vps_str)) 
    # 만약 open_cnt가 양수이면,
    if open_cnt > 0:
        vps_str[now_idx] = '('
        # 만약 '(' 이면 vps_str에 추가 해주고 now_idx +1,
        # 여는 괄호가 나왔으니 open_cnt -1 해주고, close_cnt +1 해준다.
        make_vps(now_idx +1, open_cnt -1, close_cnt+1, vps_str)

    # 만약 close_cnt가 양수이면, 오픈과 클로스 둘다 양수 일땐 둘다 체크해주는 거야.
    if close_cnt > 0:
        vps_str[now_idx] = ')'
        # 만약 ')'이면 vps_str에 추가해준후 now_idx +1,
        # 닫는 괄호 이니 open_cnt는 그대로 넘겨주고, 
        # close_cnt는 닫을 괄호가 하나 줄어 들었으므로 -1 해서 넘겨준다.
        make_vps(now_idx +1, open_cnt, close_cnt-1, vps_str)
        


# 정수 값을 입력받는다.
pair_cnt = int(input())
vps_str = [""]*(pair_cnt*2)
# print(vps_str)

make_vps(0, pair_cnt, 0, vps_str)