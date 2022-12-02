const numen = (value: string | number) => {
  return String(value).replace(/[^\d]/g, '').length
}

export { numen }
