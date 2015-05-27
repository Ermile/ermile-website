function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')             // Trim - from end of text
    .replace(/=.*/, '');            
}

route('*', function() 
{
  hideFields();

  $(".fields-toggle", this).change(function () {
    var box = $("."+this.value);
    box.toggleClass('disappear');
  });
  $("#options-link", this).click(function () {
    console.log('clicked');
    $("#options-meta").toggleClass('disappear');
  });

  $(document).bind('ajaxSuccess', function(e, promise, xhr) {
    if(xhr.url === $('#delete-confirm [data-ajaxify]').prop('href')) {
      setTimeout(function() {
        Navigate({
          url: location.href,
          replace: true
        });
      }, 500);
    }
  });

  $('#delete-confirm').on('open', function(e, link) {
    var $this = $(this),
        $link = $(link);

    $this.find('a[data-ajaxify]').attr('href', $link.attr('href'))
         .copyData($this);
  });

  var $slug = $('#slug'),
      slug = $slug.get(0),
      handEdited = false;
  if($slug.length) {
    $('#title').keyup(function() {
      var sv = $slug.val();
      if(sv && handEdited) return;
      handEdited = false;
      $slug.val(slugify(this.value));
    });
    $slug.parents('form').submit(function() {
      if(!slug.value) slug.value = slugify($('#title').val());
    });
    $slug.keyup(function() {
      if(this.value) handEdited = true;
    });
  }

  var $options = $('#options-meta');

  if($options.length) {
    $options.find('input').change(function() {
      var data = $options.getData();
      $.ajax({
        url: location.protocol + '//' + location.hostname + 
             location.pathname.slice(0, location.pathname.lastIndexOf('/')+1) + 'options',
        type: 'post',
        data: data,
        dataType: 'json',
        cache: false
      });
    });
  }



  
  $('#tag-add').keypress(function(e)
  {
    // if Enter pressed disallow it and run add func
    if(e.which == 13) { addTag(); return false; }
  });
  $(document).on('click', '#tag-add-btn', function () { addTag(); });
  $(document).on('click', '#tag-list span i', function ()
  {
    var span = $(this).parent();
    $('#tags').val($('#tags').val().replace(span.text()+', ', ''));
    span.remove();
  });

  $(document).ready(function()
  {
    var tagDefault = $('#tags').val();
    if(tagDefault)
    {
      $.each(tagDefault.split(', '),function(t, item)
      {
        if(item.trim())
          $('#tag-list').append( "<span><i class='fa fa-times'></i>"+item+"</span>" );   
      });
    }
  });





});

function addTag()
{
  var tag = $('#tag-add');
  var tagVal = tag.val().trim();
  if(tagVal)
  {
    $('#tag-list').append( "<span><i class='fa fa-times'></i>"+tagVal+"</span>" );
    $('#tags').val( $('#tags').val() + tagVal+', ' );
  }
  tag.val('');  
}

function hideFields()
{
  $("input:checkbox", document).each(function()
  {
    if( !$(this).is(":checked") )
    {
      $("."+$(this).val()).addClass('disappear');
    }
  }
  );}
