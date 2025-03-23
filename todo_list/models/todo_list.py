from odoo import models, fields

class StudentStudent(models.Model):
    _name= "owl.todo.list"
    _description= "Owl Todo List"

    name = fields.Char(string="Task Name")
    completed = fields.Boolean()
    color = fields.Char()