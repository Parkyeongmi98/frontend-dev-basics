var TabBox = {
	_onTabClicked: function() {
		$('.tab-box li.selected').removeClass("selected");
		$(this).addClass("selected");	
	},
	_initialize: function() {		
		$('.tab-box li').click(TabBox._onTabClicked);
	},
	init: function() {
		//$(function() {
		//	$('.tab-box li').click(this.onTabClicked);
		//}.bind(this));
		$(TabBox._initialize);
	}
}