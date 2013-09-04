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
          spinner = new Spinner().spin(form[0])
          return
        error: ->
          spinner.stop()
          alertify.error("Bummer, our servers are having issues right now. Try again later.")
        success: (data) ->
          spinner.stop()
          result = $(data)
  
          if result.hasClass('mc_success_msg')
            form.find('.email').val("")
            alertify.success("Your all signed up. Yeeeew!");
          else
            errorText = result.html()
            alertify.set({ delay: 10000 })
            alertify.error(errorText)
      })
  
    # public:
    init: ->
      form.on('submit', handleSubmit)

  KTV.newsletterSignup.init()