'use client'
import { createChart } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

export default function ChartComponent({ timeframe }) {
  const chartContainerRef = useRef()
  const chartRef = useRef()
  const seriesRef = useRef()

  useEffect(() => {
    if (!chartContainerRef.current) return

    // Asegurar que no haya gráficos previos
    if (chartRef.current) {
      chartRef.current.remove()
      chartRef.current = null
      seriesRef.current = null
    }

    // Configuración del gráfico
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 320,
      layout: {
        background: { color: 'transparent' },
        textColor: '#B0B0B0',
      },
      grid: {
        vertLines: { color: '#2A2A2A' },
        horzLines: { color: '#2A2A2A' },
      },
      crosshair: {
        mode: 1, // CrosshairMode.Normal = 1
      },
      rightPriceScale: {
        borderColor: '#2A2A2A',
      },
      timeScale: {
        borderColor: '#2A2A2A',
        timeVisible: true,
      },
    })

    chartRef.current = chart

    // Esperar un microtarea para asegurar que el chart esté listo
    setTimeout(() => {
      if (!chartRef.current) return

      try {
        // Serie de líneas
        const lineSeries = chartRef.current.addLineSeries({
          color: '#FFEA00',
          lineWidth: 2,
          crosshairMarkerVisible: true,
          crosshairMarkerRadius: 4,
          crosshairMarkerBorderColor: '#FFEA00',
          crosshairMarkerBackgroundColor: '#161616',
        })
        seriesRef.current = lineSeries

        // Datos de ejemplo
        const basePrice = 19500
        const data = []
        for (let i = 0; i < 30; i++) {
          const time = new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000)
          const price = basePrice + Math.sin(i * 0.5) * 1000 + i * 250
          data.push({ time: time.toISOString().split('T')[0], value: price })
        }

        lineSeries.setData(data)
      } catch (error) {
        console.error('Error adding series:', error)
      }
    }, 0)

    // Ajustar al contenedor
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (chartRef.current) {
        chartRef.current.remove()
        chartRef.current = null
        seriesRef.current = null
      }
    }
  }, [timeframe])

  return <div ref={chartContainerRef} className="tradingview-chart" />
}