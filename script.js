function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
function Result() {
   const res = document.getElementById('res');
   try{
    res.value=eval(res.value);
   }
   catch(error){
    res.value="error 404"
   }
}
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
}