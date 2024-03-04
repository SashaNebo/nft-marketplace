export const formattingNumbers = (n: number): string => {
  const K = 1000
  const M = K * K
  const B = M * K
  const T = B * K

  const formatList = {
    D: Number(n.toFixed(1)) + '',
    K: Number((n / K).toFixed(1)) + 'K',
    M: Number((n / M).toFixed(1)) + 'M',
    B: Number((n / B).toFixed(1)) + 'B',
  }

  if (n >= 0 && n < K) return formatList.D
  if (n >= K && n < M) return formatList.K
  if (n >= M && n < B) return formatList.M
  if (n >= B && n < T) return formatList.B

  return '-'
}

export const modID = (id: string): string => {
  if (!id) return '0xc0E3...B79C'

  const l = id.substring(0, 6)
  const r = id.substring(id.length - 4, id.length)

  return l + '...' + r
}

type RANDOM_NUMBERS = (min: number, max: number, lot: number) => number[]

export const getRandomNumbers: RANDOM_NUMBERS = (min, max, lot) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  const r = () => Math.floor(Math.random() * (max - min) + min)
  const a: number[] = []

  type UNQUE_A = () => number[]
  const uniqueA: UNQUE_A = () => {
    const u = r()

    !a.includes(u) && a.push(u)
    return a.length === lot ? a : uniqueA()
  }

  return uniqueA()
}

export const defaultAddress = '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8'
