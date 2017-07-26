

			function qx() {
				var inp = $(".list_item_box .list_item input");
				for(var i = 0; i < inp.length; i++) {
					if(inp[i].checked == false) {
						inp[i].checked = true;
					}
				}
			}

			function qbx() {
				var inp = $(".list_item_box .list_item input");
				for(var i = 0; i < inp.length; i++) {
					if(inp[i].checked == true) {
						inp[i].checked = false;
					}
				}
			}

			function fx() {
				var inp = $(".list_item_box .list_item input");
				for(var i = 0; i < inp.length; i++) {
					if(inp[i].checked) {
						inp[i].checked = false;
					} else {
						inp[i].checked = true;

					}
				}
			}
			$(".Select").click(function() {
				qx();
			})
			$(".Totally-optional").click(function() {
				qbx();
			})
			$(".Reverse-selection").click(function() {
				fx();
			})

			$(".leftNav li").hover(function() {
				$(this).find(".showList").show().parent().siblings().find(".showList").hide();
			}, function() {
				$(this).find(".showList").hide();
			})

			$(".leftNav_right li").hover(function() {
				$(this).find(".showList").show().parent().siblings().find(".showList").hide();
			}, function() {
				$(this).find(".showList").hide();
			})
		
