fee_fix = 0.35
fee_var = 0.0249

function js_send() {
  input_fee.value     = Math.round((parseFloat(input_send.value) * fee_var + fee_fix) * 100)/100
  input_receive.value = Math.round((parseFloat(input_send.value) - parseFloat(input_fee.value)) *100)/100
}

function js_receive() {
    input_fee.value  = Math.round((parseFloat(input_receive.value) * fee_var + fee_fix) * 100)/100
    input_send.value = Math.round((parseFloat(input_receive.value) + parseFloat(input_fee.value)) * 100)/100
}
