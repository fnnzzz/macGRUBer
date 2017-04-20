## macGRUBer

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
``` 
   node index.js --pageFrom 5 --pageTo 100 --country us --timeout 200 --filterBankName "NATIONAL CITY BANK" 
```

## Sort util

After grab you can sort the results by the name of the bank using sort util (sort.js)
Just run with one of flags (--file or --url) depending on the location of the file with the results.
For example:

```
   node sort.js --file "bins.txt"
      OR
   node sort.js --url "https://gist.githubusercontent.com/fnnzzz/eb6ecb860d3c1623c1530cb7044b5900/raw/c93b810d2b1b6b071cb946efb2fef3701bdd4697/bins.txt"

```
