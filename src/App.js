import React, { Component } from 'react';
import Count from './components/Count'
import './reset.css'
import './app.css'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			pageDisappearFlag: false,
			hoverItemIndex: -2,
			currentPage: -1,
			chapterMenu: [
				{
					title: 74,
					headline: "可爱的Lucky",
					bgImage: "https://a.photo/images/2018/01/19/LRG_DSC03195.jpg",
					color: "pink",
				},
				{
					title: 85,
					headline: "搞怪的Lucky",
					bgImage: "https://a.photo/images/2018/01/19/LRG_DSC03544.jpg",
					color: "pink",
				},
				{
					title: 96,
					headline: "严肃的Lucky",
					bgImage: "https://a.photo/images/2018/01/19/LRG_DSC03505.jpg",
					color: "pink",
				},
				{
					title: 31,
					headline: "丑陋的Lucky",
					bgImage: "https://a.photo/images/2018/01/19/LRG_DSC03412.jpg",
					color: "pink",
				},
			]
		}
	}

	onClickPageLoaderHidden = () => {
		this.setState({
			pageDisappearFlag: !this.state.pageDisappearFlag
		})
	}
	onMouseOverShowChapterMenuBg = (index) => {
		return () => {
			this.setState({
				hoverItemIndex: index
			})
		}
	}
	onMouseOutResetChapterMenuBg = () => {
		this.setState({
			hoverItemIndex: -1
		})
	}
	onClickRedireactToChapter = (index) => {
		return () => {
			this.setState({
				currentPage: index
			})
		}
	}

	componentDidMount(){
		var html = document.documentElement;

		var changeHtmlFontSize = function() {
			var htmlWidth = html.offsetWidth;
			var htmlFontSize = Math.ceil(htmlWidth / 60);

			htmlFontSize = htmlFontSize > 22 ? 22 : htmlFontSize;
			html.style.fontSize = htmlFontSize + "px";
		}
		changeHtmlFontSize();
		window.onresize = function() {
			changeHtmlFontSize();
		}
	}

	renderChapterMenu(){
		let { chapterMenu, hoverItemIndex, pageDisappearFlag,currentPage } = this.state

		return (
			<ul className={`chapter-menu ${pageDisappearFlag && hoverItemIndex === -2 ? "chapter-menu-animation" : ""}`}>
				{
					chapterMenu.map((item, index) =>
						<li key={item.title}
							className={`chapter-menu-li-default ${hoverItemIndex !== -2 && [-1, index].indexOf(hoverItemIndex) !== -1 ? "chapter-menu-opacity-1" : ""} ${currentPage === index ? "chapter-redirect-animation" : ""} ${[-1, index].indexOf(currentPage) === -1 ? "hidden-for-page" : ""}`}
							style={hoverItemIndex !== -2 && [-1,index].indexOf(hoverItemIndex) === -1 ? {opacity: 0.15} : {} }>
							<a href={`#${item.title}`}
								className="chapter-link"
								data-chapter-target={item.title}
								onMouseOver={this.onMouseOverShowChapterMenuBg(index)}
								onMouseOut={this.onMouseOutResetChapterMenuBg}
								onClick={this.onClickRedireactToChapter(index)}>
								<div className="chapter-title">
									<Count flag={pageDisappearFlag} num={parseInt(item.title / 10,10)}/>
									<Count flag={pageDisappearFlag} num={parseInt(item.title % 10,10)}/>
								</div>
								<span className="chapter-headline">{item.headline}</span>
							</a>
							{index === this.state.chapterMenu.length - 1 ? null : <span className={`separator-default ${pageDisappearFlag && hoverItemIndex === -2 ? "separator-animation" : ""} ${[-1, -2, index].indexOf(hoverItemIndex) === -1 ? "separator-hidden" : ""}  ${hoverItemIndex === index ? "separator-show" : ""}`}></span>}
						</li>
					)
				}
			</ul>
		)
	}
	renderChapterMenuBg(){
		let { chapterMenu, hoverItemIndex } = this.state

		return (
			<ul className="chapter-menu-bg-ul">
				{
					chapterMenu.map((item, index) =>
						<li key={item.title}
						className={`chapter-menu-bg ${hoverItemIndex === index ? "bg-show" : "bg-hidden"}`}
						style={{ backgroundImage: `url(${item.bgImage})`}}>
						</li>
					)
				}
			</ul>
		)
	}
	renderChapter(){
		let { chapterMenu, currentPage } = this.state

		return (
			<div className="chapter">
				{
					chapterMenu.map((item, index) => 
						<div
						key={item.title}
						className={`chapter-page ${currentPage === index ? "chapter-page-show" : ""}`}
						style={{ backgroundColor: `${item.color}` }}>
						</div>
					)
				}
			</div>
		)
	}

	render() {
		let {pageDisappearFlag} = this.state;

		return (
			<div className="wrapper">
				<div id="frame">
					<div className="top"></div>
					<div className="right"></div>
					<div className="bottom"></div>
					<div className="left"></div>
				</div>
				<div className={`page-loader ${pageDisappearFlag ? 'page-loader-disappear' : ''}`} onClick={this.onClickPageLoaderHidden}>
					<div className="page-loader-content">
						<span className="logo">Lucky</span>
						<span className="detail">一只蠢萌的颜值飘忽不定的猫</span>
					</div>
				</div>
				<div className="tip">想看什么样的Lucky?</div>
				{this.renderChapterMenu()}
				{this.renderChapterMenuBg()}
				{this.renderChapter()}
			</div>
		)
	}
}

export default App;
