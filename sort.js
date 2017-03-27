const fetch = require('node-fetch')
const fs = require('fs')
const args = require('node-args')

const readTxt = (txt) => {
	const sortObj = {}
	const txtLines = txt.split('\n')
	for(let i = 0; i < txtLines.length; i++) {
		if( txtLines[i].slice(0 , 5) === 'Error' ) continue

		const binCode = txtLines[i].slice(0 , 6)
		const bankName = txtLines[i].slice(9)

		if( !([bankName] in sortObj) ) {
			sortObj[bankName] = []
		}

		sortObj[bankName].push(binCode)
	}

	return sortObj
}

if( args.url && args.url.length > 5 ) {
	fetch(args.url).then(r => r.text()).then(d => console.log(readTxt(d)))
}

else if( args.file && args.file.length > 3 ) {
	const txtFile = fs.readFileSync(args.file, 'utf8')
	console.log(readTxt(txtFile))
}

else {
	console.log('\n\n\tPlease specify --url or --file\n')
}
