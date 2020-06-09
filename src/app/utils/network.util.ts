export const network = (networkId): string => {
    switch (networkId) {
        case '1':
            return 'Mainnet';
        case '3':
            return 'Ropsten';
        case '4':
            return 'Rinkeby';
        case '42':
            return 'Kovan';
        default:
            return 'Local';
    }
}