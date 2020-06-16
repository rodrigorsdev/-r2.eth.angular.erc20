export const link = (networkId, transactionHash): string => {
    switch (networkId) {
        case '1':
            return `https://etherscan.io/tx/${transactionHash}`;
        case '3':
            return `https://ropsten.etherscan.io/tx/${transactionHash}`;
        case '4':
            return `https://rinkeby.etherscan.io/tx/${transactionHash}`;
        case '42':
            return `https://kovan.etherscan.io/tx/${transactionHash}`;
        default:
            return 'Local';
    }
}