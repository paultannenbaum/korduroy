/**
 * plugin admin area javascript
 */
(function($){$(function () {
	
	if ( ! $('body.pmxi_plugin').length) return; // do not execute any code if we are not on plugin page

	var pmai_repeater_clone = function($parent){
		
		var $clone = $parent.find('tbody:first').children('.row-clone:first').clone();
		var $number = parseInt($parent.find('tbody:first').children().length);		

		$clone.removeClass('row-clone').addClass('row').find('td.order').html($number);
		$clone.find('.switcher').each(function(){
			$(this).attr({'id':$(this).attr('id').replace('ROWNUMBER', $number)});
		});
		$clone.find('.chooser_label').each(function(){
			$(this).attr({'for':$(this).attr('for').replace('ROWNUMBER', $number)});
		});
		$clone.find('div[class^=switcher-target]').each(function(){
			$(this).attr({'class':$(this).attr('class').replace('ROWNUMBER', $number)});
		});
		$clone.find('input, select, textarea').each(function(){
			$(this).attr({'name':$(this).attr('name').replace('ROWNUMBER', $number)});
		});
		
		$parent.find('.acf-input-table:first').find('tbody:first').append($clone);

	};

	$('form.options:visible').find('.repeater').find('.add-row-end').live('click', function(){

		var $parent = $(this).parents('.repeater:first');
		
		pmai_repeater_clone($parent);

	});
	
	$('.add_layout select').live('click', function(){

		if ($(this).val() == "") return;

		var $parent = $(this).parents('.acf-flexible-content:first');
		var $clone = $parent.children('.clones:first').children('div.layout[data-layout = ' + $(this).val() + ']').clone();
		
		var $number = parseInt($parent.children('.values:first').children().length) + 1;	

		$clone.find('.fc-layout-order:first').html($number);

		$clone.find('.switcher').each(function(){
			$(this).attr({'id':$(this).attr('id').replace('ROWNUMBER', $number)});
		});
		$clone.find('.chooser_label').each(function(){
			$(this).attr({'for':$(this).attr('for').replace('ROWNUMBER', $number)});
		});
		$clone.find('div[class^=switcher-target]').each(function(){
			$(this).attr({'class':$(this).attr('class').replace('ROWNUMBER', $number)});
		});
		$clone.find('input, select, textarea').each(function(){
			$(this).attr({'name':$(this).attr('name').replace('ROWNUMBER', $number)});
		});

		$parent.find('.values:first').append($clone);

	});

	$('.delete_layout').live('click', function(){

		var $parent = $(this).parents('.acf-flexible-content:first');

		$parent.children('.values:first').children(':last').remove();

	});

	$('.delete_row').live('click', function(){

		var $parent = $(this).parents('.repeater:first');
		
		$parent.find('tbody:first').children('.row:last').remove();

	});

	var pmai_get_acf_group = function(ths){

		var request = {
			action:'get_acf',			
			acf: ths.attr('rel')
	    };

	    var $ths = ths.parents('.pmai_options:first');

	    $ths.find('.acf_groups').prepend('<div class="pmai_preloader"></div>');

	    $('.pmai_acf_group').attr('disabled', 'disabled');

		$.ajax({
			type: 'POST',
			url: ajaxurl,
			data: request,
			success: function(response) {
				$('.pmai_acf_group').removeAttr('disabled');
				$ths.find('.pmai_preloader').remove();						
				$ths.find('.acf_groups').prepend(response.html);
				pmai_init();
				// swither show/hide logic
				$ths.find('.acf_groups').find('input.switcher').change();
			},
			dataType: "json"
		});
	}

	var pmai_reset_acf_groups = function(){
		
		$('.pmai_options').find('.acf_signle_group').remove();

		$('.pmai_options:visible').find('.pmai_acf_group:checked').each(function(){
			
			pmai_get_acf_group($(this));

		});
	}

	pmai_reset_acf_groups();

	$('.pmxi_plugin').find('.nav-tab').click(function(){
		
		pmai_reset_acf_groups();

	});

	$('.pmai_acf_group').live('change', function(){

		var acf = $(this).attr('rel');

		if ($(this).is(':checked')){

			// if requsted ACF group doesn't exists
			if ( ! $(this).parents('.pmai_options:first').find('.acf_signle_group[rel=' + acf + ']').length){

				pmai_get_acf_group($(this));
			}	
		}
		else{ 
			if (confirm("Confirm removal?")) 
				$(this).parents('.pmai_options:first').find('.acf_signle_group[rel=' + acf + ']').remove();
			else 
				$(this).attr('checked','checked');
		}

	});	

	function pmai_init(){
		$('input.datetimepicker').datetimepicker({
			dateFormat: 'dd/mm/yy',
			timeFormat: 'hh:mm TT',
			ampm: true
		});	
		$('input.datepicker').datepicker();		
	}

	$('.variable_repeater_mode').live('change', function(){
		// if variable mode
		if ($(this).is(':checked') && $(this).val() == 'yes'){
			var $parent = $(this).parents('.repeater:first');
			$parent.find('tbody:first').children('.row:not(:first)').remove();
			if ( ! $parent.find('tbody:first').children('.row').length) pmai_repeater_clone($parent);
		}
	});

});})(jQuery);
