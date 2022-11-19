// https://avatars.dicebear.com/styles/avataaars

import React from 'react';
import Avatar from 'avataaars';

class Avatars extends React.Component {
  render () {
    return (
      <div>
        <Avatar
          style={{width: '85px', height: '85px', margin: '0.5em 1em 0em 0em'}}
          avatarStyle='Circle'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />
      </div>
    )
  }
}

export default Avatars; 