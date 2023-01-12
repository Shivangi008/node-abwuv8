// run `node index.js` in the 
function sortStudents(a,b){
  const totalMarksA=a.chemistry+a.biology;
  const totalMarksB=b.chemistry+b.biology;
  if(totalMarksA !== totalMarksB){
    return totalMarksB - totalMarksA;
  }
if(a.biology !== b.biology){
  return b.biology - a.biology;
}
if(a.dob !== b.dob){
  return new Data(b.dob) - new Data(a.dob);
}
return 0;
}
const sortedStudents= students.sort(sortStudents);



