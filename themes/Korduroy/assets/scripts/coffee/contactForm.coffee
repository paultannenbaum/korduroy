jQuery ->

  KTV = KTV or {}

  KTV.contactForm = do ->
    #private
    el = $('.contact-form-link')
    form = $('#simple-contact-form')

    # public:
    init: ->
      # TODO: Should do some basic validation before submitting
      form.attr('action','') #remove action attribute from from

      el.magnificPopup({
        items: {
          src: '#contact-form'
          type: 'inline'
          focus: '#scf_name'
          closeBtnInside: true
        }
      })

  KTV.contactForm.init()



