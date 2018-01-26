import React, {Component} from 'react';
import "./Photos.css"

class Photos extends Component{
    constructor(props){
        super(props)
        this.state = {
            photos: this.props.photos
        }
    }

    componentDidUpdate(){
        let { currentPage, currentIndex } = this.props;
        
        if(currentIndex === currentPage){
            let chapter = document.getElementsByClassName("chapter-page");
            let items = chapter[currentPage].getElementsByClassName("chapter-page-item")
            document.addEventListener("scroll", function () {
                let scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
                let windowHeight = document.documentElement.clientHeight;
                
                Array.prototype.forEach.call(items,(item,index)=>{
                    let itemHeight = item.clientHeight;
                    let itemOffsetTop = item.offsetTop;
                    let img = item.children[0];
                    
                    if(itemHeight/2 + itemOffsetTop < scrollTop + windowHeight){
                        let position = parseInt(img.getAttribute("data-index"),10) % 2 === 0 ? "img-show-right" : "img-show-left";

                        img.classList.add(position);
                    }
                })
            })
        }
    }

    renderChapterPageItem(){
        let { photos } = this.props;

        return photos.map((item, index) =>
            <div key={item} className="chapter-page-item">
                <img src={item} alt="pic" style={index % 2 === 0 ? { right: "-808px" } : { left: "-808px" }} data-index={index} />
            </div>
        )
    }
    
    renderChapterPageMenu(){
        let { menuColor, currentPage } = this.props;

        return <div className="chapter-page-footer" style={{ backgroundColor: menuColor }}>
            <ul className="chapter-page-menu clearfix">
                {
                    ["可爱的", "搞怪的", "严肃的", "丑陋的"].map((item, index) =>
                        <li key={item} onClick={this.props.changePage(index)} style={{opacity: index === currentPage ? 1 : 0.5}}>{item}</li>
                    )
                }
            </ul>
        </div>
    }

    render() {
        let { currentPage,color,currentIndex } = this.props;

        return (
            <div
                className={`chapter-page ${currentPage === currentIndex ? "chapter-page-show" : ""}`}
                style={{ backgroundImage: `${color}` }} ref="box">
                { this.renderChapterPageItem() }
                { this.renderChapterPageMenu() }
            </div>
        )
    }
}

export default Photos;