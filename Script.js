var Entry_Message = "Welcome To Gaters01Blog! \n Sign in for a better experience.";

alert (Entry_Message);

var Number_of_active_users = 600;
var Number_of_inactive_users = 600;
var Number_of_total_users = Number_of_active_users + Number_of_inactive_users;

alert ("Total number of users= " + Number_of_total_users);

var Guest_Message = "Hello"
var Guest_Message2 = "Guest"
var Guest_MessageTotal = [Guest_Message , Guest_Message2];
alert (Guest_MessageTotal[0]  + Guest_MessageTotal[1]);

if (Number_of_active_users > Number_of_inactive_users){
	alert ("Right now, the number of online users is greater than the number of offline users. Great!!!")
}
else if (Number_of_active_users == Number_of_inactive_users){
	alert ("The Number of online users is equall to the number of inactive users. ~(o_o~)")
}
else{
	alert ("Right now the number of offline users is more than the number of active users. Come Back Soon!!!")
}

for(j=0; j < Guest_MessageTotal.length; j++){
	
	alert("Element at position"+j+" "+Guest_MessageTotal[j]);
	
}


















































































































