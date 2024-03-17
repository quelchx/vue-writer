<template>
    <div class="card">
        <h1>VueWrite Demo</h1>

        <code>
            &lt;<span>VueWriter :string="['Hello World!', 'VueWriter is an awesome']" </span>/&gt;
        </code>
        <VueWriter :string="['Hello World!', 'VueWriter is awesome!']" />
        
        <hr />
        
        <code>
            &lt;<span>VueWriter :string="Hello World!" </span>/&gt;
        </code>
        <VueWriter string="Hello World!" />
    </div>
</template>

<script setup lang='ts'>
import VueWriter from './vue-writer.vue';
</script>

<style scoped>
h1 {
    font-size: 1.6rem;
    color: #444;
}
code {
    font-size: 1rem;
    background-color: #282c34;
    padding: 1rem;
    margin-bottom: 0.5rem;
    display: block;
    border-radius: 5px;
    color: white;
}
code span {color: #7ec699;}
hr {margin: 2rem 0;}
.card {
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	border-radius: 5px;
    color: #555;
    max-width: 700px;
    text-align: center;
    margin: 5rem auto;
	line-height: 1.6;
	font-family:
		Inter,
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		'Fira Sans',
		'Droid Sans',
		'Helvetica Neue',
		sans-serif;
	font-size: 1.3rem;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
ul li {width: fit-content;}
</style>