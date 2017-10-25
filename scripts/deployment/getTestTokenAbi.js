var config = require('./config')
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

solc.loadRemoteVersion(config.get('compilerVersion'), function(err, solcSnapshot) {
	if (err) return console.error('err =', err)
	var contractCompiled = solcSnapshot.compile({sources: input}, 1)
	var contractObj = contractCompiled.contracts['TestToken.sol:TestToken']
	var abi = contractObj.interface

	console.log(abi)
})