(function(a){var b=a("#contact-form");var c=a(".form-message");a(b).submit(function(d){d.preventDefault();var f=b.serialize();a.ajax({type:"POST",url:b.attr("action"),data:f}).done(function(e){a(c).removeClass("alert alert-danger");a(c).addClass("alert alert-success fade show");c.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");c.append(e);a("#contact-form input,#contact-form textarea").val("")}).fail(function(e){a(c).removeClass("alert alert-success");a(c).addClass("alert alert-danger fade show");if(e.responseText===""){c.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");c.append(e.responseText)}else{a(c).text("Oops! An error occurred and your message could not be sent.")}})})})(jQuery);