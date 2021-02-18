import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
export default function Lightbox({videoId, thumbnail, videoTitle}) {
	const [toggler, setToggler] = useState(false);
	return (
		<div>
			<a href={"https://www.youtube.com/embed/" + videoId + "?autoplay=1" } onClick={ e => e.preventDefault() + setToggler(!toggler) }>
			{thumbnail}
			</a>
			<FsLightbox
				toggler={ toggler }
				key={ videoId }
				sources={[
					"https://www.youtube.com/watch?v=" + videoId + "?autoplay=1"
				]}
			/>
		</div>
	);
}