# 괄호 p가 한줄에 입력을 받는다.
# 입력된 괄호가 올바른 괄호인지 올바르지 않은 괄호인지 판별하는 프로그램을 작성하시오.

def is_right_parenthesis(p_list):
    if len(p_list) == 0:
        return 'YES'
    elif len(p_list) == 1:
        return 'NO'

    for i in range(len(p_list)-1):
        if p_list[i] == '(' and p_list[i+1] == ')':
            new_plist = p_list[ :i] + p_list[i+2: ]
            return is_right_parenthesis(new_plist)
    return 'NO'


# 입력값
p_list = input()
# print(p)
print(is_right_parenthesis(p_list))