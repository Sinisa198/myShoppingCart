import React from 'react'
import useState from 'react'
import camera from '../assets/images/camera.png'
import favorite from '../assets/images/favorite.png'
import favoriteBorder from '../assets/images/favorite-border.png'

export const Camera = () => {
    
		const [camera, setCamera] = useState(0);
		const handleDecremente = () =>{
			setCamera(prevCount => prevCount - 1 )
		}
		const handleIncremente = () =>{
			setCamera(prevCount => prevCount + 1)
		}
		
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
							<div className="cards__item">
								<div className="cards__item-body">
									<div className="cards__item-body-image">
										<img src={camera} alt="" className="cards__item-img"/>
									</div>
									<span className="cards__item-body-name">RANGEFINDER CAMERA</span>
									<span className="cards__item-body-price">$36.5</span>
								</div>
								<div className="cards__item-footer">
									<div className="quantity">
										<input className="qty" type="number" step="1" min="1" value={camera}/>
										<div className="quantity__button">
											<button className="quantity-add js-inc quantity-button" onClick={handleIncremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button className="quantity-remove js-dec quantity-button" onClick={handleDecremente} >
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a className="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div className="heart">
										<img src={favorite} alt="heart" className="heart-icon heart__full"/>
										<img src={favoriteBorder} alt="heart" className="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
  )
}

export default Camera