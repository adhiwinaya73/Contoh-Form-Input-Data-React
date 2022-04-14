import React from "react";

let selectedIdx = null
class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    printData = () => {
        let htmlElement = this.props.data.map((value, index) => {
            return <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.class}</td>
                <td>{value.time}</td>
                <td>{value.job}</td>
                <td>{value.note}</td>
                <td>
                    {/* <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example"> */}
                    <button type="button" onClick={() => this.handleEdit(index)} 
                        className="btn btn-outline-warning">Edit</button>
                    <button type="button" onClick={() => this.handleDelete(index)}
                        className="btn btn-danger">Delete</button>
                    {/* </div> */}
                </td>
            </tr>
        })
        return htmlElement
    }

    handleDelete = (idx) => {
        let temp = [...this.props.data]
        temp.splice(idx, 1);
        this.props.handleSubmit(temp);
    }
    
    handleEdit = (idx) => {
        let temp = [...this.props.data]
        selectedIdx=idx
        this.props.handleSubmit(temp);
        console.log("handleEdit", this.props.handleSubmit(temp))
    }       
    
    
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Time</th>
                        <th scope="col">Job</th>
                        <th scope="col">Notes</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.printData()}
                </tbody>
            </table>
        )
    }

}




export default Table;