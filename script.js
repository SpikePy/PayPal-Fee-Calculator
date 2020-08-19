// bmi = weight[kg] / size[m]²
fee_fix = 0.35
fee_var = 0.0249

function js_send() {
  input_fee.value     = parseFloat(input_send.value) * fee_var + fee_fix
  input_receive.value = parseFloat(input_send.value) - parseFloat(input_fee.value)
}

function js_receive() {
    input_fee.value  = parseFloat(input_receive.value) * fee_var + fee_fix
    input_send.value = parseFloat(input_receive.value) + parseFloat(input_fee.value)
}
