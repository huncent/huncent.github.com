$(document).on("pageinit","#m-login-page", function() {
			//$("#list li").not( "[data-role='list-divider']" ).remove();
			$('input[type="submit"]').click(function(){
				var data = $("#loginForm").serializeArray();
				var url = $("#loginForm").attr("action");
				$.ajax({
					url:url,
					data:data,
					type:"POST",
					dataType:'JSON',
					success:function(d){
						if(d.statusCode=='200'){
							//window.location.href = d.redirect
							$.mobile.navigate(d.redirect, {
									   reloadPage: true
									});
						}else{
							
						}
					}
				});
				//console.log(data)
				return false;
			});
			
		});
$(document).on("pageinit", "#m-home-page",function() {
			$.ajax({
				url:'/mobile/orderCounts',
				dataType:'JSON',
				success:function(data){
					$.each(data, function(i, val) {
						$("." + i).html(val);
						});
				}
			})
		});
var receiveOrder = function(){
				
				var data = {};
				data.id = $("#receiveOrder").attr("data-id");
				var url = "/busiSubOrder/saveAndUpdate?operation=receive&isAll=0";
				$.ajax({
					url:url,
					data:data,
					type:"POST",
					dataType:'JSON',
					success:function(d){
						if(d.statusCode=='200'){
							//window.location.href = "/mobile/merOrderList?type=1&start=0&limit=15"
							$.mobile.changePage( "/mobile/merOrderList?type=1&start=0&limit=15", {
									   reloadPage: true
									});
						}else{
							
						}
					}
				});
				
				//alert(1)
				//window.location.href = "/mobile/merOrderList?type=1&start=0&limit=15"
				//console.log(data)
				return false;
			};