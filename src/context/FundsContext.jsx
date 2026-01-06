'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { investmentFunds as initialFunds } from '@/data/investmentFunds'

const FundsContext = createContext()

export function FundsProvider({ children }) {
  const [funds, setFunds] = useState(initialFunds)
  const [isLoading, setIsLoading] = useState(false)

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedFunds = localStorage.getItem('investmentFunds')
    if (savedFunds) {
      try {
        setFunds(JSON.parse(savedFunds))
      } catch (error) {
        console.error('Error loading funds from localStorage:', error)
      }
    }
  }, [])

  // Guardar en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('investmentFunds', JSON.stringify(funds))
  }, [funds])

  // Función para actualizar un fondo
  const updateFund = (fundId, updates) => {
    setFunds(prevFunds => 
      prevFunds.map(fund => 
        fund.id === fundId ? { ...fund, ...updates } : fund
      )
    )
  }

  // Función para crear nuevo fondo
  const createFund = (newFund) => {
    setFunds(prevFunds => [...prevFunds, newFund])
  }

  // Función para eliminar fondo
  const deleteFund = (fundId) => {
    setFunds(prevFunds => prevFunds.filter(fund => fund.id !== fundId))
  }

  // Recalcular métricas globales
  const globalMetrics = {
    totalValue: funds.reduce((sum, fund) => sum + fund.currentValue, 0),
    totalInvested: funds.reduce((sum, fund) => sum + fund.investedAmount, 0),
    totalReturns: funds.reduce((sum, fund) => sum + fund.returns, 0),
    averageReturn: funds.length > 0 
      ? funds.reduce((sum, fund) => sum + fund.returnPercentage, 0) / funds.length 
      : 0,
    bestPerformer: funds.length > 0 
      ? funds.reduce((best, fund) => fund.returnPercentage > best.returnPercentage ? fund : best)
      : null,
    fundCount: funds.length
  }

  return (
    <FundsContext.Provider value={{
      funds,
      isLoading,
      updateFund,
      createFund,
      deleteFund,
      globalMetrics,
      setFunds
    }}>
      {children}
    </FundsContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export function useFunds() {
  const context = useContext(FundsContext)
  if (!context) {
    throw new Error('useFunds debe usarse dentro de FundsProvider')
  }
  return context
}