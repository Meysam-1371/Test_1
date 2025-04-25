function addTask() {
    var input = document.getElementById('taskInput');
    var taskText = input.value.trim();

	var input2 = document.getElementById('endtime');
    var timeText = input2.value.trim();
	
    if (taskText === "") {
        alert("لطفا یک کار وارد کنید");
        return;
	}
	
	if (timeText === "") {
        alert("لطفا زمان را وارد کنید");
        return;
	}
	
	let ms = Date.now();
	var li= document.createElement("li");
	li.textContent=taskText+timeText;
	
	var deleteButton = document.createElement("button");
	deleteButton.textContent="حذف";
	deleteButton.classList.add("delete-btn");
	deleteButton.onclick=function() {
		li.remove();
	};
	li.appendChild(deleteButton);  
	document.getElementById("taskList").appendChild(li);
	input.value = ""; // پاک کردن ورودی پس از اضافه کردن کار
	input2.value = ""; // پاک کردن ورودی پس از اضافه کردن کار
}
