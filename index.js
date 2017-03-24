const fetch = require('node-fetch')
const cheerio = require('cheerio')
const args = require('node-args');

const countryCode = args.country || 'ua'
const pageFrom = args.pageFrom || 1
const pageTo = args.pageTo || 10
const timeout = args.timeout || 100
const filterBank = args.filterBankName || false

let currentPageNum = pageFrom
let totalCount = 0

const getUrl = () => `http://mastercvv.ru/bin/lookup/creditcard/page_${currentPageNum}.html`

const fetchPage = (url) => fetch(url).then(r => r.text())

const showFormatData = (tr) => {
	const $ = cheerio.load(tr)
	const arr = []
	const binBank = $('td').eq(0).text()
	const bankName = $('td').eq(1).text()

	if( filterBank && filterBank != bankName ) {
		return
	}

	return `${binBank} | ${bankName}`
}

const parseResponse = (r) => {
	let $ = cheerio.load(r)
	let stringData = null

	$('tr').map((id, item) => {
		const countryFromPic = ($(item).find('img').attr('src') + "").slice(-6, -4)

		if( countryFromPic === countryCode ) {
			stringData = showFormatData($(item).html())
		}
	})

	return stringData
}

(function getData() {

	if( currentPageNum < pageTo ) {
		fetchPage(getUrl()).then(r => {
			const data = parseResponse(r)
			if(data) {
				console.log(data)
				totalCount++
			}
		}).catch(e => { console.log(`Error: ${e.code}, ${getUrl()}`) })

		setTimeout(() => {
			currentPageNum++
			getData()
		}, timeout)
	}
	else {
		setTimeout(() => {
			console.log(`\nTotal count: `, totalCount)
		}, timeout * 50)
	}

})()