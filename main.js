nameOfTheStudentArray=[];
function submit()
{
    var displayStudentArray=[];
    for (var j=1; j<=4; j++)
    {
        var nameOfTheStudent=document.getElementById("nameOfTheStudentArray" +j).value;
        console.log(nameOfTheStudent);
        nameOfTheStudentArray.push(nameOfTheStudent);
    }
    console.log(nameOfTheStudentArray);

    var lenghtOfNameOfStudentsArray=nameOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);
    for (var k=0; k<lenghtOfNameOfStudentsArray; k++)
    {
        displayStudentArray.push("<h4>NAME -"+ nameOfTheStudentArray[k]+"</h4>");
        console.log(displayStudentArray);
    }
    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML=displayStudentArray;
    var removeCommas=displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML=removeCommas;
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sortButton").style.display="inline-block";
}
function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);
    var displayStudentArraySorting=[];
    var lenghtOfStudentsArray=nameOfTheStudentArray.length;
    console.log(lenghtOfStudentsArray);
    for (var k=0; k<lenghtOfStudentsArray; k++)
    {
        displayStudentArraySorting.push(nameOfTheStudentArray[k]);
        console.log(displayStudentArraySorting);
    }
    var removeCommas=displayStudentArraySorting.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML=removeCommas;
    document.getElementById("submitButton").style.display="inline-block";
    document.getElementById("sortButton").style.display="none";
}
function searching() {
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<nameOfTheStudentArray.length; j++) {
        if(s==nameOfTheStudentArray[j]) {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
    console.log("Nome encontrado "+found+" vez(es)");
}