// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component {
    
    state = {currentSlideIndex: 0}
    
    render () {
        let current_slide = this.state.currentSlideIndex
        console.log(this.state.currentSlideIndex)
        return(
            <div>I am on slide {current_slide}</div>
        )
        
    }
}


export default ImageSlider