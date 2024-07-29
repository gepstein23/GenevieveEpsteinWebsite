var homepageDescription = 
`Senior Full Stack Software Engineer @ FanDuel`

const INFO = {
	main: {
		name: "Genevieve Epstein",
		title: "Genevieve Epstein",
		email: "genevieve.epstein@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/gepstein23",
		linkedin: "https://www.linkedin.com/in/genevieveepstein/",
		facebook: "https://facebook.com/shlazer",
	},

	homepage: {
		title: "Genevieve Epstein",
		description: homepageDescription,
	},

	about: {
		title: "Hello! I'm Genevieve.",
		description:
			"",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Poker High Hand Simulator",
			description:
				" Researching the optimization of High Hand promotions using MCTS by developing a memory-efficient Java app that performs adjustable simulations – with custom-built card-playing mechanics, UI, animations, and ML capabilities.",
			logo: "../royalflush.png",
			linkText: "View Project",
			link: "https://github.com/gepstein23/PokerHighHandSimulator",
		},

		{
			title: "Table Tennis Elite Tournament Predictor",
			description:
				" Forecasts table tennis tournament match outcomes through the recursive remote scraping of historical match data, generating easily interpretable predictions of a players’ relative performance, based on their respective playing histories via a CL program.",
			logo: "../tabletennis.png",
			linkText: "View Project",
			link: "https://github.com/gepstein23/TableTennisEliteTournamentPredictor",
		},
		{
			title: "Poker Hand Memorializer",
			description:
				" In the works... ",
			logo: "../table.png",
			linkText: "View Project",
			link: "https://github.com/gepstein23/PokerHandMemorializer",
		}
	],

	vmware_projects: [
		{
			title: "Fast Cross vCenter Server vApp Instantiation Utilizing Shared Storage 10.4",
			description:
				"",
			logo: "../db.png",
			linkText: "View Project",
			link: "https://docs.vmware.com/en/VMware-Cloud-Director/10.4/rn/vmware-cloud-director-104-release-notes/index.html#:~:text=Fast%20Cross%20vCenter%20Server%20vApp%20Instantiation%20Utilizing%20Shared%20Storage",
		},
		{
			title: "Improved VM Template instantiation performance with Cross VC Clone 10.6",
			description:
				"",
			logo: "../vm.png",
			linkText: "View Project",
			link: "https://docs.vmware.com/en/VMware-Cloud-Director/10.6/rn/vmware-cloud-director-106-release-notes/index.html#:~:text=Improved%20VM%20Template%20instantiation%20performance",
		},
		{
			title: "Replication Tracking VM Placement Solution 10.5.1",
			description:
				"",
			logo: "../fo.png",
			linkText: "View Project",
			link: "https://docs.vmware.com/en/VMware-Cloud-Director-Availability/4.7/VMware-Cloud-Director-Availability-User-Guide/GUID-0239E9EA-25DA-4262-88F2-F76C59F4E268.html",
		}
	],
};

export default INFO;
