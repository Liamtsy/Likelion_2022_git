import React from 'react';
import Comment from './Comment';

const comments = [
	{
		name: 'Liam Youm',
		comment: 'Hi there!'
	},
	{
		name: 'Yuni Ko',
		comment: `Hi! I'm set to go to Vancouver :)`
	},
	{
		name: 'Coco Kim',
		comment: 'Meow!'
	}
];

function CommentList(props) {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment} />
				);
			})}
		</div>
	);
}

export default CommentList;
