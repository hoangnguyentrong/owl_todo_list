/** @odoo-module **/
import { Component, useState, onWillStart, useRef } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class OwlTodoList extends Component {
    setup() {
        this.state = useState({
            task:{name:"", color:"#FF0000", completed:false},
            taskList:[],
            isEdit: false,
            active: false
        })
        this.orm = useService("orm")
        this.model = "owl.todo.list"
        this.searchInput = useRef("search-input")

        onWillStart(async ()=>{
            this.getAllTasks()
        })
    }
    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(this.model, [], ["name", "color", "completed"])
    }
    addTask(){
        this.resetForm()
        this.state.activeId = false
        this.state.isEdit = false
    }
    editTask(task){
        this.state.activeId = task.id
        console.log(task)
        this.state.isEdit = true
        this.state.task = {...task}
    }
    async saveTask(){
        if(!this.state.isEdit){
            await this.orm.create(this.model, [this.state.task])
        }
        else{
            await this.orm.write(this.model, [this.state.activeId], this.state.task)
        }

        await this.getAllTasks()

    }
    resetForm(){
            this.state.task = {name:"", color:"#FF0000", completed:false}
    }
    async deleteTask(task){
        await this.orm.unlink(this.model, [task.id])
        await this.getAllTasks()
    }
    async searchTasks(){
        const text = this.searchInput.el.value
        this.state.taskList = await this.orm.searchRead(this.model, [['name','ilike',text]], ["name", "color", "completed"])
//        await this.getAllTasks()

    }
}

OwlTodoList.template = 'todo_list.TodoList'

registry.category('actions').add('owl.action_todo_list_js', OwlTodoList);