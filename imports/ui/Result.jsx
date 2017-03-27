import React, {Component} from "react";


export default class Result extends Component {
	render( ) {
		return(
			<div className="result">
				<a href={this.props.result.productUrl}>
				<img src={this.props.result.thumbnailImage
} alt=""/>
				<div>{this.props.result.name} : {this.props.result.salePrice}</div>
				</a>
		</div>)
	}
}