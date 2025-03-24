/** @odoo-module **/
import { registry } from "@web/core/registry";
import { Component, useState, onWillStart, useRef, onMounted } from "@odoo/owl";
import { loadJS } from "@web/core/assets"


export class ChartRenderer extends Component {
    setup() {
        this.chartRef = useRef("chart")
        onWillStart(async ()=>{
            await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js")
        })

        onMounted(()=>this.renderChart())
    }

    renderChart(){
    console.log("Chart type:", this.props.type);
        new Chart(
        this.chartRef.el,
        {
                  type: this.props.type,
                  data: {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],
                        datasets: [
                        {
                        label: 'My First Dataset',
                        data: [300, 50, 100],
                        hoverOffset: 4
                        },{
                        label: 'My Second Dataset',
                        data: [100, 70, 150],
                        hoverOffset: 4
                        }]
                  },
                  options: {
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'bottom',
                      },
                      title: {
                        display: true,
                        text: this.props.title,
                        position: 'bottom',
                      }
                    }
                  },
        }
        );
    }
}

ChartRenderer.template = 'dashboard.ChartRenderer'