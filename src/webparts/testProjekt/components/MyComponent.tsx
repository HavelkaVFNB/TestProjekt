import * as React from 'react';
import { ITestProjektProps } from './ITestProjektProps';
import { IMyComponentProps } from './IMyComponentProps';
import { IMyComponentState } from './IMyComponentsState';

export default class Mycomponent extends React.Component<IMyComponentProps, IMyComponentState> {

    value2 : string

    constructor(props: IMyComponentProps) {
        super(props);
        this.state = {
            value : "init"
        }

      }

      componentDidMount(): void {
        console.log("didMount");
        
      }

      componentDidUpdate(prevProps: Readonly<IMyComponentProps>, prevState: Readonly<IMyComponentState>, snapshot?: any): void {
        console.log("DidUpdate");
        
      }

  public render(): React.ReactElement<ITestProjektProps> {
    const {
        atribute
    } = this.props;


    console.log("Render");
    
    return (
      <section >
        <div>
                Moje komponenta {atribute}
                
        </div>
        <div> Hodnota {this.state.value}</div>
        <div> Hodnota2 {this.value2}</div>
        <button onClick={()=> {this.setState({value : "Sets"})}}> BUTTON </button>
        <button onClick={()=> {this.value2 = "Sets2"; this.forceUpdate()}}> BUTTON2 </button>
      </section>
    );
  }
}
