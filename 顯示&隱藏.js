  window.onload=function(){
  var odiv=document.getElementById("tabs");
  var obt=document.getElementById("bt");
  obt.onclick=function(){
    if(odiv.style.display=="none"){
      odiv.style.display="block";
      this.value="全部隱藏";
    }else{
      odiv.style.display="none";
      this.value="顯示";
    }
  }
}
