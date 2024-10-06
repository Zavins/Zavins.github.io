const debounce = (func: (...args: any) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export default debounce
