<template>
	<div class="bg">
		<div class="main">
			<scroll-box ref="sb">
				<ul ref="ul">
					<li v-for="(item, index) in list" :key="index">
						<h2>{{item}}</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis, tempora enim voluptates ducimus earum expedita. Recusandae, eligendi atque iure voluptatem reiciendis aperiam sunt ex suscipit nesciunt similique unde iusto rem eum tempora blanditiis animi dolor possimus commodi aliquam necessitatibus! Nobis vel reiciendis delectus ratione possimus deleniti soluta. Nihil recusandae iusto repellat, deleniti sint harum architecto, iure adipisci voluptatem laborum cumque quos consequatur reprehenderit ab voluptatum suscipit ex beatae dolore vero corporis error illum totam inventore! Neque commodi dolores officia. Nihil maxime quibusdam voluptates dolor non, sint iste impedit alias, excepturi ex blanditiis. Quasi veritatis dolorum et voluptates culpa asperiores.</p>
					</li>
				</ul>
			</scroll-box>
		</div>
	</div>
</template>

<script>
import ScrollBox from './components/ScrollBox'
export default {
	data () {
		return {
			list: (() => {
				let list = []
				for (let i = 1; i < 10; i++) {
					list.push(`Title: 000${i}`)
				}
				return list
			})()
		}
	},
	mounted () {
		this.$refs.sb.initScrollBox(this.$refs.ul)
	},
	components: {
		ScrollBox
	}
}
</script>

<style>
	.bg {
		padding: 50px;
	}

	.main {
		width: 400px;
		height: 602px;
		border: 1px solid #585858;
	}

	ul {
		position: absolute;
		padding: 15px;
		color: #585858;
	}

	li {
		list-style: none;
		margin-top: 15px;
	}

	li:first-child {
		margin-top: 0;
	}
</style>
