import clouds from '../assets/clouds.png';
import clear from '../assets/clear.png';
import rain from '../assets/rain.png';
import thunderstorm from '../assets/thunderstorm.png';

export const verificarClimaERetornarIcone = climaCode => {
    if (
        [500, 501, 502, 503, 504, 511, 520, 521, 522, 531].includes(climaCode)
    ) {
        return rain;
    }
    if (climaCode === 800) {
        return clear;
    }
    if (
        [200, 201, 202, 210, 211, 212, 221, 230, 231, 232].includes(climaCode)
    ) {
        return thunderstorm;
    }
    return clouds;
};
