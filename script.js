function hi(){
var txta = document.getElementById('txta').value;
var txtb = document.getElementById('txtb').value;


 if(txta == null || txta=="" ||isNaN(txta)){
    alert("nhập");
    return;
 }
 if(txtb == null || txtb=="" ||isNaN(txtb)){
    alert("nhập");
    return;
 }
alert(parseFloat(txta) + parseFloat(txtb));
}