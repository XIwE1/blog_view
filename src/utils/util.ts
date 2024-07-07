// 防抖函数
export function debounce(fn: Function, delay: number): Function {
  let timer: NodeJS.Timeout
  return function (...args: any) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(null, [...args])
    }, delay)
  }
}

// 节流函数
export function throttle(fn: Function, delay: number): Function {
  let isPass = true
  return function (...args: any) {
    if (isPass) {
      isPass = false
      fn.apply(null, [...args])
      setTimeout(() => {
        isPass = true
      }, delay)
    }
  }
}

// 柯里化
export function currying(fn: Function, ...args: any) {
  const length = fn.length
  let allArgs = [...args]
  const res = (...newArgs: any) => {
    allArgs = [...allArgs, ...newArgs]
    if (allArgs.length === length) {
      return fn(...allArgs)
    }
    return res
  }
  return res
}
