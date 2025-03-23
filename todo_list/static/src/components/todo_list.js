/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class OwlTodoList extends Component {
    setup() {
        this.state = useState({value: 1});
    }
}

OwlTodoList.template = 'todo_list.TodoList'

registry.category('actions').add('owl.action_todo_list_js', OwlTodoList);