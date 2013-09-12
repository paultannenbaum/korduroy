jQuery ->
  
  KTV = KTV or {}

  KTV.newsletterSignup = do ->
    #private
    form = $('#newsletter-signup')
    spinner = null
    handleSubmit = (e) ->
      e.preventDefault()
  
      $.ajax({
        type: 'POST'
        data: {
          mc_submit_type: 'js'
          mcsf_action: 'mc_submit_signup_form'
          _mc_submit_signup_form_nonce: form.find('#_mc_submit_signup_form_nonce').val()
          mc_mv_EMAIL: form.find('.email').val()
          mc_signup_submit: 'Sign Up'
        }
        beforeSend: ->
          form.find('input[type="submit"]').attr('disabled','disabled');
          spinner = new Spinner().spin(form[0])
          return
        error: ->
          form.find('input[type="submit"]').removeAttr('disabled');
          spinner.stop()
          alertify.error("Bummer, our servers are having issues right now. Try again later.")
        success: (data) ->
          form.find('input[type="submit"]').removeAttr('disabled');
          spinner.stop()
          result = $(data)
  
          if result.hasClass('mc_success_msg')
            form.find('.email').val("")
            alertify.set({ delay: 3000 })
            alertify.success("Your all signed up. Yeeeew!");
          else
            errorText = result.html().replace("» ","")
            alertify.set({ delay: 10000 })
            alertify.error(errorText)
      })
  
    # public:
    init: ->
      form.on('submit', handleSubmit)

  KTV.newsletterSignup.init()