import './../styles/ExperienceS.css';
import { useState } from 'react';

const ExperienceS = () => {
	/* function handleClick(e) {
		const target = e.target;
		const tabNum = target.dataset.tab;
		const activeTab = document.querySelector('.tabs .active');
		const activeContent = document.querySelector('.content .visible');
		const currentContent = document.querySelector(
			`.content__section[data-tab='${tabNum}']`
		);

		if (!tabNum) {
			return;
		}

		activeTab.classList.remove('active');
		target.classList.add('active');
		activeContent.classList.remove('visible');
		currentContent.classList.add('visible');
	} */
	return (
		<>
			{/* <section className='ExperienceS-container'>
				<div className='container' handleClick={handleClick}>
					<div className='tabs'>
						<a className='tab tab-1 active' href='#' data-tab='1'>
							Tab 1
						</a>
						<a className='tab tab-2' href='#' data-tab='2'>
							Tab 2
						</a>
						<a className='tab tab-3' href='#' data-tab='3'>
							Tab 3
						</a>

						<span className='highlighter'></span>
					</div>

					<div className='content'>
						<div className='content__section visible' data-tab='1'>
							<p>
								Lorem ipsum dolor amet umami kogi you probably haven't heard of
								them activated charcoal hexagon literally. Vice art party XOXO
								retro blue bottle. Squid tousled skateboard man bun pabst
								unicorn sriracha poutine echo park crucifix plaid health goth
								four dollar toast. XOXO gochujang PBR&B kombucha brooklyn street
								art lyft swag.
							</p>
						</div>

						<div className='content__section' data-tab='2'>
							<p>
								Wayfarers small batch brooklyn, pabst godard flannel blog
								authentic fingerstache salvia disrupt kombucha pickled. Actually
								hammock semiotics DIY cold-pressed lo-fi swag franzen chia
								locavore. Biodiesel venmo irony, salvia shaman plaid photo booth
								keffiyeh VHS slow-carb chillwave knausgaard vape occupy.
							</p>
						</div>

						<div className='content__section' data-tab='3'>
							<p>
								Gluten-free you probably haven't heard of them jianbing
								pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland
								freegan small batch before they sold out DIY marfa chillwave
								sustainable taiyaki bushwick. Meggings franzen kogi, next level
								fingerstache +1 kitsch YOLO activated charcoal craft beer
								adaptogen twee. Yuccie tumeric irony heirloom, shoreditch
								kinfolk swag cold-pressed 90's chicharrones.
							</p>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default ExperienceS;

/* <div className='ExperienceS-div'>
					<h2>Where I've Worked</h2>
					<div className='Options'>
						<span className='Options-visible '>Freelancer</span>
						<span>Empty</span>
						<span>Empty</span>
					</div>
					<div className='ExperienceS-text Description-visible'>
						<h3>
							Front-End Dev<span></span>
						</h3>
						<p className='Experience-date'>November 2022 - Present</p>
						<ul>
							<li>
								Develop static sites for small businesses using technologies
								like HTML, CSS, JavaScript and React
							</li>
						</ul>
					</div>
				</div> */
