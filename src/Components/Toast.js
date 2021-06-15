import toastr from 'toastr'

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
}

export function showMessage(title, message, type) {
  toastr[type](message, title)
}

export function messageError(message) {
  let msg = String(message).split(':')
  showMessage('Erro', msg[1], 'error')
}

export function messageSuccess(message) {
  showMessage('Sucesso', message, 'success')
}

export function messageAlert(message) {
  showMessage('Alerta', message, 'warning')
}
