import React, {Component} from 'react';
import BladeService from '../service/BladeService'

class BladeList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            blades:[],
            message: null
        }
        this.refreshBlades = this.refreshBlades.bind(this);
        this.addBladeClicked = this.addBladeClicked.bind(this);


    }

    componentDidMount() {
        this.refreshBlades();
    }

    refreshBlades() {
        BladeService.retriveAllBlades()
            .then(
                response => {
                    console.log(response);
                    this.setState({blades:response.data});
                }
            )
    }

    deleteBlade(id) {

        BladeService.deleteBlade(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({message:'Delete of blade successful'});
                    this.refreshBlades();
                }
            )
    }

    updateBlade(id) {
        console.log('in updateBlade id: '+id)
        this.props.history.push(`/blades/${id}`)
    }

    addBladeClicked () {
        console.log('Add new blade');
        this.props.history.push('/blades/-1');
    }

    render() {
        return  (
            <div className="container">
                <h3>All Blades</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Stars</th>
                                <th>Notes</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.blades.map(
                                    blade =>
                                        <tr key={blade.id}>
                                            <td>{blade.id}</td>
                                            <td>{blade.name}</td>
                                            <td>{blade.stars}</td>
                                            <td>{blade.notes}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteBlade(blade.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateBlade(blade.id)}>Update</button></td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addBladeClicked}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BladeList;