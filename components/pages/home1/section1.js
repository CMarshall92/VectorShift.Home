
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-feature tf-spacing-3">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-4">
							<div className="wg-feature-item tf-hover-icon wow fadeInUp" data-wow-delay="0s">
								<div className="icon-item hover-icon">
									<i className="flaticon-target" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service">
										Lets Scope
									</Link>
								</p>
								<p className="text text-justify">
									We oversee the complete software development lifecycle, from concept to launch. 
									Our collaborative process ensures your vision is fully understood, scoped, and 
									transformed into a detailed action plan for a Minimum Viable Product (MVP). We 
									provide you with the flexibility to either build with our team or take the strategic 
									plan to another developer.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Project Scoping</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Development Planning</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Planning MVP & Delivery Timelines</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Strategic Action Plan Produced</p>
									</li>
								</ul>
							</div>
						</div>
						
						<div className="col-lg-4">
							<div className="wg-feature-item style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon-item hover-icon">
									<i className="flaticon-rocket" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service-02">
										Lets Build
									</Link>
								</p>
								<p className="text text-justify">
									Now its time to build, The strategic planning phase is now complete, and we are proceeding 
									with implementation. The development team will execute the build process in iterative stages, 
									delivering on the key milestones defined in the strategic document. This approach ensures 
									regular opportunities for client feedback and alignment with the over all progress of the project.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Development Starts</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Milestone Feedback Approach</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Performance Tracking</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Deliverables: Final Build & Full Codebase</p>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="wg-feature-item style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon-item hover-icon">
									<i className="flaticon-megaphone" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service" className="text-white hover-text-main-yellow">
										Lets Deploy
									</Link>
								</p>
								<p className="text text-justify">
									The application has been built & tested, we are now ready for deployment. We will 
									configure the production cloud infrastructure, implementing powerful automation to enable 
									a seamless transition from development to the live environment. Upon completion, we can 
									provide ongoing management and support or execute a complete handover of the final, secure 
									production environment to you.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Automated Deployments & Go-Live</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Managed Cloud & Web Hosting</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Ongoing DevOps & Maintenance</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>Performance Monitoring & Live Support</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
