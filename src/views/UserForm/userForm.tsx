import React from 'react';
import Questions from '../../components/Questions/Questions';
interface Props {
    classes: any;
  }
  
  interface State {
    value: number;
  }
class UserForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
          value: 0
        };
      }
    render() {
        return (
            <div className="user-form">
                <Questions />
            </div>
        )
    }
}

export default UserForm;