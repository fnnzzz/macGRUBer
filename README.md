## Grabbbins

Grab BIN codes of banks from `http://mastercvv.ru` allow filtering by country and bank name.

## Installation

1. Clone this repo
2. Run index.js

## Usage

``` 
   Command: node index.js [options]

   Options:

     --pageFrom         default: 1
     --pageTo           default: 10
     --country          country code (two-letter), [for example: en], default: ua
     --timeout          timeout for requests (default: 100)
     --filterBankName   Filter results by bank name [for example: "BANK OF AMERICA"], default: false

```

## Example
``` node index.js --pageFrom 5 --pageTo 100 --country us --timeout 200 --filterBankName "NATIONAL CITY BANK" ```
