var TableName;
var num = 0;
function init(){
    var str = $('#test').val();

//    var select = "select";
//    var createtable = "create table";
//    var insert = "insert";
//    var deletel = "delete";

//    if(sql.match(select)){
//        console.log("执行select语句");
//        ShowRecord("select");
//    } 
//    else if(sql.match(createtable)){
//     CreateTable();
//    } 
    if(str.indexOf("create")==0&&str.indexOf("table")==7){
        Create(str);           
    }else if(str.match("insert")){
        Insert(str);
    }
}

function Create(str){
    ShowRecord("执行create语句:"+str);
    //this.TableName =  str.substring(13,str.length);
   // var num = str.indexOf(str.length+1);
    var tb = new Array();
    tb = str.substring(13,str.length).split(" ");
    $('#sql').append("<table id='"+tb[0]+"'"+"border='1'></table>");
    $('#'+tb[0]).append('<tr id='+tb[0]+'head'+'></tr>');
    for(var i = 1; i<tb.length;i++){
      $('#'+tb[0]+'head').append("<td style='width: 60px;'>"+tb[i]+"</td>;");  
    }
}

function Insert(str){
    ShowRecord("执行insert语句:"+str);
    var tb2 = new Array();
    tb2 = str.split(" ");
   // INSERT INTO 表名称 VALUES
    if(tb2[0]=="insert"&&tb2[1]=="into"&&tb2[3]=="values"){
        $('#'+ tb2[2]).append("<tr class='"+tb2[2]+"line"+this.num+"'"+"></tr>");
        for(var i = 4;i<tb2.length;i++){
            $('.'+ tb2[2]+'line'+this.num).append("<td>"+tb2[i]+"</td>");
        }
        this.num++;
    }
}

function ShowRecord(str){
    
     $('#record').append('<p>'+str+new Date()+'</p>');
}
function OperationalDatabases(){
  //  $('#record').append('<p>'+str+new Date()+'</p>');
}

function CreateTable(){

    console.log("执行CreeatTable");
}

