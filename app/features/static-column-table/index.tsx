import { FC, memo } from "react"
import style from './index.module.css'


const COLUMN_HEADER_LENGTH = 7;

const generateTable = (length: number) => {
	const header = Array.from({ length: length }, (_, i) => `Column ${i + 1}`)
	const body = Array.from({ length: length }, (_, i) => Array.from({ length: length }, (_, j) => `Row ${i + 1}, Column ${j + 1}`))

	return {
		header,
		body
	}
}

export const StaticColumnTable: FC = memo(() => {
	const { header, body } = generateTable(COLUMN_HEADER_LENGTH)
	return (
		<div className="grid">
			<h2>3番目のカラムがSticky</h2>
			<div className={style.wrapper}>
				<table className={style.table}>
					<thead>
						<tr>
							{header.map((column, index) => (
								<th key={index}>{column}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{body.map((row, rowIndex) => (
							<tr key={rowIndex}>
								{row.map((cell, cellIndex) => (
									<td key={cellIndex}>{cell}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
})
