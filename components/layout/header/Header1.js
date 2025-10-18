import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			<div className="tf-topbar">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="topbar-inner">
								<div className="topbar-left">
									<div className="icon">
										<i className="flaticon-tag" />
									</div>
									<p>Your Digital & Creative Needs, Solved By Welcome to VectorShift</p>
								</div>
								<div className="topbar-right">
									<ul className="infor-list">
										<li>
											<div className="icon">
												<i className="flaticon-open-mail" />
											</div>
											<Link href="mailto:Themesflat@gmail.com">
												c.marshall.engineer@gmail.com
											</Link>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-phone-call" />
											</div>
											<p>
												Phone No :<Link href="/tel:+00012345688"> +44 (07447) 948088
												</Link>
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-clock" />
											</div>
											<a>
												Working Hours : 8am - 5pm
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{/* /.Topbar */}

			{/* Header */}
			<header className="tf-header">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-inner">
								<div className="header-left">
									<div className="logo-site">
										<Link href="/">
											{/* <Image
												width="139"
												height="39"
												id="logo_header"
												src="/images/logo/logo.png"
												data-retina="./images/logo/logo@2x.png"
												alt=""
											/> */}
											<p style={{ color: 'white', fontFamily: "Manrope", fontSize: '2.5rem' }}>VectorShift</p>
										</Link>
									</div>
								</div>
								<div className="header-center">
									<nav className="main-nav">
										<Menu />
									</nav>
								</div>
								<div className="header-right">
									<Link href="/contact" className="tf-btn small">
										Get In Touch
										<i className="icon-chevron-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
