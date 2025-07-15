const knex = require('../config/db');

const getTodos = async(req, res) =>{
    try {        
        const todos = await knex('tb_todos')
                            .where({id:req.user.id});
        
        res.json(todos);
    } catch (error) {

        res.status(500).json({ message: error });
    }
};

const createTodos = async (req, res) => {
    const { title, description, status } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    try {
        await knex("tb_todos").insert({
            task_name : title,
            description,
            status,
            user_id: req.user.id,
        });

        res.status(201).json({ message: "Todo created successfully" });
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({ message: "Failed to create todo" });
    }
};

const updatetodos = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    try {
        const updated = await knex("tb_todos")
            .where({ id, user_id: req.user.id })
            .update({ task_name: title, description, status });

        if (!updated) {
            return res.status(404).json({ message: "Todo not found or not authorized" });
        }

        res.json({ message: "Todo updated successfully" });
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ message: "Failed to update todo" });
    }
};


module.exports = {
    getTodos,
    createTodos,
    updatetodos
}