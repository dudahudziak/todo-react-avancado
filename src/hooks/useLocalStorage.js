import { useState, useEffect } from 'react'

// Hook customizado: funciona como o useState, mas guarda o valor no localStorage
export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave)
      return salvo !== null ? JSON.parse(salvo) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor))
    } catch {
      // localStorage indisponível: a aplicação continua funcionando em memória
    }
  }, [chave, valor])

  return [valor, setValor]
}
