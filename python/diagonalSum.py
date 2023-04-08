matrix=[
1,2,3,
4,5,6,
9,8,9,
]

left=0

# right_pos
right=0
ignorePos=len(matrix) - 2

for i in range(0,len(matrix),4):  
    left=left + matrix[i]
print("Left diagonal sum :- ",left)

for j in range(2,len(matrix),2):
    if(j>ignorePos):
        break
    right=right + matrix[j]

print("Right diagonal sum :- ", right)


# num=8

# for i in range(0,10,2):
#     if (i>7):
#         break
#     print(i)