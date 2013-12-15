<?php
if ( ! function_exists('pmai_render_field')){
	
	function pmai_render_field($field, $post = array(), $field_name = ""){

		$current_field = $post['fields'][$field['key']];
		$current_is_multiple_field_value = $post['is_multiple_field_value'][$field['key']];
		$current_multiple_value = $post['multiple_value'][$field['key']];

		if ( "" != $field_name ){

			$field_keys = str_replace(array('[',']'), array(''), str_replace('][', ':', $field_name));
			
			foreach (explode(":", $field_keys) as $n => $key) {
				$current_field = (!$n) ? $post['fields'][$key] : $current_field[$key];
				$current_is_multiple_field_value = (!$n) ? $post['is_multiple_field_value'][$key] : $current_is_multiple_field_value[$key];
				$current_multiple_value = (!$n) ? $post['multiple_value'][$key] : $current_multiple_value[$key];
			}

			$current_field = $current_field[$field['key']];		
			$current_is_multiple_field_value = $current_is_multiple_field_value[$field['key']];
			$current_multiple_value = $current_multiple_value[$field['key']];
		}	

		?>
		
		<?php if ( ! in_array($field['type'], array('message')) ): ?>
		
		<div class="field field_type-<?php echo $field['type'];?> field_key-<?php echo $field['key'];?>">			
			<p class="label"><label><?php echo (in_array($field['type'], array('message', 'tab'))) ? $field['type'] : $field['label'];?></label></p>
			<div class="acf-input-wrap">
				<?php switch ($field['type']) {
					case 'user':
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name;?>[<?php echo $field['key'];?>]" class="text w95"/>
						<a href="#help" class="help" title="<?php _e('Specify the user ID, username, or user e-mail address. Separate multiple values with commas.'); ?>">?</a>
						<?php
						break;										
					case 'acf_cf7':
					case 'gravity_forms_field':					
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name;?>[<?php echo $field['key'];?>]" class="text w95"/>
						<a href="#help" class="help" title="<?php _e('Specify the form ID.'); ?>">?</a>
						<?php
						break;										
					case 'page_link':
					case 'post_object':											
					case 'relationship':
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name;?>[<?php echo $field['key'];?>]" class="text w95"/>
						<a href="#help" class="help" title="<?php _e('Enter in the ID, or IDs separated by commas.'); ?>">?</a>
						<?php
						break;										
					case 'file':
					case 'image':
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name;?>[<?php echo $field['key'];?>]" class="text w95"/>
						<a href="#help" class="help" title="<?php _e('Specify the URL to the image or file.'); ?>">?</a>
						<?php
						break;					
					case 'gallery':
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name;?>[<?php echo $field['key'];?>]" class="text w95"/>
						<a href="#help" class="help" title="<?php _e('Specify image URLs, separated by commas.'); ?>">?</a>
						<?php
						break;					
					case 'color_picker':					
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name;?>[<?php echo $field['key'];?>]" class="text w95"/>
						<a href="#help" class="help" title="<?php _e('Specify the hex code the color preceded with a # - e.g. #ea5f1a.'); ?>">?</a>
						<?php
						break;					
					case 'text':					
					case 'number':
					case 'email':
					case 'password':																										
					case 'limiter':
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name;?>[<?php echo $field['key'];?>]" class="text"/>
						<?php
						break;					
					case 'wp_wysiwyg':
					case 'wysiwyg':	
					case 'textarea':
						?>
						<textarea name="fields<?php echo $field_name;?>[<?php echo $field['key'];?>]"><?php echo $current_field;?></textarea>
						<?php
						break;				
					case 'date_picker':
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>]" class="text datepicker" style="width:200px;"/>
						<a href="#help" class="help" title="<?php _e('Use any format supported by the PHP strtotime function.'); ?>">?</a>
						<?php
						break;		
					case 'date_time_picker':
						?>
						<input type="text" placeholder="" value="<?php echo $current_field;?>" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>]" class="text datetimepicker" style="width:200px;"/>
						<a href="#help" class="help" title="<?php _e('Use any format supported by the PHP strtotime function.'); ?>">?</a>
						<?php
						break;			
					case 'google_map':
					case 'location-field':
						?>
						<div class="input">
							<label><?php _e("Address"); ?></label>
							<input type="text" placeholder="" value="<?php echo $current_field['address'];?>" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][address]" class="text"/>												
						</div>
						<div class="input">
							<label><?php _e("Lat"); ?></label>
							<input type="text" placeholder="" value="<?php echo $current_field['lat'];?>" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][lat]" class="text"/>												
						</div>
						<div class="input">
							<label><?php _e("Lng"); ?></label>
							<input type="text" placeholder="" value="<?php echo $current_field['lng'];?>" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][lng]" class="text"/>
						</div>
						<?php
						break;					
					case 'paypal_item':
						?>
						<div class="input">
							<label><?php _e("Item Name"); ?></label>
							<input type="text" placeholder="" value="<?php echo $current_field['item_name'];?>" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][item_name]" class="text"/>												
						</div>
						<div class="input">
							<label><?php _e("Item Description"); ?></label>
							<input type="text" placeholder="" value="<?php echo $current_field['item_description'];?>" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][item_description]" class="text"/>												
						</div>
						<div class="input">
							<label><?php _e("Price"); ?></label>
							<input type="text" placeholder="" value="<?php echo $current_field['price'];?>" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][price]" class="text"/>
						</div>
						<?php
						break;
					case 'select':
					case 'checkbox':
					case 'radio':
					case 'taxonomy':
					case 'true_false':															
						?>											
						<div class="input">
							<div class="main_choise">
								<input type="radio" id="is_multiple_field_value_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_yes" class="switcher" name="is_multiple_field_value<?php echo $field_name; ?>[<?php echo $field['key'];?>]" value="yes" <?php echo 'no' != $current_is_multiple_field_value ? 'checked="checked"': '' ?>/>
								<label for="is_multiple_field_value_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_yes" class="chooser_label"><?php _e("Select value for all records"); ?></label>
							</div>
							<div class="switcher-target-is_multiple_field_value_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_yes"  style="padding-left:17px;">
								<div class="input">
									<?php
									$field_class = 'acf_field_' . $field['type'];
									$new_field = new $field_class();

									$field['other_choice'] = false;
									$field['name'] = 'multiple_value'. $field_name .'[' . $field['key'] . ']';
									$field['value'] = $current_multiple_value;									

									$new_field->create_field( $field );
									?>
								</div>
							</div>
						</div>											
						<div class="clear"></div>
						<div class="input">
							<div class="main_choise">
								<input type="radio" id="is_multiple_field_value_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_no" class="switcher" name="is_multiple_field_value<?php echo $field_name; ?>[<?php echo $field['key'];?>]" value="no" <?php echo 'no' == $current_is_multiple_field_value ? 'checked="checked"': '' ?>/>
								<label for="is_multiple_field_value_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_no" class="chooser_label"><?php _e('Set with XPath', 'pmxi_plugin' )?></label>
							</div>
							<div class="switcher-target-is_multiple_field_value_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_no"  style="padding-left:17px;">
								<div class="input">
									<input type="text" class="smaller-text" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>]" style="width:300px;" value="<?php echo esc_attr($current_field) ?>"/>

									<?php
									
									if ($field['type']=='select' || $field['type']=='checkbox' || $field['type']=='radio') {
										?>
										<a href="#help" class="help" title="<?php _e('Specify the value. For multiple values, separate with commas. If the choices are of the format option : Option, option-2 : Option 2, use option and option-2 for values.', 'pmxi_plugin') ?>">?</a>
										<?php
									} else if ($field['type']=='taxonomy') {
										?>
										<a href="#help" class="help" title="<?php _e('Specify IDs, separated by commas.', 'pmxi_plugin') ?>">?</a>
										<?php										
									} else {
										?>
										<a href="#help" class="help" title="<?php _e('Specify 0 for false, 1 for true.', 'pmxi_plugin') ?>">?</a>
										<?php
									}

									?>

								</div>
							</div>
						</div>
						<?php
						break;										
					case 'repeater':

						?>
						<div class="repeater">
							<div class="input">
								<div class="main_choise">
									<div class="input">
										<input type="radio" id="is_variable_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_no" class="switcher variable_repeater_mode" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][is_variable]" value="no" <?php echo 'yes' != $current_field['is_variable'] ? 'checked="checked"': '' ?>/>
										<label for="is_variable_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_no" class="chooser_label"><?php _e('Fixed Repeater Mode', 'pmxi_plugin' )?></label>
									</div>
									<div class="input">
										<input type="radio" id="is_variable_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_yes" class="switcher variable_repeater_mode" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][is_variable]" value="yes" <?php echo 'yes' == $current_field['is_variable'] ? 'checked="checked"': '' ?>/>
										<label for="is_variable_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_yes" class="chooser_label"><?php _e('Variable Repeater Mode', 'pmxi_plugin' )?></label>
									</div>									
								</div>
								<div class="switcher-target-is_variable_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_yes"  style="padding-left:17px; clear:both;">
									<div class="input">
										<p>
											<?php printf(__("FOREACH %s do ..."), '<input type="text" name="fields' . $field_name . '[' . $field["key"] . '][foreach]" value="'. $current_field["foreach"] .'" class="pmai_foreach"/>'); ?>
											<a href="#help" class="help" title="<?php _e('Specified XPaths are relative to parent XPath - like a FOREACH loop.', 'pmxi_plugin') ?>">?</a>
										</p>
									</div>
								</div>
							</div>							
							<table class="widefat acf-input-table ">
								<thead>
									<tr>
										<td class="order">&nbsp;</td>
										<?php foreach ($field['sub_fields'] as $key => $sub_field):?>
										<td class="acf-th-test field_key-<?php echo $sub_field['key'];?>">
											<span><?php echo $sub_field['label'];?></span>
											<span class="sub-field-instructions"></span>
										</td>				
										<?php endforeach; ?>			
										
									</tr>
								</thead>
								<tbody class="ui-sortable">																		
									<?php 																													
									if (!empty($current_field['rows'])) : foreach ($current_field['rows'] as $key => $row): if ("ROWNUMBER" == $key) continue; ?>									
									<tr class="row">							
										<td class="order"><?php echo $key; ?></td>										
										<?php foreach ($field['sub_fields'] as $n => $sub_field):?>
										<td class="field sub_field field_type-<?php echo $sub_field['type'];?> field_key-<?php echo $sub_field['key'];?>">
											<div class="inner">
												<?php echo pmai_render_field($sub_field, $post, $field_name . "[" . $field['key'] . "][rows][" . $key . "]"); ?>
											</div>
										</td>
										<?php endforeach; ?>		
																
									</tr>
									<?php endforeach; endif; ?>															
									<tr class="row-clone">							
										<td class="order"></td>									
										<?php foreach ($field['sub_fields'] as $key => $sub_field):?>
										<td class="field sub_field field_type-<?php echo $sub_field['type'];?> field_key-<?php echo $sub_field['key'];?>">
											<div class="inner">
												<?php echo pmai_render_field($sub_field, $post, $field_name . "[" . $field['key'] . "][rows][ROWNUMBER]"); ?>
											</div>
										</td>
										<?php endforeach; ?>		
																		
									</tr>
								</tbody>
							</table>						
							<div class="switcher-target-is_variable_<?php echo str_replace(array('[',']'), '', $field_name);?>_<?php echo $field['key'];?>_no"  style="padding-left:17px;">
								<ul class="hl clearfix repeater-footer">
									<li class="right">
										<a href="javascript:void(0);" class="acf-button delete_row" style="margin-left:15px;">Delete Row</a>
									</li>
									<li class="right">
										<a class="add-row-end acf-button" href="javascript:void(0);"><?php _e("Add Row", "pmxi_plugin");?></a>									
									</li>								
								</ul>							
							</div>
						</div>
						<?php

						break;
					/*case 'flexible_content':
						?>
						<div class="acf-flexible-content">
							<div class="clones">
							<?php 
							
							foreach( $field['layouts'] as $i => $layout ){															

								// vars
								$order = is_numeric($i) ? ($i + 1) : 0;

								?>
								<div class="layout" data-layout="<?php echo $layout['name']; ?>">
											
									<div style="display:none">
										<input type="hidden" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][layouts][ROWNUMBER][acf_fc_layout]" value="<?php echo $layout['name']; ?>" />
									</div>									
										
									<div class="acf-fc-layout-handle">
										<span class="fc-layout-order"><?php echo $order; ?></span>. <?php echo $layout['label']; ?>
									</div>
									
									<table class="widefat acf-input-table <?php if( $layout['display'] == 'row' ): ?>row_layout<?php endif; ?>">
										<?php if( $layout['display'] == 'table' ): ?>
											<thead>
												<tr>
													<?php foreach( $layout['sub_fields'] as $sub_field_i => $sub_field): 
														
														// add width attr
														$attr = "";
														
														if( count($layout['sub_fields']) > 1 && isset($sub_field['column_width']) && $sub_field['column_width'] )
														{
															$attr = 'width="' . $sub_field['column_width'] . '%"';
														}
														
														// required
														$required_label = "";
														
														if( $sub_field['required'] )
														{
															$required_label = ' <span class="required">*</span>';
														}
														
														?>
														<td class="acf-th-<?php echo $sub_field['name']; ?> field_key-<?php echo $sub_field['key']; ?>" <?php echo $attr; ?>>
															<span><?php echo $sub_field['label'] . $required_label; ?></span>
															<?php if( isset($sub_field['instructions']) ): ?>
																<span class="sub-field-instructions"><?php echo $sub_field['instructions']; ?></span>
															<?php endif; ?>
														</td><?php
													endforeach; ?>
												</tr>
											</thead>
										<?php endif; ?>
										<tbody>
											<tr>
											<?php

											// layout: Row
											
											if( $layout['display'] == 'row' ): ?>
												<td class="acf_input-wrap">
													<table class="widefat acf_input">
											<?php endif; ?>
											
											
											<?php

											// loop though sub fields
											if( $layout['sub_fields'] ):
											foreach( $layout['sub_fields'] as $sub_field ): ?>
											
												<?php
												
												// attributes (can appear on tr or td depending on $field['layout'])
												$attributes = array(
													'class'				=> "field sub_field field_type-{$sub_field['type']} field_key-{$sub_field['key']}",
													'data-field_type'	=> $sub_field['type'],
													'data-field_key'	=> $sub_field['key'],
													'data-field_name'	=> $sub_field['name']
												);
												
												
												// required
												if( $sub_field['required'] )
												{
													$attributes['class'] .= ' required';
												}
												
												
												// value
												$sub_field['value'] = false;
												
												if( isset($value[ $sub_field['key'] ]) )
												{
													// this is a normal value
													$sub_field['value'] = $value[ $sub_field['key'] ];
												}
												elseif( !empty($sub_field['default_value']) )
												{
													// no value, but this sub field has a default value
													$sub_field['value'] = $sub_field['default_value'];
												}
												
												
												// add name
												$sub_field['name'] = $field['name'] . '[' . $i . '][' . $sub_field['key'] . ']';
												
												
												// clear ID (needed for sub fields to work!)
												unset( $sub_field['id'] );
												
												
												
												// layout: Row
												
												if( $layout['display'] == 'row' ): ?>
													<tr <?php pmai_join_attr( $attributes ); ?>>
														<td class="label">
															<label>
																<?php echo $sub_field['label']; ?>
																<?php if( $sub_field['required'] ): ?><span class="required">*</span><?php endif; ?>
															</label>
															<?php if( isset($sub_field['instructions']) ): ?>
																<span class="sub-field-instructions"><?php echo $sub_field['instructions']; ?></span>
															<?php endif; ?>
														</td>
												<?php endif; ?>
												
												<td <?php if( $layout['display'] != 'row' ){ pmai_join_attr( $attributes ); } ?>>
													<div class="inner">
													<?php
													
													// create field
													echo pmai_render_field($sub_field, $post, $field_name . "[" . $field['key'] . "][layouts][ROWNUMBER]");
													
													?>
													</div>
												</td>
												
												<?php
											
												// layout: Row
												
												if( $layout['display'] == 'row' ): ?>
													</tr>
												<?php endif; ?>
												
											
											<?php endforeach; ?>
											<?php endif; ?>
											<?php

											// layout: Row
											
											if( $layout['display'] == 'row' ): ?>
													</table>
												</td>
											<?php endif; ?>
																			
											</tr>
										</tbody>
										
									</table>
									
								</div>
								<?php
								
							}
							
							?>
							</div>
							<div class="values ui-sortable">
								<?php if (!empty($current_field['layouts'])) : foreach ($current_field['layouts'] as $key => $layout): if ("ROWNUMBER" == $key) continue; ?>								
								<div class="layout" data-layout="<?php echo $field['layouts'][$key]['name']; ?>">
									
									<div style="display:none">
										<input type="hidden" name="fields<?php echo $field_name; ?>[<?php echo $field['key'];?>][layouts][<?php echo $key;?>][acf_fc_layout]" value="<?php echo $layout['acf_fc_layout']; ?>" />
									</div>									
									<?php
										$current_layout = false;
										foreach ($field['layouts'] as $sub_lay){
											if ($sub_lay['name'] == $layout['acf_fc_layout']){
												$current_layout = $sub_lay;
												break;
											}
										}
									?>
									<div class="acf-fc-layout-handle">
										<span class="fc-layout-order"><?php echo $key; ?></span>. <?php echo $current_layout['label']; ?>
									</div>

									<table class="widefat acf-input-table <?php if( $current_layout['display'] == 'row' ): ?>row_layout<?php endif; ?>">
										<?php if( $current_layout['display'] == 'table' ): ?>
											<thead>
												<tr>
													<?php foreach( $current_layout['sub_fields'] as $sub_field_i => $sub_field): 
														
														// add width attr
														$attr = "";
														
														if( count($field['layouts'][$key - 1]['sub_fields']) > 1 && isset($sub_field['column_width']) && $sub_field['column_width'] )
														{
															$attr = 'width="' . $sub_field['column_width'] . '%"';
														}
														
														// required
														$required_label = "";
														
														if( $sub_field['required'] )
														{
															$required_label = ' <span class="required">*</span>';
														}
														
														?>
														<td class="acf-th-<?php echo $sub_field['name']; ?> field_key-<?php echo $sub_field['key']; ?>" <?php echo $attr; ?>>
															<span><?php echo $sub_field['label'] . $required_label; ?></span>
															<?php if( isset($sub_field['instructions']) ): ?>
																<span class="sub-field-instructions"><?php echo $sub_field['instructions']; ?></span>
															<?php endif; ?>
														</td><?php
													endforeach; ?>
												</tr>
											</thead>
										<?php endif; ?>
										<tbody>
											<tr>
											<?php

											// layout: Row
											
											if( $current_layout['display'] == 'row' ): ?>
												<td class="acf_input-wrap">
													<table class="widefat acf_input">
											<?php endif; ?>
											
											
											<?php

											// loop though sub fields
											if( $current_layout['sub_fields'] ):
											foreach( $current_layout['sub_fields'] as $sub_field ): ?>
											
												<?php
												
												// attributes (can appear on tr or td depending on $field['layout'])
												$attributes = array(
													'class'				=> "field sub_field field_type-{$sub_field['type']} field_key-{$sub_field['key']}",
													'data-field_type'	=> $sub_field['type'],
													'data-field_key'	=> $sub_field['key'],
													'data-field_name'	=> $sub_field['name']
												);
												
												
												// required
												if( $sub_field['required'] )
												{
													$attributes['class'] .= ' required';
												}
												
												
												// value
												$sub_field['value'] = false;
												
												if( isset($value[ $sub_field['key'] ]) )
												{
													// this is a normal value
													$sub_field['value'] = $value[ $sub_field['key'] ];
												}
												elseif( !empty($sub_field['default_value']) )
												{
													// no value, but this sub field has a default value
													$sub_field['value'] = $sub_field['default_value'];
												}
												
												
												// add name
												$sub_field['name'] = $field['name'] . '[' . $i . '][' . $sub_field['key'] . ']';
												
												
												// clear ID (needed for sub fields to work!)
												unset( $sub_field['id'] );
												
												
												
												// layout: Row
												
												if( $current_layout['display'] == 'row' ): ?>
													<tr <?php pmai_join_attr( $attributes ); ?>>
														<td class="label">
															<label>
																<?php echo $sub_field['label']; ?>
																<?php if( $sub_field['required'] ): ?><span class="required">*</span><?php endif; ?>
															</label>
															<?php if( isset($sub_field['instructions']) ): ?>
																<span class="sub-field-instructions"><?php echo $sub_field['instructions']; ?></span>
															<?php endif; ?>
														</td>
												<?php endif; ?>
												
												<td <?php if( $field['layouts'][$key - 1]['display'] != 'row' ){ pmai_join_attr( $attributes ); } ?>>
													<div class="inner">
													<?php
													
													// create field
													echo pmai_render_field($sub_field, $post, $field_name . "[" . $field['key'] . "][layouts][".$key."]");
													
													?>
													</div>
												</td>
												
												<?php
											
												// layout: Row
												
												if( $field['layouts'][$key - 1]['display'] == 'row' ): ?>
													</tr>
												<?php endif; ?>
												
											
											<?php endforeach; ?>
											<?php endif; ?>
											<?php

											// layout: Row
											
											if( $current_layout['display'] == 'row' ): ?>
													</table>
												</td>
											<?php endif; ?>
																			
											</tr>
										</tbody>
										
									</table>
									
								</div>								
								<?php endforeach; endif; ?>
							</div>
							<div class="add_layout">
								<select>
									<option selected="selected">Select Layout</option>
									<?php foreach ($field['layouts'] as $key => $layout) {
										?>
										<option value="<?php echo $layout['name'];?>"><?php echo $layout['label'];?></option>
										<?php
									}?>
								</select>
								<a href="javascript:void(0);" class="acf-button delete_layout" style="width:85px;float:right;">Delete Layout</a>
							</div>
						</div>
						<?php
						break;*/
					case 'message':

						break;
					default:
						?>
						<p>This field type is not supported. E-mail support@soflyy.com with the details of the custom ACF field you are trying to import to, as well as a link to download the plugin to install to add this field type to ACF, and we will investigate the possiblity ot including support for it in the ACF add-on.</p>
						<?php
						break;
				}
				?>									
			</div>			
		</div>
		<?php endif; 		
	}
}
?>