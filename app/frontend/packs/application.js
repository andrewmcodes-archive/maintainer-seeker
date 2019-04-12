import Rails from '@rails/ujs'
import Turbolinks from 'turbolinks'

import './stylesheets.scss'
import 'data-confirm-modal'

// Stimulus
import "controllers"

// Local files
import '../src/javascript/consumer'
import '../src/javascript/index'
import '../src/stylesheets/tailwind.scss'
require('@rails/activestorage').start()
require('local-time').start()

window.Rails = Rails

Rails.start()
Turbolinks.start()
