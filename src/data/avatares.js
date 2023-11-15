export const avatares = [
    require('../../assets/avatar0.png'),
    require('../../assets/avatar1.png'),
    require('../../assets/avatar2.png'),
    require('../../assets/avatar3.png'),
    require('../../assets/avatar4.png'),
]

import avatar0 from '../../assets/avatar0.png';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';
import {Image} from 'react-native';


export const avataresURI = [
    Image.resolveAssetSource(avatar0).uri,
    Image.resolveAssetSource(avatar1).uri,
    Image.resolveAssetSource(avatar2).uri,
    Image.resolveAssetSource(avatar3).uri,
    Image.resolveAssetSource(avatar4).uri,
];