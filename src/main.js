import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Paul Orschau',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Rolling out new versions of software regularly'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Github Actions',
		// What do you want to learn in this workshop? 
		expectations: [
			'a little bit about Jenkins'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'go running', 
			'PC gaming', 
			'make cocktails'
		]
	}
});
