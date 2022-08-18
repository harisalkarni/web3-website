// https://eth-rinkeby.alchemyapi.io/v2/-K6dIxaI2F2fRhXyRMARzYb1p-ejz4PP

require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/-K6dIxaI2F2fRhXyRMARzYb1p-ejz4PP',
      accounts: ['241a170d1c06541bc53970dd6e5e0524b69e591e0b1309a8a2ab2240e7751206']
    }
  }
}