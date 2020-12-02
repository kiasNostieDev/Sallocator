# file = open("blah")
# result = []

# for x in file:
#     result.append(x[0:len(x)-1])

# file = open("blah","a")
# file.write(str(result))





# file = open("blah")
# result = []
# single = ""
# count = 0
# subs = []

# for x in file:
#     if count==3:
#         result.append(single[0:len(single)-1])
#         single=""
#         count=0
    
#     single+=x[0:len(x)-1]+"-"
#     count+=1

# file.close()
# file = open("blah","a")

# for x in result:
#     file.write("{\n")
#     file.write("\'value\': \'"+x+"\',\n")
#     file.write("\'label\': \'"+x+"\'")
#     file.write("\n},")

# # file.write(result)
# print(result)










# To get the name done
# file = open("blah")
# names = ['Dr.D.Shanthi', 'Dr.N.Uma Maheswari', 'Dr.K.Dhanalakshmi', 'Dr.M.S.Thanabal', 'Dr.S.Pushpalatha', 'Dr.R.Karthikeyan', 'Dr.P.Gokulakrishnan', 'Dr.A.Thomas Paul Roy', 'Dr.D.Suresh', 'Dr.N.Dhanalakshmi', 'Dr.S.Satheesbabu', 'Dr.S.Jeyanthi', 'Dr.K.Manivannan', 'Dr.J.Benadictraja', 'Dr.M.Buvana', 'Dr.M.Balasubramani', 'Dr.A.Sathya Sofia', 'Mr.K.Suresh', 'Mrs.J.Punitha Nicoline', 'Dr.Y.Arockia Raj', 'Dr.D.M.D.Preethi', 'Dr. A. H. Nandhu Kishore', 'Ms.S.Naganandhini', 'Mr.N.Rajesh Pandian', 'Mrs.C.Sathya', 'Mrs.K.Kalaivani', 'Mr.V.Nanda Kumar', 'Mrs.S.Santhana Prabha', 'Ms.S.T.Shenbagavalli', 'Mrs.G.Mariammal', 'Mrs.V.Priya', 'Mrs.M.Jayanthi', 'Mrs.A.Joyce', 'Mr.B.Sakthi Karthidurai', 'Mrs.K.Gayathri', 'Mr.T.Selvakumar', 'Mr.S.M.Prabin', 'Mr.N.Selvaganesh']
# des = []
# output = []

# for x in file:
#     des.append(x[0:len(x)-1])

# for val in range(0,len(names)):
#     output.append(des[val]+" "+names[val])

# file = open("blah","a")
# print(names)
# file.write(str(des))