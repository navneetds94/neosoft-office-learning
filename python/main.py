def getInteger():
    res= int(input("Enter a number :- "))
    return res

def Main():
    print("Started")
    output = getInteger()     
    print(output)

    # now we are required to tell Python 
    # for 'Main' function existence
if __name__=="__main__":
    Main()