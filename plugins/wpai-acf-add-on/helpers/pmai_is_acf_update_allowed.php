<?php

function pmai_is_acf_update_allowed( $cur_meta_key, $options ){

	if ($options['update_acf_logic'] == 'full_update') return true;
	
	// Update only these ACF, leave the rest alone
	if ($options['update_all_data'] == 'no' and $options['is_update_acf'] and $options['update_acf_logic'] == 'only'){
		
		if (! empty($options['acf_list']) and is_array($options['acf_list'])){
			foreach ($options['acf_list'] as $key => $acf_field) {
				$field_name = trim(array_shift(explode(" ", $acf_field)), "[]");
				if ( strpos($cur_meta_key, $field_name) === 0 or strpos($cur_meta_key, "_" . $field_name) === 0 ){
					return true;
					break;
				}
			}
			return false;
		}					

	}

	// Leave these ACF alone, update all other ACF
	if ($options['update_all_data'] == 'no' and $options['is_update_acf'] and $options['update_acf_logic'] == 'all_except'){
		
		if (! empty($options['acf_list']) and is_array($options['acf_list'])){
			foreach ($options['acf_list'] as $key => $acf_field) {
				$field_name = trim(array_shift(explode(" ", $acf_field)), "[]");
				if ( strpos($cur_meta_key, $field_name) === 0 or strpos($cur_meta_key, "_" . $field_name) === 0 ){
					return false;
					break;
				}
			}
		}		
	}

	return true;		
}

?>