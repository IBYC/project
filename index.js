//图片的轮播
var index = 0;
function changeImg() {
	var img = document.getElementById("img1"); 	
	var curIndex = index % 5 + 1;  //0,1,2,3,4实现了循环
	img.src = "img/" + curIndex + ".jpg";  //1,2,3,4,5
	index = index + 1;	//每切换完,索引加1
}

function on() {
	setInterval("changeImg()", 3000);


	//侧边广告的消失与显示
	// var tankuang=document.getElementById('tankuang');
	// var adv = document.getElementById('adv');
	// tankuang.onclick=function(){
	// 	tankuang.style.display='none';
	// 	adv.style.display='block';
	// }
	// adv.onclick=function(){
	// 	tankuang.style.display='block';
	// 	adv.style.display='none';
	// }

	$("#tankuang").click(function(){
		$(this).fadeOut();
		$("#adv").fadeIn();
	})
	$("#adv").click(function(){
		$(this).fadeOut();
		$("#tankuang").fadeIn();
	})





	//左侧导航栏背景颜色切换控制
	var navigation = document.getElementById('navigation');
	var navigationChildren = navigation.children;
	var bgcolor = '';
	var wordcolor='';
	for (var i = 0; i < navigationChildren.length; i++) {
		navigationChildren[i].onmouseover = function () {
			bgcolor = this.style.backgroundColor;
			this.style.backgroundColor = '#2577e3';

			wordcolor= this.style.color;
			this.style.color='#F6F6F6';
		}
		navigationChildren[i].onmouseout = function () {
			this.style.backgroundColor = bgcolor;
			this.style.color=wordcolor;
		}
		navigationChildren[i].onclick = function () {             //点击到每一个子元素的时候都让所有元素的背景和字体颜色一致，
			for (var j = 0; j < navigationChildren.length; j++) { //然后再单独设置这个元素。
				navigationChildren[j].style.backgroundColor = '';  
				navigationChildren[j].style.color = '#2577e3'
			}
			this.style.backgroundColor = '#2577e3';
			bgcolor=this.style.backgroundColor;
			this.style.color = 'white';
			wordcolor=this.style.color;

		}
	}






	//line1背景颜色切换控制
	var nav = document.getElementById('nav');
	var navChildren = nav.children;
	var color = '';
	for (var i = 0; i < navChildren.length; i++) {
		navChildren[i].onmouseover = function () {
			color = this.style.backgroundColor;
			this.style.backgroundColor = '#0a56bb'
		}
		navChildren[i].onmouseout = function () {
			this.style.backgroundColor = color;
		}
		
		navChildren[i].onclick = function () {
			for (var j = 0; j < navChildren.length; j++) {
				navChildren[j].style.backgroundColor = '#2577e3'
			}
			this.style.backgroundColor = '#0a56bb';
			color = this.style.backgroundColor;
		}
	}


	//table1背景颜色切换控制
	var nav1 = document.getElementById('table1_ul');
	var nav1Children = nav1.children;
	var color = '';
	var color1='';
	for (var i = 0; i < nav1Children.length; i++) {
		nav1Children[i].onmouseover = function () {
			color = this.style.backgroundColor;
			this.style.backgroundColor = 'white'

			color1= this.style.color;
			this.style.color='#2577e3'
		}
		nav1Children[i].onmouseout = function () {
			this.style.backgroundColor = color
			this.style.color=color1;
		}
		nav1Children[i].onclick = function () {
			for (var j = 0; j < nav1Children.length; j++) {
				nav1Children[j].style.backgroundColor = '#2577e3'
				nav1Children[j].style.color = 'white'
			}
			this.style.backgroundColor = 'white';
			color = this.style.backgroundColor;
			this.style.color = '#2577e3'
			color1=this.style.color;
		}
	}


	//table1中的小滑动小箭头
	var tabBar = document.getElementById('tabBar');
	var tabBarChildren = tabBar.children;
	var tabBarcolor = '';
	for (var i = 0; i < tabBarChildren.length; i++) {
		tabBarChildren[i].onmouseover = function () {
			tabBarcolor = this.style.color;
			this.style.color = '#3983e5'
		}
		tabBarChildren[i].onmouseout = function () {
			this.style.color = tabBarcolor
		}
		tabBarChildren[i].onclick = function () {
			for (var j = 0; j < tabBarChildren.length; j++) {
				tabBarChildren[j].style.color = 'gray';
				tabBarChildren[j].children[0].style.display = 'none';
				tabBarChildren[j].children[1].style.display = 'none';
			}
			this.style.color = '#3983e5';
			tabBarcolor = this.style.color;
			this.children[0].style.display = 'block';
			this.children[1].style.display = 'block';
		}
	}


	//模块4中小箭头滑动 和 div模块的切换
	var tabBar1 = document.getElementById('ad4_1');
	var tabBar1Children = tabBar1.children;

	var box1 = document.getElementById('father4');
	var box1Children =box1.children;

	var tabBar1color = '';
	for (let i = 0; i < tabBar1Children.length; i++) {
		tabBar1Children[i].onmouseover = function () {
			tabBar1color = this.style.color;
			this.style.color = '#3983e5'
		}
		tabBar1Children[i].onmouseout = function () {
			this.style.color = tabBar1color;
		}

		tabBar1Children[i].onclick = function () {
			for (var j = 0; j < tabBar1Children.length; j++) {
				tabBar1Children[j].style.color = '#484848';
				tabBar1Children[j].children[0].style.display = 'none';
				
			}
			this.style.color = '#3983e5';
			tabBar1color = this.style.color;
			this.children[0].style.display = 'block';
			
			for (var x = 0; x < box1Children.length; x++) {
				box1Children[x].style.display="none";
			}
			box1Children[i].style.display="block";
		}
	}
	//模块4中背景颜色切换控制
	var nav4 = document.getElementById('ad4_3_1_ul');
	var nav4Children = nav4.children;
	var color = '';
	var color1='';
	for (var i = 0; i < nav4Children.length; i++) {
		nav4Children[i].onmouseover = function () {
			color = this.style.backgroundColor;
			this.style.backgroundColor = '#2577e3'

			color1= this.style.color;
			this.style.color='white'
		}
		nav4Children[i].onmouseout = function () {
			this.style.backgroundColor = color
			this.style.color=color1;
		}
		nav4Children[i].onclick = function () {
			for (var j = 0; j < nav4Children.length; j++) {
				nav4Children[j].style.backgroundColor = 'white'
				nav4Children[j].style.color = '#2577e3'
			}
			this.style.backgroundColor = '#2577e3'
			color = this.style.backgroundColor;

			this.style.color ='white'; 
			color1=this.style.color;

		}
	}


	//模块5中小箭头滑动
	var tabBar5 = document.getElementById('ad5_1');
	var tabBar5Children = tabBar5.children;
	var tabBar5color = '';
	for (var i = 0; i < tabBar5Children.length; i++) {
		tabBar5Children[i].onmouseover = function () {
			tabBar5color = this.style.color;
			this.style.color = '#3983e5'
		}
		tabBar5Children[i].onmouseout = function () {
			this.style.color = tabBar5color;
		}
		tabBar5Children[i].onclick = function () {
			for (var j = 0; j < tabBar5Children.length; j++) {
				tabBar5Children[j].style.color = '#484848';
				tabBar5Children[j].children[0].style.display = 'none';
			}
			this.style.color = '#3983e5';
			tabBar5color = this.style.color;
			this.children[0].style.display = 'block';
		}
	}
	//模块5中背景颜色切换控制
	var nav5 = document.getElementById('ad5_2_1_1_ul');
	var nav5Children = nav5.children;
	var color = '';
	var color1='';
	for (var i = 0; i < nav5Children.length; i++) {
		nav5Children[i].onmouseover = function () {
			color = this.style.backgroundColor;
			this.style.backgroundColor = '#2577e3'

			color1= this.style.color;
			this.style.color='white'
		}
		nav5Children[i].onmouseout = function () {
			this.style.backgroundColor = color
			this.style.color=color1;
		}
		nav5Children[i].onclick = function () {
			for (var j = 0; j < nav5Children.length; j++) {
				nav5Children[j].style.backgroundColor = 'white'
				nav5Children[j].style.color = '#2577e3'
			}
			this.style.backgroundColor = '#2577e3'
			color = this.style.backgroundColor;

			this.style.color ='white'; 
			color1=this.style.color;
		}
	}



	//模块6中小箭头滑动 和 div模块的切换
	var tabBar6 = document.getElementById('ad6_1');
	var tabBar6Children = tabBar6.children;

	var box6 = document.getElementById('father6');
	var box6Children =box6.children;

	var tabBar6color = '';
	for (let i = 0; i < tabBar6Children.length; i++) {
		tabBar6Children[i].onmouseover = function () {
			tabBar6color = this.style.color;
			this.style.color = '#3983e5'
		}
		tabBar6Children[i].onmouseout = function () {
			this.style.color = tabBar6color;
		}

		tabBar6Children[i].onclick = function () {
			for (var j = 0; j < tabBar6Children.length; j++) {
				tabBar6Children[j].style.color = '#484848';
				tabBar6Children[j].children[0].style.display = 'none';
			}
			this.style.color = '#3983e5';
			tabBar6color = this.style.color;
			this.children[0].style.display = 'block';
			
			for (var x = 0; x < box6Children.length; x++) {
				box6Children[x].style.display="none";
			}
			box6Children[i].style.display="block";
		}
	}
	//模块6中背景颜色切换控制
	var nav6 = document.getElementById('ad6_3_1_ul');
	var nav6Children = nav6.children;
	var color = '';
	var color1='';
	for (var i = 0; i < nav6Children.length; i++) {
		nav6Children[i].onmouseover = function () {
			color = this.style.backgroundColor;
			this.style.backgroundColor = '#2577e3'

			color1= this.style.color;
			this.style.color='white'
		}
		nav6Children[i].onmouseout = function () {
			this.style.backgroundColor = color
			this.style.color=color1;
		}
		nav6Children[i].onclick = function () {
			for (var j = 0; j < nav6Children.length; j++) {
				nav6Children[j].style.backgroundColor = 'white'
				nav6Children[j].style.color = '#2577e3'
			}
			this.style.backgroundColor = '#2577e3'
			color = this.style.backgroundColor;

			this.style.color ='white'; 
			color1=this.style.color;

		}
	}

	//模块7中小箭头滑动
	var tabBar7 = document.getElementById('ad7_1');
	var tabBar7Children = tabBar7.children;
	var tabBar7color = '';
	for (var i = 0; i < tabBar7Children.length; i++) {
		tabBar7Children[i].onmouseover = function () {
			tabBar7color = this.style.color;
			this.style.color = '#3983e5'
		}
		tabBar7Children[i].onmouseout = function () {
			this.style.color = tabBar7color;
		}
		tabBar7Children[i].onclick = function () {
			for (var j = 0; j < tabBar7Children.length; j++) {
				tabBar7Children[j].style.color = '#484848';
				tabBar7Children[j].children[0].style.display = 'none';
			}
			this.style.color = '#3983e5';
			tabBar7color = this.style.color;
			this.children[0].style.display = 'block';
		}
	}
	//模块7中背景颜色切换控制
	var nav7 = document.getElementById('ad7_2_1_1_ul');
	var nav7Children = nav7.children;
	var color = '';
	var color1='';
	for (var i = 0; i < nav7Children.length; i++) {
		nav7Children[i].onmouseover = function () {
			color = this.style.backgroundColor;
			this.style.backgroundColor = '#2577e3'

			color1= this.style.color;
			this.style.color='white'
		}
		nav7Children[i].onmouseout = function () {
			this.style.backgroundColor = color
			this.style.color=color1;
		}
		nav7Children[i].onclick = function () {
			for (var j = 0; j < nav7Children.length; j++) {
				nav7Children[j].style.backgroundColor = 'white'
				nav7Children[j].style.color = '#2577e3'
			}
			this.style.backgroundColor = '#2577e3'
			color = this.style.backgroundColor;

			this.style.color ='white'; 
			color1=this.style.color;
		}
	}


	//模块8中小箭头滑动
	var tabBar8 = document.getElementById('ad8_1');
	var tabBar8Children = tabBar8.children;
	var tabBar8color = '';
	for (var i = 0; i < tabBar8Children.length; i++) {
		tabBar8Children[i].onmouseover = function () {
			tabBar8color = this.style.color;
			this.style.color = '#3983e5'
		}
		tabBar8Children[i].onmouseout = function () {
			this.style.color = tabBar8color;
		}
		tabBar8Children[i].onclick = function () {
			for (var j = 0; j < tabBar8Children.length; j++) {
				tabBar8Children[j].style.color = '#484848';
				tabBar8Children[j].children[0].style.display = 'none';
			}
			this.style.color = '#3983e5';
			tabBar8color = this.style.color;
			this.children[0].style.display = 'block';
		}
	}
	//模块8中背景颜色切换控制
	var nav8 = document.getElementById('ad8_2_1_1_ul');
	var nav8Children = nav8.children;
	var color = '';
	var color1='';
	for (var i = 0; i < nav8Children.length; i++) {
		nav8Children[i].onmouseover = function () {
			color = this.style.backgroundColor;
			this.style.backgroundColor = '#2577e3'

			color1= this.style.color;
			this.style.color='white'
		}
		nav8Children[i].onmouseout = function () {
			this.style.backgroundColor = color
			this.style.color=color1;
		}
		nav8Children[i].onclick = function () {
			for (var j = 0; j < nav8Children.length; j++) {
				nav8Children[j].style.backgroundColor = 'white'
				nav8Children[j].style.color = '#2577e3'
			}
			this.style.backgroundColor = '#2577e3'
			color = this.style.backgroundColor;

			this.style.color ='white'; 
			color1=this.style.color;
		}
	}



	


}



