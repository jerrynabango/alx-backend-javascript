class Utils {
    static calculateNumber(type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);
        let ouput = 0;
        switch (type) {
            case 'SUM':
                ouput = roundedA + roundedB;
                break;
            case 'SUBTRACT':
                ouput = roundedA - roundedB;
                break;
            case 'DIVIDE':
                if (roundedB === 0) {
                    ouput = "Error";
                } else {
                    ouput = roundedA / roundedB;
                }
                break;
        }
        return ouput;
    }
}

module.exports = Utils;
