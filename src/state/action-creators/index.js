export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    })
  }
}

export const withdrayMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'WITHDRAW',
      payload: amount,
    })
  }
}
