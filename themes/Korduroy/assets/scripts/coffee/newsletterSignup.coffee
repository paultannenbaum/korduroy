KTV = KTV || {}

KTV.newsletterSignup = do ->
  module = this

  #private
  setScope = ->
    module.el = $('#newsletter-signup')
    return

  ajaxSubmit = (e) ->
    e.preventDefault()

    $.ajax({
      type: 'POST'
      data: {
        mc_submit_type: 'js'
        mcsf_action: 'mc_submit_signup_form'
        _mc_submit_signup_form_nonce: module.el.find('#_mc_submit_signup_form_nonce').val()
        mc_mv_EMAIL: module.el.find('.email').val()
        mc_signup_submit: 'Sign Up'
      }
      beforeSend: ->
        module.spinner = new Spinner().spin(module.el[0])
        return

      error: ->
        module.spinner.stop()
        alertify.error("Bummer, our servers are having issues right now. Try again later.")

      success: (data) ->
        module.spinner.stop()

        result = $(data)
        if result.hasClass('mc_success_msg')
          module.el.find('.email').val("")
          alertify.success("Your all signed up. Yeeeew!");
        else
          errorText = result.html()
          alertify.set({ delay: 10000 })
          alertify.error(errorText)
    })

  # public
  init: ->
    setScope()
    module.el.on('submit', ajaxSubmit)

jQuery ->
  KTV.newsletterSignup.init()





