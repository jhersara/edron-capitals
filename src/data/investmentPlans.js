export const investmentPlans = [
  {
    id: 'maxiahorro',
    name: 'MaxiAhorro',
    description: 'Ahorro a largo plazo con bajo riesgo',
    risk: 'Bajo',
    minInvestment: 1000,
    expectedReturn: '5-8% anual',
    currentValue: 28686.68,
    investedAmount: 25000,
    returns: 3686.68,
    returnPercentage: 14.75,
    composition: [
      { asset: 'Bonos Corporativos', percentage: 40 },
      { asset: 'Oro', percentage: 30 },
      { asset: 'EUR/USD', percentage: 20 },
      { asset: 'Tesoro USA', percentage: 10 }
    ]
  },
  {
    id: 'risktorisk',
    name: 'RiskToRisk',
    description: 'Alto rendimiento con riesgo moderado',
    risk: 'Moderado-Alto',
    minInvestment: 5000,
    expectedReturn: '12-18% anual',
    currentValue: 42350.25,
    investedAmount: 35000,
    returns: 7350.25,
    returnPercentage: 21.00,
    composition: [
      { asset: 'Acciones Tech', percentage: 50 },
      { asset: 'Petróleo', percentage: 25 },
      { asset: 'EUR/USD', percentage: 15 },
      { asset: 'Oro', percentage: 10 }
    ]
  },
  {
    id: 'moderado',
    name: 'Moderado',
    description: 'Balance entre rendimiento y seguridad',
    risk: 'Moderado',
    minInvestment: 2500,
    expectedReturn: '8-12% anual',
    currentValue: 18500.50,
    investedAmount: 16000,
    returns: 2500.50,
    returnPercentage: 15.63,
    composition: [
      { asset: 'Acciones Tech', percentage: 35 },
      { asset: 'Oro', percentage: 25 },
      { asset: 'Petróleo', percentage: 20 },
      { asset: 'EUR/USD', percentage: 20 }
    ]
  }
];

export const historicalData = [
  { date: '2024-01', maxiahorro: 24000, risk: 29000, moderado: 14000 },
  { date: '2024-02', maxiahorro: 24500, risk: 30500, moderado: 14500 },
  { date: '2024-03', maxiahorro: 25000, risk: 32000, moderado: 15000 },
  { date: '2024-04', maxiahorro: 25500, risk: 33500, moderado: 15500 },
  { date: '2024-05', maxiahorro: 26000, risk: 34000, moderado: 15800 },
  { date: '2024-06', maxiahorro: 26500, risk: 35000, moderado: 16000 },
  { date: '2024-07', maxiahorro: 27000, risk: 36500, moderado: 16200 },
  { date: '2024-08', maxiahorro: 27500, risk: 38000, moderado: 16500 },
  { date: '2024-09', maxiahorro: 28000, risk: 39000, moderado: 16800 },
  { date: '2024-10', maxiahorro: 28200, risk: 40000, moderado: 17000 },
  { date: '2024-11', maxiahorro: 28400, risk: 41500, moderado: 17500 },
  { date: '2024-12', maxiahorro: 28686.68, risk: 42350.25, moderado: 18500.50 },
];

export const assetAllocation = [
  { name: 'Acciones Tech', value: 45 },
  { name: 'Oro', value: 25 },
  { name: 'Petróleo', value: 15 },
  { name: 'EUR/USD', value: 10 },
  { name: 'Bonos', value: 5 }
];

export const recentMovements = [
  { date: '14 Oct 2025', type: 'Aporte', plan: 'RiskToRisk', amount: 5000, status: 'Completado' },
  { date: '19 Sep 2025', type: 'Retiro', plan: 'MaxiAhorro', amount: 2500, status: 'Completado' },
  { date: '09 Ago 2025', type: 'Aporte', plan: 'Moderado', amount: 3200, status: 'Completado' },
  { date: '25 Jul 2025', type: 'Reinversión', plan: 'RiskToRisk', amount: 1200, status: 'Completado' },
  { date: '10 Jul 2025', type: 'Aporte', plan: 'MaxiAhorro', amount: 4000, status: 'Completado' }
];