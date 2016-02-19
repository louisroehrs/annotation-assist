
var
React = require('react/addons'),

Form = React.createClass({

    getInitialState: function() {
        return {
            gt_box: false
        };
    },

    gtBoxChecked: function(){
        var gt_box = React.findDOMNode(this.refs.gt_box);

        this.setState({gt_box:gt_box.checked});
    },

    render: function() {
        return (
            <div className="buttons">
                <form className="exportForm" action={this.props.loc} method="post">

                    <div className="checks">
                        <h3> Select the questions you would like to export </h3>

                        <div className="check-wrapper">
                            <input className="check" type="checkbox" name="annotated_good" value="annotated_good" defaultChecked/>
                            <span>In Purview Questions with Good/Perfect Answers</span>
                        </div>
                        <div className="check-wrapper">
                            <input className="check" type="checkbox" name="annotated_bad" value="annotated_bad" defaultChecked/>
                            <span>In Purview Questions with Incorrect/Poor Answers</span>
                        </div>
                        <div className="check-wrapper">
                            <input className="check" type="checkbox" name="off_topic" value="off_topic" defaultChecked/>
                            <span>Out of Purview Questions</span>
                        </div>
                    </div>
                    <input type="hidden" name="start_time" value={this.props.start_time} />
                    <input type="hidden" name="end_time" value={this.props.end_time} />
                    <input type="hidden" name="threshold" value={this.props.threshold} />
                    <input className='button' type="submit" value={this.props.val} />
                </form>
            </div>
        );
    }
});

module.exports = Form;