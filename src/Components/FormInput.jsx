import React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }


    btnSubmit = () => {
        let temp = [...this.props.data];

        temp.push({
            id: this.props.data.length + 1,
            name: this.refs.refName.value,
            class: this.refs.refClass.value,
            time: this.refs.refTime.value,
            job: this.refs.refJob.value,
            note: this.refs.refNote.value,
        })

        this.props.handleSubmit(temp)
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <h4>Data Form Input</h4>
                    <h6 className="pt-3">Name</h6>
                    <input type="text" ref="refName" className="form-control" placeholder="Input Name" />
                    <h6 className="pt-4">Class</h6>
                    <select className="form-control" ref="refClass" id="selectClass">
                        <option>Choose Class</option>
                        <option value="JC-Full Stack">JC-Full Stack</option>
                        <option value="JC-Digital Marketing">JC-Digital Marketing</option>
                        <option value="JC-UI/UX">JC-UI/UX</option>
                    </select>
                    <h6 className="pt-4">Time</h6>
                    <select className="form-control" ref="refTime" id="selectTime">
                        <option>Choose Time</option>
                        <option value="After-hour">After Hour</option>
                        <option value="Full-time">Full Time</option>
                        <option value="Livestream">Livestream</option>
                    </select>
                    <h6 className="pt-3">Job</h6>
                    <input type="text" ref="refJob" className="form-control" id="inputJob" placeholder="Input Job" />
                    <h6 className="pt-3">Note</h6>
                    <input type="text" ref="refNote" className="form-control" id="inputNote" placeholder="Input Note" />
                    {/* <div className="d-grid gap-2 pt-3"> */}
                    <button className="btn btn-primary w-100" type="button" onClick={this.btnSubmit}>Submit</button>
                    {/* </div> */}
                </div>
            </form>
        )
    }

}


export default FormInput;