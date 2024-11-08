import Chart from 'chart.js/auto';

export function createEmissionsChart() {
  const ctx = document.getElementById('emissionsChart').getContext('2d');
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1990', '2000', '2010', '2020', '2023'],
      datasets: [{
        label: 'Global CO2 Emissions (Gt)',
        data: [22.7, 25.5, 33.1, 34.8, 36.8],
        borderColor: '#2ecc71',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

export function createImpactChart() {
  const ctx = document.getElementById('impactChart').getContext('2d');
  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Transportation', 'Industry', 'Agriculture', 'Buildings', 'Other'],
      datasets: [{
        data: [29, 23, 20, 17, 11],
        backgroundColor: [
          '#2ecc71',
          '#3498db',
          '#e74c3c',
          '#f1c40f',
          '#95a5a6'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}