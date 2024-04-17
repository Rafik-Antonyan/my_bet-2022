import * as images from '../images'

let symbolsData = {
    rum: {
        frequency: 1,
        data: {
            source: images.default.SymbolRum,
            winFactor: [1, 20, 200]
        }
    }, // 1 x flask of rum

    ten: {
        frequency: 5,
        data: {
            source: images.default.Symbol10,
            winFactor: [1, 5, 20]
        }
    }, // 5 x 10

    J: {
        frequency: 5,
        data: {
            source: images.default.SymbolJ,
            winFactor: [1, 5, 20]
        }
    }, // 5 x J

    Q: {
        frequency: 5,
        data: {
            source: images.default.SymbolQ,
            winFactor: [1, 5, 20]
        }
    }, // 5 x Q

    K: {
        frequency: 4,
        data: {
            source: images.default.SymbolK,
            winFactor: [1, 8, 30]
        }
    }, // 4 x K

    A: {
        frequency: 4,
        data: {
            source: images.default.SymbolA,
            winFactor: [1, 8, 30]
        }
    }, // 4 x A

    parrot: {
        frequency: 3,
        data: {
            source: images.default.SymbolParrot,
            winFactor: [6, 20, 150]
        }
    }, // 3 x parrot

    skull: {
        frequency: 3,
        data: {
            source: images.default.SymbolSkull,
            winFactor: [6, 20, 150]
        }
    }, // 3 x skull

    treasure: {
        frequency: 2,
        data: {
            source: images.default.SymbolTreasure,
            winFactor: [8, 80, 400]
        }
    }, // 2 x treasure

    captain: {
        frequency: 1,
        data: {
            source: images.default.SymbolCaptain,
            winFactor: [20, 200, 1000]
        }
    }  // 1 x captain
}

export const getSymbols = () => {
    const symbols = []
    const symbolSelector = Object.entries(symbolsData);
    for (let i = 0; i < symbolSelector.length; i++) {
        for (let j = 0; j < symbolSelector[i][1].frequency; j++) {
            symbols.push(symbolSelector[i][1].data)
        }
    }
    var tmp,
        current,
        top = symbols.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = symbols[current];
            symbols[current] = symbols[top];
            symbols[top] = tmp;
        }
    return symbols
}

