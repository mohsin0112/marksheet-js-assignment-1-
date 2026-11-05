var studentName = prompt("Enter Student Name:");
var rollNumber = prompt("Enter Roll Number:");
var studentClass = prompt("Enter Class:");

var english = Number(prompt("English Marks:"));
var math = Number(prompt("Mathematics Marks:"));
var physics = Number(prompt("Physics Marks:"));
var chemistry = Number(prompt("Chemistry Marks:"));
var computer = Number(prompt("Computer Science Marks:"));
var urdu = Number(prompt("Urdu Marks:"));
var islamiat = Number(prompt("Islamiat Marks:"));

var totalMarks = 700;
var obtainedMarks = english + math + physics + chemistry + computer + urdu + islamiat;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h2>Student Marksheet</h2>");
document.write("Name: " + studentName + "<br>");
document.write("Roll No: " + rollNumber + "<br>");
document.write("Class: " + studentClass + "<hr>");

document.write("English: " + english + "<br>");
document.write("Math: " + math + "<br>");
document.write("Physics: " + physics + "<br>");
document.write("Chemistry: " + chemistry + "<br>");
document.write("Computer: " + computer + "<br>");
document.write("Urdu: " + urdu + "<br>");
document.write("Islamiat: " + islamiat + "<hr>");

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");