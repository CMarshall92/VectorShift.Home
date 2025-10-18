'use client'

import Link from 'next/link'

export default function Menu() {
	return (
		<ul className="nav-list">
			<li className="item">
				<Link href="#">
					<span/>
				</Link>
			</li>
		</ul>
	)
}
