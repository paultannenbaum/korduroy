<?php
/*
Template Name: Featured Shows
*/
?>

<?php get_header(); ?>

<div id="body" class="shows-page shows-index">
  <?php
    global $_GET;

    echo $_GET['show-filter']
  ?>
</div>