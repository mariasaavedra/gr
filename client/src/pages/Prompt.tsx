import type { ReactElement } from 'react'

export default function Prompt(): ReactElement {
	return (
		<>
			<div className='mx-auto flex max-w-2xl  flex-col justify-center p-16 text-center'>
				<img
					src='https://askmybook.com/static/book.2a513df7cb86.png '
					alt='book'
					width='135px'
					height='100px'
					className='mx-auto rounded-xl shadow-md'
				/>
				<p className='my-8 text-3xl font-bold'>Ask My Book</p>
				<p className='text-grey-500 mx-auto text-left text-lg'>
					This is an experiment in using AI to make my book's content more
					accessible. Ask a question and AI'll answer it in real-time:
				</p>
				<textarea
					placeholder='What is The Minimalist Entrepreneur about?'
					className='text-grey-500 my-8 mx-auto w-full rounded-xl border-[2px] border-black text-left font-mono font-semibold placeholder-black'
				/>
				<div>
					<button className='mr-2 rounded-xl bg-black p-4 text-white'>
						Ask Question
					</button>
					<button className='rounded-xl bg-gray-200 p-4 text-gray-800 text-gray-900'>
						I'm Feeling Lucky
					</button>
				</div>
				<div className='my-8'>
					<p>Project by Sahil Lavingia • Fork on GitHub</p>
				</div>
			</div>
		</>
	)
}
