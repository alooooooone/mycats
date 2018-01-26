import React, { Component } from 'react';
import Count from './components/Count'
import Photos from './components/Photos'
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
					title: 9,
					headline: "可爱的Lucky",
					bgImage: "https://a.photo/images/2018/01/19/LRG_DSC03412.jpg",
					color: "linear-gradient(-180deg, rgb(254, 177, 200) 0%, rgb(254, 177, 200) 14%, rgb(101, 167, 255) 40%)",
					menuColor: "#eb97b4",
					photos: [
						"https://a.photo/images/2018/01/21/LRG_DSC03114.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03137.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03145.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03164.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03468.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03481.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03548.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03556.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03559.jpg",
					]
				},
				{
					title: 13,
					headline: "搞怪的Lucky",
					bgImage: "https://a.photo/images/2018/01/19/LRG_DSC03544.jpg",
					color: "linear-gradient(-180deg, rgb(255, 235, 111) 1%, rgb(255, 235, 111) 14%, rgb(255, 119, 119) 39%)",
					menuColor: "#ffcc48",
					photos: [
						"https://a.photo/images/2018/01/21/LRG_DSC03496.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03491.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03474.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03199.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03190.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03189.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03187.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03186.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03182.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03143.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03128.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03119.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03102.jpg",
					]
				},
				{
					title: 8,
					headline: "严肃的Lucky",
					bgImage: "https://a.photo/images/2018/01/19/LRG_DSC03505.jpg",
					color: "linear-gradient(-180deg, rgb(196, 178, 248) 3%, rgb(196, 178, 247) 14%, rgb(255, 158, 158) 36%)",
					menuColor: "#b29bff",
					photos: [
						"https://a.photo/images/2018/01/21/LRG_DSC03506.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03488.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03425.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03423.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03194.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03193.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03150.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03129.jpg",
					]
				},
				{
					title: 2,
					headline: "丑陋的Lucky",
					bgImage: "https://a.photo/images/2018/01/19/LRG_DSC03412.jpg",
					color: "linear-gradient(-180deg, rgb(72, 116, 220) 6%, rgb(73, 116, 220) 13%, rgb(149, 228, 239) 40%)",
					menuColor: "#4978dc",
					photos: [
						"https://a.photo/images/2018/01/21/LRG_DSC03470.jpg",
						"https://a.photo/images/2018/01/21/LRG_DSC03185.jpg",
					]
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
		let { currentPage } = this.state

		if (currentPage === -1){
			return () => {
				this.setState({
					hoverItemIndex: index
				})
			}
		}
	}
	onMouseOutResetChapterMenuBg = () => {
		let { currentPage } = this.state

		if(currentPage === -1){
			this.setState({
				hoverItemIndex: -1
			})
		}
	}
	onClickRedireactToChapter = (index) => {
		let { currentPage } = this.state

		if (currentPage === -1) {
			return () => {
				this.setState({
					currentPage: index,
					hoverItemIndex: -1
				})
			}
		}
	}
	onClickChangePage = (index) => {
		if(index !== this.state.currentPage){
			document.documentElement.scrollTop = 0;

			return () => {
				this.setState({
					currentPage: index
				})
			}
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
							{index === this.state.chapterMenu.length - 1 ? null : <span className={`separator-default ${pageDisappearFlag && hoverItemIndex === -2 ? "separator-animation" : ""} ${[-1, -2, index].indexOf(hoverItemIndex) === -1 || currentPage === index ? "separator-hidden" : ""}  ${hoverItemIndex === index ? "separator-show" : ""}`}></span>}
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
						<Photos 
						key={item.headline}
						photos={item.photos} currentPage={currentPage} chapterMenu={chapterMenu} color={item.color} currentIndex={index} changePage={this.onClickChangePage} menuColor={item.menuColor}/>
					)
				}
			</div>
		)
	}

	render() {
		let {pageDisappearFlag,currentPage} = this.state;

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
				<div className="tip" style={currentPage !== -1 ? {visibility: "hidden"} : {}}>想看什么样的Lucky?</div>
				{this.renderChapterMenu()}
				{this.renderChapterMenuBg()}
				{this.renderChapter()}
			</div>
		)
	}
}

export default App;
