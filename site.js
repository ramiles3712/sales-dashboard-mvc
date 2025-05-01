const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Vendas',
            data: [1200, 1500, 800, 1700],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        }]
    },
});
