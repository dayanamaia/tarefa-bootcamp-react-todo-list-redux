import React from 'react';
import { List, Avatar } from 'antd';

const ToDoList = () => {

    return(
        <List>
            <List.Item>
                <List.Item.Meta
                    avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/UXamdIxYSkXfoVo.jpg" />
                    }
                    title="tarefa"
                    description="emailbhbcsdhcsd@.com"
                />
                </List.Item>
        </List>
        // <List dataSource={this.state.data}
        //     renderItem={item => (
        //       <List.Item key={item.id}>
        //         <List.Item.Meta
        //           avatar={
        //             <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        //           }
        //           title={<a href="https://ant.design">{item.name.last}</a>}
        //           description={item.email}
        //         />
        //         <div>Content</div>
        //       </List.Item>
        //     )}
        //   >
        //   </List>
    )
}

export default ToDoList;