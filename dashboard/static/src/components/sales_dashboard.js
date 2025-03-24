/** @odoo-module **/
import { registry } from "@web/core/registry";
import { KpiCard } from "./kpi_card/kpi_card"
import { ChartRenderer } from "./chart_renderer/chart_renderer"
import { Component, useState, onWillStart, useRef, onMounted } from "@odoo/owl";
import { loadJS } from "@web/core/assets"

export class OwlSalesDashboard extends Component {
    setup() {

    }
}

OwlSalesDashboard.template = 'dashboard.OwlSalesDashboard'
OwlSalesDashboard.components = { KpiCard, ChartRenderer }

registry.category('actions').add('owl.sales_dashboard', OwlSalesDashboard);