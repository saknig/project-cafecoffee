var ameri=0; var latt=0; var tea1=0;

$(document).ready(function(){
    $("#mainpage").fadeIn(2000);
    
    $("#context").click(function(){
        $("#contact").show(2000);
    })
    $("#member").click(function(){
        $("#form").show(2000);
    })
    $("#offerclick").click(function(){
        $("#offer").show(2000);
    })
});
var count=0;
function cap(){
    count++;
    document.getElementById("q1").value=count;
}
function ame(){
    ameri++;
    document.getElementById('q2').value=ameri;
}
function lat(){
    latt++;
    document.getElementById('q3').value=latt;
}
function tea(){
    tea1++;
    document.getElementById('q4').value=tea1;
}

        function thanks(){
            document.getElementById("form").style.display="none";
            document.getElementById("offer").style.display="none";
            document.getElementById("thanksmessage").style.display="block";
            document.getElementById("contact").style.display="none";
            document.getElementById("member").style.opacity="1";
            document.getElementById("context").style.opacity="0.5";
            document.getElementById("offerclick").style.opacity="0.5";
        }
        function contact(){
            document.getElementById("form").style.display="none";
            document.getElementById("thanksmessage").style.display="none";
            document.getElementById("offer").style.display="none";
            document.getElementById("context").style.opacity="1";
            document.getElementById("offerclick").style.opacity="0.5";
            document.getElementById("member").style.opacity="0.5";
        }
        function member(){
            document.getElementById("thanksmessage").style.display="none";
            document.getElementById("contact").style.display="none";
            document.getElementById("offer").style.display="none";
            document.getElementById("member").style.opacity="1";
            document.getElementById("context").style.opacity="0.5";
            document.getElementById("offerclick").style.opacity="0.5";
        }
        function offer(){
            document.getElementById("form").style.display="none";
            document.getElementById("thanksmessage").style.display="none";
            document.getElementById("contact").style.display="none";
            document.getElementById("offerclick").style.opacity="1";
            document.getElementById("context").style.opacity="0.5";
            document.getElementById("member").style.opacity="0.5";
        }
        function validate(){
            var returnval=true;
            if((document.getElementById("q1").value).length==0 && (document.getElementById("q2").value).length==0 && (document.getElementById("q3").value).length==0 && (document.getElementById("q4").value).length==0){
                alert("Please place your order....!!!")
                returnval=false;
            }
            return returnval;
        }
        function validateform(){
            var form=true;
            document.getElementById("note").innerHTML="";
            var name=document.getElementById("n1").value;
            if(name.length==0 || (document.getElementById("n2").value).length==0){
                document.getElementById("note").innerHTML="*Please fill the form..!!";
                form=false;
            }
            // thanks();
            return form;
        }