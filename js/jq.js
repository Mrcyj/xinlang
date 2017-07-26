function fnTab(obj,even){
		var oBox=document.getElementsByClassName(obj);
		var aInp=$(".tab_title li div");
		var oUL=$(".smList>ul");
		for(var i=0;i<aInp.length;i++){
			aInp[i].index=i;
			aInp[i][even]=function(){
				for(var i=0;i<aInp.length;i++){
					aInp[i].className='';
					oUL[i].className='hide';
				}	
				this.className='active';
				oUL[this.index].className='show';	
			};	
		}
	}
function fnTab1(obj,even){
		var oBox=document.getElementsByClassName(obj);
		var aInp=$(".day a");
		var oUL=$(".tabs .tabs_item");
		for(var i=0;i<aInp.length;i++){
			aInp[i].index=i;
			aInp[i][even]=function(){
				for(var i=0;i<aInp.length;i++){
					aInp[i].className='';
					oUL[i].className='hide';
				}
				this.className='active';
				oUL[this.index].className='show';	
			};	
		}
	}

function fnTab2(obj,obj1){
		var aDiv = $(obj);
		var aUl = $(obj1);
		aDiv.each(function(e,k){
		
			$(this).click(function(){
				for(var i=0;i<aUl.length;i++){
					aDiv.removeClass("active");
					aUl.addClass("hide");
				}
				$(this).addClass("active");
				aUl.eq(e).removeClass("hide");
				aUl.eq(e).addClass("show");
			})
			
		})
	}
		fnTab2(".ul2>li",".ul1")
		fnTab2(".ul3>li",".ul4")
		fnTab2(".ul5>li",".ul6")
		fnTab2(".ul7>span",".ul8")
		fnTab2(".ul71>span",".ul81")
		fnTab2(".ol1>li",".ol2")
		fnTab2(".ol3>li",".ol4")
		fnTab2(".ol5>li",".ol6")
		fnTab2(".ol7>li",".ol8")
		fnTab2(".ol8>li",".ol10")
		fnTab2(".o1>li",".o2")
		fnTab2(".o3>li",".o4")