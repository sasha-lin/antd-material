/**
 * Created by lilei on 2018/3/21.
 */
import React, {Component} from 'react';
import Button from '@/components/Button'
import Message from '@/components/Message'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Button onClick={()=>{Message.success('hello~')}}>点击触发</Button>
            </div>
        )
    }
}