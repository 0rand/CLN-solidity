var solc = require('solc')
var fs = require('fs')

var input = {
  'BasicToken.sol': fs.readFileSync(__dirname + '/../../contracts/BasicToken.sol', 'utf8'),
  'ERC20.sol': fs.readFileSync(__dirname + '/../../contracts/ERC20.sol', 'utf8'),
  'Ownable.sol': fs.readFileSync(__dirname + '/../../contracts/Ownable.sol', 'utf8'),
  'SafeMath.sol': fs.readFileSync(__dirname + '/../../contracts/SafeMath.sol', 'utf8'),
  'TestToken.sol': fs.readFileSync(__dirname + '/../../contracts/TestToken.sol', 'utf8'),
  'TokenHolder.sol': fs.readFileSync(__dirname + '/../../contracts/TokenHolder.sol', 'utf8'),
  'VestingTrustee.sol': fs.readFileSync(__dirname + '/../../contracts/VestingTrustee.sol', 'utf8'),
  'TestTokenSale.sol': fs.readFileSync(__dirname + '/../../contracts/TestTokenSale.sol', 'utf8'),
}

var contractCompiled = solc.compile({sources: input}, 1)
var contractObj = contractCompiled.contracts['TestTokenSale.sol:TestTokenSale']
var abi = contractObj.interface

console.log(abi)