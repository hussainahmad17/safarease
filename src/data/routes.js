const routes = [
  {
    id: 'r1',
    name: 'Fastest by Mix',
    summary: 'Walk → Metro → Ride',
    cost: 6.5,
    duration: 28, // minutes
    score: 9.2,
    modes: ['walk','metro','ride'],
    segments: [
      { type: 'walk', duration: 6, detail: 'Walk to Metro station' },
      { type: 'metro', duration: 15, detail: 'Metro 2 stops' },
      { type: 'ride', duration: 7, detail: 'Ride to destination' }
    ]
  },
  {
    id: 'r2',
    name: 'Cheapest Option',
    summary: 'Walk → Bus',
    cost: 2.0,
    duration: 45,
    score: 7.4,
    modes: ['walk','bus'],
    segments: [
      { type: 'walk', duration: 10, detail: 'Walk to bus stop' },
      { type: 'bus', duration: 35, detail: 'Bus route 12' }
    ]
  },
  {
    id: 'r3',
    name: 'Balanced',
    summary: 'Walk → Bike → Metro',
    cost: 3.2,
    duration: 35,
    score: 8.1,
    modes: ['walk','bike','metro'],
    segments: [
      { type: 'walk', duration: 5, detail: 'Walk to bike hub' },
      { type: 'bike', duration: 12, detail: 'Shared bike' },
      { type: 'metro', duration: 18, detail: 'Metro 3 stops' }
    ]
  }
]

export default routes
