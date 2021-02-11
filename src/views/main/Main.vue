<template>
	<div class="centeredMain margin">
		<img class="main" src="new_hero.jpg" alt="Me, visiting Fontana, CA" />
		<h3 class="center-text">Patrick Canny</h3>
		<h5 class="center-text">Software Engineer, Yoyo Player, Outdoor Fanatic</h5>
		<ul id="links">
			<li v-for="(link, index) in links" :key="index">
				<!-- TODO COMPONENT FOR ITEMS -->
				<div>{{ link }}</div>
			</li>
		</ul>

		<div class="center-text">
			<a href="https://www.github.com/patrickcanny"
				><img class="icon" src="icons/github.png"
			/></a>
			<a href="mailto:hirepatrickcanny@gmail.com"
				><img class="icon" src="icons/email.png"
			/></a>
			<a href="https://www.linkedin.com/in/patrick-canny-191650101/"
				><img class="linkedin" src="icons/linkedin.png"
			/></a>
		</div>
		<div class="res center-text" title="Resume">
			<a href="patrick_canny_resume.pdf"><h5>Resume</h5></a>
			<a href="./blog/blog.html"><h5>Blog</h5></a>
			<a href="./about.html"><h5>About</h5></a>
			<br />
			<a style="color: white" href="./clips/last_jedi.mp4"
				><h5>Jedi Mind Tricks</h5></a
			>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			links: [
				'https://www.github.com/patrickcanny',
				'mailto:hirepatrickcanny@gmail.com',
				'https://www.linkedin.com/in/patrick-canny-191650101/',
			],
		};
	},
};
</script>
