var obj=
	{
	"first_name":"Nandini",
	"last_name":"Vijayvargiya",
	 "email":"nandinivijayvargiya999@gmail.com",
	"website":"www.geekster.in",
	"k":"This is key K's value",
	"students":[
	{
		"Name":"NAME1",
		"Marks":15
	},
	{
		"Name":"NAME2",
		"Marks":17
	},
	{
	    "Name":"NAME3",
		"Marks":19
    },
	{
        "Name":"NAME4",
		"Marks":21
    },
	{
	    "Name":"NAME5",
		"Marks":0
    },
	{
	    "Name":"NAME6",
		"Marks":27
    },
	
	],
	};
	
	console.log(obj);
	console.log(Object.keys(obj));
	var key=Object.keys(obj);
	  for(var i=0;i<key.length;i++)
	  {
		console.log(obj.students[i]);
	  }
	
	var input=prompt("Enter the passing marks:");
	input=parseInt(input);
	var arr=[];
	  for(var i=0;i<key.length;i++)
	  {
		if(obj.students[i]["Marks"]>=input)
		{
			arr.push(obj.students[i]);
		}
	  }
		
	  console.log(arr);
	