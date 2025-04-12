/** @odoo-module */

import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
const { Component } = owl;

export class BoolBadge extends Component{
    setup(){
    const options = this.props.options || {}
    this.trueValue = options.trueValue || "Yes"
    this.trueColor = options.trueColor ||"green"
    this.falseValue =options.falseValue || "No"
    this.falseColor = options.falseColor ||"red"
    this.defaultColor =options.defaultColor || "white"
    }
    updateValue(val){
        this.props.record.update({ [this.props.name]: val })
    }
    get value() {
        return this.props.record.data[this.props.name]
    }
}

BoolBadge.template = "booking_custom.BoolBadge"
BoolBadge.props = {
        ...standardFieldProps,
        options: { type:Object, optional: true}
        }
export const boolBadge = {
    component: BoolBadge,
    supportedTypes: ["boolean"],
    extractProps: ({attrs}) =>{
        return {options: attrs.options}
    }
};
registry.category("fields").add("bool_badge", boolBadge)

