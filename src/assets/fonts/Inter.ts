import { type CSSObject } from '@mantine/core'
import Black from 'inter-ui/Inter (web hinted latin)/Inter-Black.woff2'
import BlackItalic from 'inter-ui/Inter (web hinted latin)/Inter-BlackItalic.woff2'
import Bold from 'inter-ui/Inter (web hinted latin)/Inter-Bold.woff2'
import BoldItalic from 'inter-ui/Inter (web hinted latin)/Inter-BoldItalic.woff2'
import ExtraBold from 'inter-ui/Inter (web hinted latin)/Inter-ExtraBold.woff2'
import ExtraBoldItalic from 'inter-ui/Inter (web hinted latin)/Inter-ExtraBoldItalic.woff2'
import ExtraLight from 'inter-ui/Inter (web hinted latin)/Inter-ExtraLight.woff2'
import ExtraLightItalic from 'inter-ui/Inter (web hinted latin)/Inter-ExtraLightItalic.woff2'
import Italic from 'inter-ui/Inter (web hinted latin)/Inter-Italic.woff2'
import Light from 'inter-ui/Inter (web hinted latin)/Inter-Light.woff2'
import LightItalic from 'inter-ui/Inter (web hinted latin)/Inter-LightItalic.woff2'
import Medium from 'inter-ui/Inter (web hinted latin)/Inter-Medium.woff2'
import MediumItalic from 'inter-ui/Inter (web hinted latin)/Inter-MediumItalic.woff2'
import Regular from 'inter-ui/Inter (web hinted latin)/Inter-Regular.woff2'
import SemiBold from 'inter-ui/Inter (web hinted latin)/Inter-SemiBold.woff2'
import SemiBoldItalic from 'inter-ui/Inter (web hinted latin)/Inter-SemiBoldItalic.woff2'
import Thin from 'inter-ui/Inter (web hinted latin)/Inter-Thin.woff2'
import ThinItalic from 'inter-ui/Inter (web hinted latin)/Inter-ThinItalic.woff2'

type FontFace = CSSObject

const InterThin: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${Thin}') format("woff2")`,
    fontWeight: 100,
    fontStyle: 'normal',
  },
}
const InterThinItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${ThinItalic}') format("woff2")`,
    fontWeight: 100,
    fontStyle: 'italic',
  },
}
const InterExtraLight: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${ExtraLight}') format("woff2")`,
    fontWeight: 200,
    fontStyle: 'normal',
  },
}
const InterExtraLightItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${ExtraLightItalic}') format("woff2")`,
    fontWeight: 200,
    fontStyle: 'italic',
  },
}
const InterLight: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${Light}') format("woff2")`,
    fontWeight: 300,
    fontStyle: 'normal',
  },
}
const InterLightItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${LightItalic}') format("woff2")`,
    fontWeight: 300,
    fontStyle: 'italic',
  },
}
const InterRegular: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${Regular}') format("woff2")`,
    fontWeight: 400,
    fontStyle: 'normal',
  },
}
const InterItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${Italic}') format("woff2")`,
    fontWeight: 400,
    fontStyle: 'italic',
  },
}
const InterMedium: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${Medium}') format("woff2")`,
    fontWeight: 500,
    fontStyle: 'normal',
  },
}
const InterMediumItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${MediumItalic}') format("woff2")`,
    fontWeight: 500,
    fontStyle: 'italic',
  },
}
const InterSemiBold: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${SemiBold}') format("woff2")`,
    fontWeight: 600,
    fontStyle: 'normal',
  },
}
const InterSemiBoldItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${SemiBoldItalic}') format("woff2")`,
    fontWeight: 600,
    fontStyle: 'italic',
  },
}
const InterBold: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${Bold}') format("woff2")`,
    fontWeight: 700,
    fontStyle: 'normal',
  },
}
const InterBoldItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${BoldItalic}') format("woff2")`,
    fontWeight: 700,
    fontStyle: 'italic',
  },
}
const InterExtraBold: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${ExtraBold}') format("woff2")`,
    fontWeight: 800,
    fontStyle: 'normal',
  },
}
const InterExtraBoldItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${ExtraBoldItalic}') format("woff2")`,
    fontWeight: 800,
    fontStyle: 'italic',
  },
}
const InterBlack: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${Black}') format("woff2")`,
    fontWeight: 900,
    fontStyle: 'normal',
  },
}
const InterBlackItalic: FontFace = {
  '@font-face': {
    fontFamily: 'Inter',
    src: `url('${BlackItalic}') format("woff2")`,
    fontWeight: 900,
    fontStyle: 'italic',
  },
}

export {
  InterBlack,
  InterBlackItalic,
  InterBold,
  InterBoldItalic,
  InterExtraBold,
  InterExtraBoldItalic,
  InterExtraLight,
  InterExtraLightItalic,
  InterLight,
  InterLightItalic,
  InterMedium,
  InterMediumItalic,
  InterRegular,
  InterItalic,
  InterSemiBold,
  InterSemiBoldItalic,
  InterThin,
  InterThinItalic,
}
