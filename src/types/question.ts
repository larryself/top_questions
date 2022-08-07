export type StackOverFlowQuestion = {
	score: number;
	title: string;
	owner: {
		display_name: string;
		reputation: number;
		profile_image: string;
		link: string;
	};
	view_count: number;
	is_answered: boolean;
	question_id: number;
	tags: string[];
};
