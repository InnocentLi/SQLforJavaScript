var TableName;
var num = 0;
function qcreate(){
    $('#test').val("create table student name age sex teacher");
}
function qinsert(){
    $('#test').val("insert into student values wang 18 男 flp");
}

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
    }else if(str.match("delete")){
        Delete(str);
    }else if(str.match("drop")){
        Drop(str);
    }else if(str.match("select")){
       
    }else if(str.match("alter")){
        Alter(str);
    }
    
    $('#test').val(null);
    Update();
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
      $('#'+tb[0]+'head').append("<th style='width: 60px;'>"+tb[i]+"</th>;");  
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

function Delete(str){
    //DELETE * FROM table_name  
    //DELETE FROM Person WHERE LastName = 'Wilson' 
    ShowRecord("执行delete语句:"+str);
    var tb3 = new Array();
    tb3 = str.split(" ");
    if(tb3[1]=="*"){
        console.log(tb3);
        console.log($("#"+tb3[3]+" tr td"));
     $("#"+tb3[3]+" tr td").remove(); 
    }
    else if(tb3[1]=="from"){

        // console.log("tb3");
        // console.log(tb3);
        // console.log($("#"+tb3[2]+" tr"));
        // console.log($("#"+tb3[2]+" tr td"));
       
        //  while($("#"+tb3[2]+" tr td").val()==tb3[6]){
        //      console,log(this);
        //     aim = this;          
        //   console.log(aim.index());
        //  } 
       // $("div")
        var a; 
        a = $("#"+tb3[2]+" tr th:contains('"+tb3[4]+"')").index();
        // console.log($("#"+tb3[2]+" tr th"))
        console.log(a);
        a = a+1; 
        // console.log($("#"+tb3[2]+" tr th:contains('sex')"));
        //$("#table3 tr:gt(0):eq(1)").hide();
       // $("#table3 tr td:nth-child(2)")
     // $("#"+tb3[2]+" tr td:nth-child(2)").hide();
      //  console.log($("#"+tb3[2]+" tr td:nth-child("+a+")"));
       console.log(a);
     //  $("#"+tb3[2]+" tr td:nth-child("+a+")")
     var aim = $("#"+tb3[2]+" tr td:contains('"+tb3[6]+"')");
     console.log(aim);
     aim.parent().hide();
    }
    
}

 function Update(){
   $("table td").click(function () {
  //  console.log($("table td"));
    var a = $('#test').val();
    $(this).html(a);
    var tdSeq = $(this).parent().find("td").index($(this));
    var trSeq = $(this).parent().parent().find("tr").index($(this).parent());
     ShowRecord("第" + (trSeq) + "行，第" + (tdSeq+1) + "列");
 })

 }

function Select(str){

}

function Alter(str){
   // ALTER TABLE table_name ADD column_name 
   //ALTER TABLE table_name DROP  column_name
   var tb = new Array();
   tb = str.split(" "); 
   if(tb[3]=="add"){
  //  $('#'+tb[0]+'head').append("<th style='width: 60px;'>"+tb[i]+"</th>;");  
  $('#'+tb[2]+'head').append("<th style='width: 60px;'>"+tb[4]+"</th>;");  
    }
//else if(tb[3]=="drop"){
     
//    }

   
}

function Drop(str){
   // DROP TABLE 表名称
   var tb7 = new Array();
   tb7 = str.split(" "); 
   $("#"+tb7[2]).remove(); 
}

function ShowRecord(str){
    
     $('#record').append('<p>'+str+new Date()+'</p>');
}
function OperationalDatabases(){
  //  $('#record').append('<p>'+str+new Date()+'</p>');
}

