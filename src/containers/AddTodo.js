import React from'react';
import { Form, Input, Button } from 'antd';

const AddTodo = () => {
    return(
        <>
            <Form layout="vertical">
                <Form.Item label="Add to do" name="add" 
                rules={[{ required: true, message: 'Por favor digite uma tarefa' }]}>
                    <Input />
                </Form.Item>
            </Form>
            <div className="text-right">
                <Button type="primary" htmlType="submit">enviar</Button>
            </div>
        </>
    )
}

export default AddTodo;