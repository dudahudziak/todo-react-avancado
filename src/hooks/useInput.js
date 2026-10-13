import { useState, useCallback } from 'react'

// Hook customizado: controla o valor de um input
export function useInput(valorInicial = '') {
  const [value, setValue] = useState(valorInicial)

  const onChange = useCallback((e) => setValue(e.target.value), [])
  const reset = useCallback(() => setValue(valorInicial), [valorInicial])

  return { value, onChange, reset }
}
