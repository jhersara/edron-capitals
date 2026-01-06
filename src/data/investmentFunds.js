export const investmentFunds = [
  {
    id: 'fondo-tecnologico',
    name: 'Fondo Tech Global',
    description: 'Inversión en las principales empresas tecnológicas mundiales',
    category: 'Alto Rendimiento',
    riskLevel: 'Alto',
    minInvestment: 1000,
    expectedReturn: '15-25% anual',
    currentValue: 42350.25,
    investedAmount: 35000,
    returns: 7350.25,
    returnPercentage: 21.00,
    managementFee: '1.5% anual',
    liquidity: '48 horas',
    performanceHistory: [
      { month: 'Ene', value: 32000 },
      { month: 'Feb', value: 33500 },
      { month: 'Mar', value: 35000 },
      { month: 'Abr', value: 36500 },
      { month: 'May', value: 38000 },
      { month: 'Jun', value: 39000 },
      { month: 'Jul', value: 40000 },
      { month: 'Ago', value: 41500 },
      { month: 'Sep', value: 42350 }
    ],
    composition: [
      { asset: 'Acciones Tech USA', percentage: 40 },
      { asset: 'Tecnología Emergente', percentage: 30 },
      { asset: 'ETF Tech Global', percentage: 20 },
      { asset: 'Reserva Liquida', percentage: 10 }
    ],
    color: '#ffea00'
  },
  {
    id: 'fondo-commodities',
    name: 'Fondo Commodities Plus',
    description: 'Diversificación en materias primas: oro, petróleo y metales',
    category: 'Protección',
    riskLevel: 'Moderado',
    minInvestment: 2500,
    expectedReturn: '8-12% anual',
    currentValue: 28686.68,
    investedAmount: 25000,
    returns: 3686.68,
    returnPercentage: 14.75,
    managementFee: '1.2% anual',
    liquidity: '72 horas',
    performanceHistory: [
      { month: 'Ene', value: 24000 },
      { month: 'Feb', value: 24500 },
      { month: 'Mar', value: 25000 },
      { month: 'Abr', value: 25500 },
      { month: 'May', value: 26000 },
      { month: 'Jun', value: 26500 },
      { month: 'Jul', value: 27000 },
      { month: 'Ago', value: 27500 },
      { month: 'Sep', value: 28687 }
    ],
    composition: [
      { asset: 'Oro Físico', percentage: 40 },
      { asset: 'Petróleo WTI', percentage: 30 },
      { asset: 'Metales Preciosos', percentage: 20 },
      { asset: 'Reserva Liquida', percentage: 10 }
    ],
    color: '#e6d200'
  },
  {
    id: 'fondo-forex',
    name: 'Fondo Forex Estrategico',
    description: 'Operaciones en pares de divisas principales',
    category: 'Especializado',
    riskLevel: 'Muy Alto',
    minInvestment: 5000,
    expectedReturn: '20-35% anual',
    currentValue: 18500.50,
    investedAmount: 16000,
    returns: 2500.50,
    returnPercentage: 15.63,
    managementFee: '2.0% anual',
    liquidity: '24 horas',
    performanceHistory: [
      { month: 'Ene', value: 14000 },
      { month: 'Feb', value: 14500 },
      { month: 'Mar', value: 15000 },
      { month: 'Abr', value: 15500 },
      { month: 'May', value: 15800 },
      { month: 'Jun', value: 16000 },
      { month: 'Jul', value: 16200 },
      { month: 'Ago', value: 16500 },
      { month: 'Sep', value: 18501 }
    ],
    composition: [
      { asset: 'EUR/USD', percentage: 50 },
      { asset: 'USD/JPY', percentage: 25 },
      { asset: 'GBP/USD', percentage: 15 },
      { asset: 'Reserva Liquida', percentage: 10 }
    ],
    color: '#ccba00'
  }
];

export const fundCategories = [
  { id: 'todos', name: 'Todos los Fondos', count: 3 },
  { id: 'alto-rendimiento', name: 'Alto Rendimiento', count: 1 },
  { id: 'proteccion', name: 'Protección', count: 1 },
  { id: 'especializados', name: 'Especializados', count: 1 }
];

export const recentActivities = [
  { date: '15 Oct 2025', type: 'Aporte', fund: 'Fondo Tech Global', amount: 5000, status: 'Completado' },
  { date: '10 Oct 2025', type: 'Reinversión', fund: 'Fondo Commodities Plus', amount: 1200, status: 'Completado' },
  { date: '05 Oct 2025', type: 'Aporte', fund: 'Fondo Forex Estrategico', amount: 3000, status: 'Completado' },
  { date: '28 Sep 2025', type: 'Retiro', fund: 'Fondo Tech Global', amount: 2500, status: 'Completado' },
  { date: '20 Sep 2025', type: 'Aporte', fund: 'Fondo Commodities Plus', amount: 4000, status: 'Completado' }
];

export const fundMetrics = {
  totalValue: 89537.43,
  totalInvested: 76000,
  totalReturns: 13537.43,
  averageReturn: 17.13,
  bestPerformer: 'Fondo Tech Global',
  worstPerformer: 'Fondo Forex Estrategico'
};