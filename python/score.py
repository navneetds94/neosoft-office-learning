a = [1, 2, 3]
b = [3, 2, 1]
count_a=0
count_b=0

for i in range(len(a)):
    # print(a[i])
    for j in range(len(b)):
        if(i==j):
            print(a[i],b[j])

            if(a[i] > b[j]):
                count_a = count_a + 1
            elif(a[i] < b[j]):
                count_b = count_b + 1
            
print("a => ",count_a)
print("b => ",count_b)