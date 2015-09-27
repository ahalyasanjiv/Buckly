var receipt = [];
	$('#food ol').children('li').bind('touchstart mousedown', function(e) {
		console.log($(this).attr('data-name'));
		receipt.push($(this).attr('data-name'));
		console.log(receipt);
		
		
	});
	$('#food ul').children('li').bind('touchstart mousedown', function(e) {
		console.log($(this).attr('data-name'));
		receipt.push($(this).attr('data-name'));
		console.log(receipt);
	});
	
	$(document).ready(function () {
	$("#submit1").click(
		function () {
			console.log($( "#option1 option:selected" ).text());
			console.log($( "#option2 option:selected" ).text());
			console.log($( "#option3 option:selected" ).text());
            console.log($("input#slider-1").val());
			console.log($("input#slider-2").val());
			console.log($('#add1').val());
			
			receipt.push("Size:" + $( "#option1 option:selected" ).text());
			receipt.push("Milk:" + $( "#option2 option:selected" ).text());
			receipt.push("Syrup:" + $( "#option1 option:selected" ).text());
			receipt.push("Syrup Pumps:"+ $("input#slider-1").val());
			receipt.push("Espresso Shots:" + $("input#slider-2").val());
			receipt.push("Additional Comments:"+$('#add1').val());
			console.log(receipt);
			console.log("hi");
			console.log(receipt);
			for(var i=0;i<receipt.length; i++){
				$('#confirmPage').append("<b>"+receipt[i]+"</b>"+"<br>");
				$('#receipt').append("<b>"+receipt[i]+"</b>"+"<br>");
				console.log(receipt[i]);
				} 
		}            
    );
    });
	

	$(document).ready(function () {
	$("#submit2").click(
		function () {
			console.log($( "#option15 option:selected" ).text());
			console.log($( "#option16 option:selected" ).text());
			console.log($( "#option4 option:selected" ).text());
			console.log($( "#option5 option:selected" ).text());
            console.log($("input#slider-3").val());
			console.log($("input#slider-4").val());
            
			receipt.push("Size:"+$( "#option15 option:selected" ).text());
			receipt.push("Milk:"+$( "#option16 option:selected" ).text());
			receipt.push("Roast:"+$( "#option4 option:selected" ).text());
			receipt.push("Syrup:" +$( "#option5 option:selected" ).text());
			receipt.push("Syrup Pumps:" +$("input#slider-3").val());
			receipt.push("Espresso Shots:"+$("input#slider-4").val());
			
			console.log(receipt);
			
			for(var i=0;i<receipt.length; i++){
				$('#confirmPage').append("<b>"+receipt[i]+"</b>"+"<br>");
				$('#receipt').append("<b>"+receipt[i]+"</b>"+"<br>");
				console.log(receipt[i]);
				} 
		}
           
    );
    });
	$(document).ready(function () {
	$("#submit3").click(
		function () {
			console.log($("#option6 option:selected" ).text());
			console.log($("#option7 option:selected" ).text());
			console.log($( "#option8 option:selected" ).text());
            console.log($("input#slider-5").val());
			console.log("Additional Comments"+$('#add2').val());
              
			receipt.push("Size:"+ $( "#option6 option:selected" ).text());
			receipt.push("Milk:"+$( "#option7 option:selected" ).text());
			receipt.push("Syrup:" +$( "#option8 option:selected" ).text());			
			receipt.push("Syrup Pumps:" + $("input#slider-5").val());
			receipt.push("Additional Comments:"+$('#add2').val());
			
			console.log(receipt);
			
			for(var i=0;i<receipt.length; i++){
				$('#confirmPage').append("<b>"+receipt[i]+"</b>"+"<br>");
				$('#receipt').append("<b>"+receipt[i]+"</b>"+"<br>");
				console.log(receipt[i]);
				} 	
		}            
    );
    });
	$(document).ready(function () {
	$("#submit4").click(
		function () {
			console.log($("#option9 option:selected" ).text());
			console.log($("#option10 option:selected" ).text());
			console.log($("#option18 option:selected" ).text());
			console.log($('#add3').val());
              
			receipt.push("Size"+ $( "#option9 option:selected" ).text());
			receipt.push("Milk"+ $( "#option10 option:selected" ).text());
			receipt.push($("#option10 option:selected" ).text());
			receipt.push("Additional Comments:"+$('#add3').val());
			
			console.log(receipt);
			
			for(var i=0;i<receipt.length; i++){
				$('#confirmPage').append("<b>"+receipt[i]+"</b>"+"<br>");
				$('#receipt').append("<b>"+[i]+"</b>"+"<br>");
				console.log(receipt[i]);
				}
		}            
    );
    });
	
	$(document).ready(function () {
	$("#submit8").click(
		function () {
			console.log($("#option18 option:selected" ).text());
			console.log($('#add10').val());
              
			receipt.push("Size: "+ $("#option18 option:selected" ).text());
			receipt.push("Additional Comments: "+$('#add10').val());
			
			console.log(receipt);
			
			for(var i=0;i<receipt.length; i++){
				$('#confirmPage').append("<b>"+receipt[i]+"</b>"+"<br>");
				$('#receipt').append("<b>"+receipt[i]+"</b>"+"<br>");
				console.log(receipt[i]);
				}
		}            
    );
    });
	
	$(document).ready(function () {
	$("#submit5").click(
		function () {
			console.log($( "#option11 option:selected" ).text());
			console.log($( "#option12 option:selected" ).text());
			console.log($('#add4').val());
              
			receipt.push("Spread"+ $( "#option11 option:selected" ).text());
			receipt.push("Toasted"+ $( "#option12 option:selected" ).text());
			receipt.push("Additional Comments:"+$('#add4').val());
			
			console.log(receipt);
			for(var i=0;i<receipt.length; i++){
				$('#confirmPage').append("<b>"+receipt[i]+"</b>"+"<br>");
				$('#receipt').append("<b>"+receipt[i]+"</b>"+"<br>");
				console.log(receipt[i]);
				}
		}            
    );
    });
	$(document).ready(function () {
	$("#submit6").click(
		function () {
			console.log($("#option13 option:selected" ).text());
			console.log($( "#option14 option:selected" ).text());
			console.log($('#add5').val());
              
			receipt.push("Spread: "+ $( "#option13 option:selected" ).text());
			receipt.push("Toasted: "+ $( "#option14 option:selected" ).text());
			receipt.push("Additional Comments: "+$('#add5').val());
			console.log(receipt);
			for(var i=0;i<receipt.length; i++){
				$('#confirmPage').append("<b>"+receipt[i]+"<br>");
				$('#receipt').append("<b>"+receipt[i]+"</b>"+"<br>");
				console.log(receipt[i]);
				}

		}            
    );
    });
	$(document).ready(function () {
	$("#submit7").click(
		function () {
			console.log($('#fullname').val());
			console.log($("#option17 option:selected" ).text());
			receipt.push("Name:"+$('#fullname').val());
			receipt.push("Location:"+$( "#option16 option:selected" ).text());
			console.log(receipt);
			for(var i=0;i<receipt.length; i++){
				$('#confirmPage').append("</b>"+receipt[i]+"</b>"+"<br>");
				$('#receipt').append("<b>"+receipt[i]+"</b>"+"<br>");
				console.log(receipt[i]);
				}

		}            
    );
    });
	
	
