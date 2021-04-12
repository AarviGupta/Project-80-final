var names=[];
var display_student_array=[];
 function submit(){
     for(var j=1;j<=4;j++){
        var nameofthestudent=document.getElementById("name_"+j).value;
        console.log(nameofthestudent);
        names.push(nameofthestudent);
     }
     var len_student=names.length;
console.log(len_student);
for(var a=0;a<len_student;a++){
    display_student_array.push("<h4>NAME-"+names[a]+"</h4>");
    console.log(display_student_array);
}
document.getElementById("name_display_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("name_display_without_commas").innerHTML=remove_commas;
document.getElementById("button_submit").style.display="none";
document.getElementById("button_sort").style.display="inline-block";
}
var display_student_array_sort=[];
function sort(){
    names.sort();
    var len_student=names.length;
    console.log(len_student);
    for(var a=0;a<len_student;a++){
        display_student_array_sort.push("<h4>NAME-"+names[a]+"</h4>");
        console.log(display_student_array_sort);
    }
    document.getElementById("name_display_with_commas").innerHTML=display_student_array_sort;
    var remove_commas=display_student_array_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("name_display_without_commas").innerHTML=remove_commas;

}
