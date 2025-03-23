/** @odoo-module **/
import { Component, useState, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class OwlTodoList extends Component {
    setup() {
        this.state = useState({
        taskList:[
        ]
        })
        this.orm = useService("orm")

        onWillStart(async ()=>{
            this.state.taskList = await this.orm.searchRead("owl.todo.list", [], ["name", "color", "completed"])
        })
    }
}

OwlTodoList.template = 'todo_list.TodoList'

registry.category('actions').add('owl.action_todo_list_js', OwlTodoList);