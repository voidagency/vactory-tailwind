import React from "react"

export class CardB extends React.Component {
	constructor (props) {
		super(props);

		const {className, tw={}, ...rest} = props;
		this.props = props;
		this.stylesDef = {};

		this.apply(
			'wrapper',
				"border mx-auto flex flex-col justify-center items-center p-5 shadow-2xl w-max rounded "+
				"hover:-translate-y-8 transform-gpu transition duration-200 "+
				"cursor-default");

		this.apply(
			'title',
				"font-mono md:font-serif");
	}

	apply (shortcut, classes) {
		this.stylesDef[shortcut] = classes;

		if (this.props.tw?.[shortcut])
			this.stylesDef[shortcut] += " " + this.props.tw?.[shortcut];

	}

	styles (key) {
		return this.stylesDef?.[key]?.trim();
	}

	render () {
		
		return (
			<div className={this.styles('wrapper')}>
				<img
					src={this.props.image}
					className="object-contain w-24 h-24 mb-4 rounded-full"
					width={64}
					height={64}
				/>
				<span className={this.styles('title')}>{this.props.title}</span>
			</div>
		)
	}

}
