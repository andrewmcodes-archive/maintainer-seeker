import Rails from '@rails/ujs'
import Turbolinks from 'turbolinks'

// Reference the new application.scss in your app / javascript / packs / application.js
import 'bootstrap'
import './stylesheets.scss'
import 'data-confirm-modal'

// Local files
import '../src/javascript/consumer'
import '../src/javascript/index'

require('@rails/activestorage').start()
require('local-time').start()

window.Rails = Rails

Rails.start()
Turbolinks.start()

$(document).on('turbolinks:load', () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
