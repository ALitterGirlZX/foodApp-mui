window.onload = function(){  
    mui('#offCanvasSideScroll').scroll();    
    mui('#offCanvasContentScroll').scroll(); 
	$("#left-menu").on('tap', function (event) {
	    mui('.mui-off-canvas-wrap').offCanvas('show');  
	});  
	mui(".girdList").on('tap','li',function(){
		var name = this.getAttribute("id");
		//打开详情
		mui.openWindow({
			id:'detail',
			url:"detail.html?"+name
		});
	})
	 mui(".menu").on('tap','li',function(){
		var name = this.getAttribute("id");
	 	if(name == "caidan"){
			mui.openWindow({
				id:'detail',
				url:"list.html"
			});
		}else if(name == "dingdan"){
			mui.openWindow({
				id:'detail',
				url:"dingdan.html"
			});
		}else if(name == "kefu"){
			mui.openWindow({
				id:'detail',
				url:"kefu.html"
			});
		}else if(name == "gongying"){
			mui.openWindow({
				id:'detail',
				url:"gongying.html"
			});
		}else if(name == "shezhi"){
			mui.openWindow({
				id:'detail',
				url:"shezhi.html"
			});
		}else if(name == "geren"){
			mui.openWindow({
				id:'detail',
				url:"geren.html"
			});
		}
	 }) 
	 mui("#header").on('tap','img',function(){
	 	mui.openWindow({
	 		id:'detail',
	 		url:"cart.html"
	 	});
	 })
}
