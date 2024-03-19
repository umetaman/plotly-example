import './style.scss'
import Plotly from "plotly.js-dist-min";

const app = document.getElementById('app');
const plot = document.createElement('div');
plot.classList.add('plotly-element');
Plotly.newPlot(plot, [{
    x: [1, 2, 3],
    y: [2, 1, 3]
}]);
app.appendChild(plot);