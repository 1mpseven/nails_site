activeclass='m1';

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}



function olink(gfile){
    change_class(activeclass, 'x')
    if (gfile=='main.html') activeclass='m1';
    if (gfile=='about.html') activeclass='m2'
    change_class(activeclass, 'v')

    console.log(gfile + ' accept')
    var xmlhttp = getXmlHttp()
    xmlhttp.open('GET', gfile, true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) {
                document.getElementById('tcontent').innerHTML=xmlhttp.responseText;
            }
        }
    };
    xmlhttp.send(null);

}

function change_class(obj_id, obj_class){ //смена css класса для объекта
     document.getElementById(obj_id).className = obj_class;
}