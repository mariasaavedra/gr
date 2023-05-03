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
				<p className='my-6 text-2xl font-bold'>Ask My Book</p>
				<p className='text-grey-500 mx-auto text-left text-rg'>
					This is an experiment in using AI to make my book's content more
					accessible. Ask a question and AI'll answer it in real-time:
				</p>
				<textarea
					placeholder='What is The Minimalist Entrepreneur about?'
					className='text-grey-500 font-light my-8 mx-auto w-full rounded-xl border-[1px] border-black text-left font-mono font-semibold placeholder-black'
				/>
				<div>
					<button className='mr-4 rounded-xl bg-black py-3 px-4 text-white'>
						Ask question
					</button>
					<button className='rounded-xl bg-gray-100 py-3 px-4 text-gray-800 text-gray-900'>
						I'm feeling lucky
					</button>
				</div>
				<div className='my-8'>
					<p>Project by Sahil Lavingia • Fork on GitHub</p>
				</div>
			</div>
		</>
	)
}
